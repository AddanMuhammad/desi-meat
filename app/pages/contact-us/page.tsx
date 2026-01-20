"use client";
import { NavBar } from "@/app/components/navbar";
import Footer from "@/app/components/ui/footer";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import Image from "next/image";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[0-9]+$/; // only + and digits

const ContactSection = () => {
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
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We’re Here to Listen,
              <br />
              Connect With{" "}
              <span className="text-[#D4AF37] italic font-semibold">
                Us Today
              </span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-md">
              Have a question or need assistance? Our team is here to listen and
              support you. Reach out to us today, and we’ll get back to you as
              soon as possible.
            </p>

            {/* CONTACT INFO */}
            <div className="flex justify-between items-center mt-10 max-w-md">
              <div className="flex items-start gap-4">
                {/* <Phone className="text-[#D4AF37]" /> */}
                <Image
                  src={"/icons/phone-icon.svg"}
                  alt="Phone"
                  width={20}
                  height={20}
                />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">Call us today</p>
                  <p className="text-white font-medium">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                {/* <MapPin className="text-[#D4AF37]" /> */}
                <Image
                  src={"/icons/map-pin-icon.svg"}
                  alt="Map Pin"
                  width={20}
                  height={20}
                />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Reach out anytime</p>
                  <p className="text-white font-medium">
                    Fleetwood, Surrey, BC
                  </p>
                </div>
              </div>
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
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
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
                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
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
                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
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
                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <PrimaryButton
              primaryColor="#d4a64a"
              text="SUBMIT"
              className="uppercase tracking-wider cursor-pointer"
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
