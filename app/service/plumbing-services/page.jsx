import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function PlumbingServicesPage() {
  const services = [
    {
      title: "Tap Fixture and Bathtub Installation",
      desc: "Leaking taps and outdated bathtubs can cause unnecessary stress. Our skilled plumbers provide quick and efficient installation or replacement services. After the job is done, we clean up all debris and dust, leaving your space spotless.",
    },
    {
      title: "Kitchen Platform Remodeling",
      desc: "A cramped kitchen can make cooking and cleaning a challenge. At GharFix, our team includes designers who collaborate with plumbers to offer creative remodeling ideas. We can transform even a small, 25-square-foot kitchen into an efficient space with modern trolley systems and customized designs for your utensils and storage needs.",
    },
    {
      title: "Modular Chimney Installation",
      desc: "Struggling with smoke and odors while cooking? Let GharFix design and install a modular chimney that fits your kitchen’s ventilation needs. Our designers work with you to create a functional, elegant solution that ensures your kitchen remains smoke-free and inviting.",
    },
    {
      title: "Modular Taps and Shower Upgrades",
      desc: "Upgrade your bathroom or kitchen with stylish modular taps and showers! We partner with top brands like Jaguar and Seiko to provide 100% authentic products at competitive prices. Our plumbers will help you choose the best options to complement your home’s aesthetic.",
    },
    {
      title: "Toilet Upgrades (Indian to Western Conversion)",
      desc: "Thinking of upgrading your bathroom? Our experts can transform an Indian toilet into a sleek Western commode within 6–7 hours without any major structural changes. Whether you prefer a wall-mounted or floor-mounted option, we offer customized solutions for your specific requirements.",
    },
    {
      title: "Clogged Drains and Other Plumbing Problems",
      desc: "Clogged drains and running toilets are common plumbing issues that require immediate attention. GharFix provides reliable plumbing services to resolve these issues efficiently. Our team ensures that every problem is fixed with care, allowing you to enjoy uninterrupted comfort in your home.",
    },
  ];

  const reasons = [
    "Expert Plumbers: Skilled, trained, and professional plumbers ready to tackle any plumbing challenge.",
    "Reasonable Pricing: Transparent rates with no hidden costs.",
    "Doorstep Service: Convenient service delivered right to your home.",
    "Timely Repairs: Quick response times to ensure your plumbing issues are resolved promptly.",
    "Post-Service Guarantee: We stand by the quality of our work and offer guarantees for added peace of mind.",
  ];

  const safety = [
    "Temperature checks for all plumbers.",
    "Use of masks, gloves, and sanitizers during every visit.",
    "Minimal physical contact to ensure your safety and comfort.",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="bg-white shadow-xl rounded-2xl p-4">
              <Image
                src="/images/plumbing-in-mumbai.jpg"
                alt="Plumbing in Mumbai"
                width={423}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div>
            <p className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Plumbing Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Comprehensive Plumbing Solutions{" "}
              <span className="text-sky-600">Tailored to Your Needs</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              From tap installation and toilet upgrades to clogged drain repairs
              and kitchen remodeling, GharFix provides reliable plumbing
              services at your doorstep.
            </p>

            <a
              href="#contact-form"
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Book a Service
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div
          id="contact-form"
          className="max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-3 text-center">Quick Enquiry</h2>
          <p className="text-gray-600 text-center mb-6 text-lg">
            Fill in your details and our plumbing team will contact you.
          </p>

          <ContactForm serviceName = "Plumbing Service"/>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Plumbing Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6"
              >
                <h3 className="text-xl font-semibold text-sky-700 mb-3">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-gray-700 leading-8 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose GharFix for Plumbing Services?
        </h2>
        <p className="text-gray-700 leading-8 mb-8 text-lg">
          At GharFix, we pride ourselves on delivering top-notch 
          service with customer satisfaction as our priority. Here’s why we’re 
          trusted by homeowners across Mumbai and Navi Mumbai:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-7 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety + Areas + Contact */}
      <section className="bg-sky-600 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4">Your Safety is Our Priority</h3>
            <p className="text-sky-50 leading-8 mb-4 text-lg">
              In the ongoing COVID-19 situation, GharFix ensures that all
              services are delivered with strict safety measures.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sky-50 text-lg">
              {safety.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4">
              Serving All Areas in Mumbai and Navi Mumbai
            </h3>
            <p className="text-sky-50 leading-8 text-lg">
              No matter where you are in the city, GharFix is just a call away.
              Our team is available 24/7 to provide professional plumbing
              services tailored to your needs.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4">Contact Us Today</h3>
            <p className="text-sky-50 leading-8 mb-4 text-lg">
              Transform your space with professional plumbing services from
              GharFix. Whether it’s fixing a running toilet, installing a hot
              water system, or resolving common plumbing problems, we’ve got you
              covered.
            </p>
            <h4 className="text-lg font-semibold">
              Call us now or search for “plumber in Mumbai” or “plumbing
              services near me” to find us.
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}