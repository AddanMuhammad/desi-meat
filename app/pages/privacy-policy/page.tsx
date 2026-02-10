"use client";
import { NavBar } from "@/app/components/navbar";
import Footer from "@/app/components/ui/footer";

const TermsConditions = () => {
  return (
    <div>
      <NavBar />
      <div className="border-t border-gray-500/50" />

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold font-satoshi">
              Privacy{" "}
              <span className="font-clearface italic bg-linear-to-r p-0.5 from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-gray-400 mt-4 text-sm">
              Last Updated: February 2026
            </p>
          </div>

          {/* Glass Container */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.6)] space-y-10">
            <p className="text-white ">
              Dhesi Meat Fleetwood is committed to protecting your privacy. This
              policy outlines how we collect, use, and safeguard your personal
              information in compliance with applicable privacy laws in Canada,
              including PIPEDA.
            </p>
            {/* Section */}
            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                1. Information We Collect
              </h2>
              <ul className="text-gray-300 mt-3 space-y-2 list-disc pl-5">
                <li>
                  Personal Identifiers: Name, delivery address, email, phone
                  number.
                </li>
                <li>
                  Order Details: Purchase history, custom cut preferences, spice
                  levels.
                </li>
                <li>
                  Payment Information: We use secure third-party processors and
                  do not store full card numbers.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                2. How We Use Your Information
              </h2>
              <ul className="text-gray-300 mt-3 space-y-2 list-disc pl-5">
                <li>Process and deliver your orders.</li>
                <li>Send order confirmations and updates.</li>
                <li>Provide customer support.</li>
                <li>Improve products and website experience.</li>
                <li>Marketing emails (only if you opt in).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                3. Information Sharing
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                We do not sell your personal data. We only share information
                with trusted service providers or when legally required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                4. Data Security
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                We use technical and organizational safeguards, but no internet
                transmission is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                5. Data Retention
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                We retain data only as long as necessary for legal or
                operational purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                6. Your Rights
              </h2>
              <ul className="text-gray-300 mt-3 space-y-2 list-disc pl-5">
                <li>Access your personal data</li>
                <li>Correct inaccurate information.</li>
                <li>Withdraw marketing consent.</li>
                <li>Request deletion (subject to legal rules).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                7. Cookies
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                We use cookies to improve experience and analytics. You can
                disable cookies in your browser.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                8. Contact Us
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Email:{" "}
                <span className="text-[#B38934]">
                  rakeshtejpalcanada@gmail.com
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                9. Policy Updates
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                We may update this policy and will post changes with a new
                update date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-500/50" />
      <Footer />
    </div>
  );
};

export default TermsConditions;
