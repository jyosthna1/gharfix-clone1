import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function MobileRepairPage() {
  const services = [
    "Screen Replacements",
    "Battery Replacements",
    "Camera Repairs",
    "Charging Port Repairs",
    "Speaker & Microphone Repairs",
    "Software Troubleshooting",
    "Water Damage Repair",
    "Diagnose and fix software issues",
  ];

  const steps = [
    "Book an Appointment (through WhatsApp)",
    " Technician Visits(Min Rs 1000) or Picksup(Min Rs 250)",
    "Repair On-Site / Off-Site (Depends)",
    "Enjoy Your Phone (Drop-Off)",
  ];

  const whyChoose = [
    "Convenience time pickup",
    "Expert technicians",
    "Quality parts",
    "Affordable pricing if repairable",
    "Fast service",
    "Warranty (Extra cost), comprehensive warranty(Extra cost) only with our repairs.",
  ];

  const testimonials = [
    "Gharfix saved my day! My phone screen was shattered, and within an hour of booking, a technician fixed it at my home. Highly recommend their service!” – Sarita.",
    "“Fast, professional, and convenient. I didn’t have to leave my house, and my phone’s battery was replaced in a day time. Great job, Gharfix!” – Jitendra D.",
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Mobile Repair Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Diagnose Phone Before <span className="text-blue-600">Repair</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Easy pickup and drop mobile repair service at low cost.
              Fast, reliable, and professional repair solutions at your doorstep.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/mob_rep.jpg"
                alt="Mobile Repair"
                width={420}
                height={320}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Intro + Form */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <p className="text-xl mb-6 font-bold">
              Mobile Repairs Made Easy – We Do Pickup and Dropoff @lowcost
            </p>
            <p className="text-center text-4xl pb-5 text-gray-500">Diagnose Phone Before Repair</p>

            <div className="space-y-5 text-gray-500 text-l leading-8 text-lg">
              <p>
                At Gharfix, we understand how crucial your mobile phone is in your daily life. 
                That’s why we’re excited to launch our new mobile repair service, designed to 
                bring expert repair solutions right to your doorstep/pickup/phone solution. 
                No more long waits or inconvenient trips to repair shops – Gharfix is here to 
                make mobile repairs easier, faster, and more reliable than ever before.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>

            <ContactForm serviceName = "Mobile Repair"/>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Mobile Repair Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="font-semibold text-blue-600 text-lg">{item}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How It Works + Why */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>

            <div className="space-y-3 text-gray-700 text-lg">
              {steps.map((step, i) => (
                <p key={i}>{i + 1}. {step}</p>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Why Choose GharFix</h2>

            <div className="space-y-3 text-blue-50 text-lg">
              {whyChoose.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Customer Testimonials
          </h2>

          <div className="space-y-6 text-gray-700">
            {testimonials.map((item, i) => (
              <p key={i} className="italic text-lg">“{item}”</p>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}