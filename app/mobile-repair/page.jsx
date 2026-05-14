import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function MobileRepairSection() {
  const services = [
    "Screen Replacements",
    "Battery Replacements",
    "Camera Repairs",
    "Charging Port Repairs",
    "Speaker & Microphone Repairs",
    "Software Troubleshooting",
    "Water Damage Repair",
  ];

  const steps = [
    "Book an Appointment (through WhatsApp)",
    "Technician Visits or Pickup",
    "Repair On-Site / Off-Site",
    "Enjoy Your Phone with Drop-Off",
  ];

  const reasons = [
    "Convenient pickup service",
    "Expert technicians",
    "Quality parts",
    "Affordable pricing if repairable",
    "Fast service",
    "Warranty options at extra cost",
  ];

  const testimonials = [
    "Gharfix saved my day! My phone screen was shattered, and within an hour of booking, a technician fixed it at my home. Highly recommend their service! – Sarita",
    "Fast, professional, and convenient. I didn’t have to leave my house, and my phone’s battery was replaced in a day time. Great job, Gharfix! – Jitendra D.",
  ];

  return (
    <section className="bg-white py-16 md:py-20">
        <div className="p-6 rounded-lg mb-10 w-full md:w-2/3 lg:w-1/2 bg-white shadow-md mx-auto">

  <ContactForm serviceName = "Mobile Repair"/>

</div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch px-4 sm:px-6 lg:px-8">
        {/* Left Image */}
        <div className="relative min-h-[350px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/mobile-repair.jpg"
            alt="Mobile Repair Service"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[3px] text-blue-600 font-semibold mb-3">
            Mobile Repairs Made Easy
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Diagnose Phone Before Repair
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            At Gharfix, we understand how crucial your mobile phone is in your
            daily life. That’s why we’re excited to launch our mobile repair
            service, designed to bring expert repair solutions right to your
            doorstep, pickup point, or phone support flow. No more long waits or
            inconvenient trips to repair shops — Gharfix makes mobile repairs
            easier, faster, and more reliable.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Services
              </h3>
              <ul className="space-y-2 text-gray-600 leading-7 mb-6">
                {services.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How It Works
              </h3>
              <ul className="space-y-2 text-gray-600 leading-7">
                {steps.map((step, index) => (
                  <li key={index}>
                    {index + 1}. {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why Choose Gharfix?
              </h3>
              <ul className="space-y-2 text-gray-600 leading-7 mb-6">
                {reasons.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customer Testimonials
              </h3>
              <div className="space-y-4 text-gray-600 leading-7">
                {testimonials.map((item, index) => (
                  <p key={index} className="italic">
                    “{item}”
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}