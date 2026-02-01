"use client";
import { NavBar } from "@/app/components/navbar";
import Footer from "@/app/components/ui/footer";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[0-9]+$/; // only + and digits

const ContactSection = () => {
  const MAP_LAT = 49.1333782;
  const MAP_LNG = -122.8219094;
  const MAP_ADDRESS = "Dhesi Meat Shop, 72 Ave, Surrey, BC, Canada";

  const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&output=embed`;
  const GOOGLE_MAPS_LINK = `https://www.google.com/maps/place/Dhesi+Meat+Shop+72+Ave/@49.1333782,-122.8219094,530m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5485db0003a2c625:0xf088116722803a19!8m2!3d49.1333782!4d-122.8219094!16s%2Fg%2F11w4trwwrq?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D`;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = "";

    // Required validation (phone is optional)
    if (!value.trim() && name !== "phone") {
      error = "This field is required";
    }

    if (name === "email" && value) {
      if (!emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }
    }

    // Phone validation ONLY if value exists
    if (name === "phone" && value) {
      if (!phoneRegex.test(value)) {
        error = "Only numbers and + are allowed";
      } else if (value.replace("+", "").length < 10) {
        error = "Phone number is incomplete";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // prevent invalid phone characters while typing
    if (name === "phone" && value && !/^[+0-9]*$/.test(value)) {
      return;
    }

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    Object.entries(values).forEach(([key, value]) => {
      let error = "";

      if (!value.trim() && key !== "phone") {
        error = "This field is required";
      }

      if (key === "email" && value && !emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }

      if (key === "phone" && value) {
        if (!phoneRegex.test(value)) {
          error = "Only numbers and + are allowed";
        } else if (value.replace("+", "").length < 10) {
          error = "Phone number is incomplete";
        }
      }

      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to submit");

      // Show success popup
      setShowPopup(true);

      // Reset form
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="border-t border-gray-500/90" />
      <section className="w-full bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT CONTENT */}
          <div className="md:text-center lg:text-start">
            <h2 className="font-satoshi text-3xl md:text-5xl font-bold leading-tight">
              We’re Here to Listen.
              <br />
              Connect With{" "}
              <span className="font-clearface p-1 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent italic font-light">
                Us Today
              </span>
            </h2>

            <p className="text-gray-400  mt-6 max-w-md md:mx-auto lg:mx-0">
              Have a question or need assistance? Our team is here to listen and
              support you. Reach out to us today, and we’ll get back to you as
              soon as possible.
            </p>

            {/* CONTACT INFO */}
            <div className="flex justify-between md:justify-around lg:justify-between  items-center mt-10 lg:max-w-md">
              <div className="flex items-start gap-4">
                {/* <Phone className="text-[#D4AF37]" /> */}
                <Image
                  src={"/icons/phone-icon.svg"}
                  alt="Phone"
                  width={20}
                  height={20}
                />
                <div>
                  <p className="font-semibold text-start text-base sm:text-lg md:text-lg">
                    Phone
                  </p>
                  <p className="text-gray-400 text-start">Call us today</p>
                  <p className="text-white text-start text-xs sm:text-sm md:text-lg">
                    +1(555)000-0000
                  </p>
                </div>
              </div>

              <a href={GOOGLE_MAPS_LINK}>
                <div className="flex items-start gap-4">
                  {/* <MapPin className="text-[#D4AF37]" /> */}
                  <Image
                    src={"/icons/map-pin-icon.svg"}
                    alt="Map Pin"
                    width={20}
                    height={20}
                  />
                  <div>
                    <p className="font-semibold text-start text-base sm:text-lg md:text-lg">
                      Location
                    </p>
                    <p className="text-gray-400 text-start">
                      Reach out anytime
                    </p>
                    <p className="text-white text-start text-xs sm:text-sm  md:text-lg">
                      Fleetwood, Surrey, BC
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* GOOGLE MAP */}
            <div className="mt-10 lg:max-w-md">
              <div className="relative rounded-xl overflow-hidden border border-gray-700 group">
                {/* Clickable Overlay */}
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Open location in Google Maps"
                />

                <iframe
                  title="Google Map Location"
                  src={GOOGLE_MAPS_URL}
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Open in Google Maps Button */}
                <div className="absolute bottom-3 right-3 z-20">
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          bg-black/80 
          text-white 
          text-xs 
          px-4 py-2 
          rounded-full 
          border border-gray-600 
          hover:border-[#D4AF37] 
          hover:text-[#D4AF37]
          transition
        "
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Address Text */}
              <p className="text-gray-400 text-sm mt-3">📍 {MAP_ADDRESS}</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["firstName", "lastName"].map((field, i) => (
                <div key={field}>
                  <label className="text-sm mb-2 block">
                    {i === 0 ? "First Name" : "Last Name"}
                  </label>
                  <input
                    name={field}
                    value={values[field as keyof typeof values]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={i === 0 ? "First Name" : "Last Name"}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-300/60"
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@gmail.com"
                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-300/60"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm mb-2 block">Phone</label>
              <input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Phone Number"
                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-300/60"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm mb-2 block">Message</label>
              <textarea
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Leave Us Message"
                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-300/60"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <PrimaryButton
              primaryColor="#d4a64a"
              text="SUBMIT"
              className="uppercase tracking-wider cursor-pointer px-8 py-3"
              gradientToWhite={true}
            />
          </form>
        </div>
      </section>
      <div className="border-t border-gray-500/90" />
      <Footer />

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#111] text-white rounded-2xl p-8 w-[90%] max-w-md text-center animate-scale-in">
            <div
              className="
        h-20 w-20 
        flex items-center justify-center 
        rounded-full 
        bg-[#D4AF37] 
        text-white 
        text-4xl font-bold 
        mx-auto mb-4
        shadow-[0_0_25px_rgba(212,175,55,0.9)]
      "
            >
              ✓
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Message Sent Successfully
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Thank you for contacting us. We’ll get back to you shortly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 rounded-full bg-[#D4AF37] text-white font-bold hover:opacity-90 transition cursor-pointer border border-gray-500 hover:border-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
