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
              Terms &{" "}
              <span className="font-clearface italic bg-linear-to-r p-0.5 from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-gray-400 mt-4 text-sm">
              Last Updated: February 2026
            </p>
          </div>

          {/* Glass Container */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.6)] space-y-10">
            {/* Section */}
            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                By accessing and using the Dhesi Meat Fleetwood website and
                placing orders, you agree to be bound by these Terms and
                Conditions. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                2. Description of Service
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Dhesi Meat Fleetwood operates as a premium meat studio
                specializing in fresh and marinated meats including chicken,
                lamb, and goat. We offer custom cuts, bulk orders, and online
                sales for delivery in Surrey, BC and surrounding areas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                3. Online Orders, Pricing & Payment
              </h2>
              <ul className="text-gray-300 mt-3 space-y-2 list-disc pl-5">
                <li>All orders are subject to product availability.</li>
                <li>
                  Prices are listed in Canadian Dollars (CAD) and may change
                  without notice.
                </li>
                <li>
                  Customers are responsible for specifying cut, marinade, and
                  spice level.
                </li>
                <li>
                  Payments are processed securely via supported payment methods.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                4. Delivery & Pickup
              </h2>
              <ul className="text-gray-300 mt-3 space-y-2 list-disc pl-5">
                <li>
                  Delivery is available within Surrey, BC with applicable fees.
                </li>
                <li>Delivery times are estimates and not guaranteed.</li>
                <li>Customer must be available to receive perishable goods.</li>
                <li>Risk transfers to the customer upon delivery.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                5. Freshness, Refunds & Returns
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Due to the nature of perishable goods, we do not accept returns
                or refunds after delivery unless the product is spoiled,
                incorrect, or damaged upon receipt. Issues must be reported
                within 2 hours with photos and order details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Dhesi Meat Fleetwood shall not be liable for indirect or
                consequential damages. Our liability is limited to the value of
                the order.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                7. User Conduct
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Users must provide accurate information and use the website for
                lawful purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                8. Changes to Terms
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                We may update these Terms at any time. Changes will be posted on
                this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-200">
                9. Governing Law
              </h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                These Terms are governed by the laws of British Columbia and
                Canada.
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
