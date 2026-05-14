import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function DigitalSignagePage() {
  const whyGharfix = [
    "One-stop solution for complete digital signage requirements",
    "Custom digital solutions based on customer needs",
    "Advanced software for monitoring and report generation",
    "Easy content scheduling, updating, and management",
    "High-clarity LCD and LED display solutions",
    "Customer-focused service with long-term business support",
  ];

  const signageServices = [
    "Glow Sign Board",
    "Neon Sign Board",
    "LED Sign Board",
    "Signage Maker",
    "Roof Top Sign Boards",
    "CNC Router Fabrication",
    "Laser Fabrication",
    "Backlit 3D Pan Face Graphics",
    "Thermoformed 3D Graphics",
    "Cold Cathode Lighting Graphics",
    "Aluminum Panel Base with 3D Graphics",
    "ALUGOLD & ALUSILVER Backlit Backwash",
    "3D Prismatic Stainless Steel Letters",
    "3D Silhouette Effects",
    "3D Neon Animated Signs",
    "Smart Trim Multipurpose Graphics",
    "Architectural Cove Lighting",
    "Totems / Monoliths / Pylons / Pole Signs",
    "LED Directional Signs",
    "Floor Directories / Mall Directories",
    "Fire Exit / Safety / Water Signs",
    "Building Façade Signage",
    "Customized Stainless Steel Signage",
    "Customized Stainless Steel Fabrications",
    "Customized Composite Panel Signage",
    "Inkjet Digitally Printed Graphics",
    "Reflective Graphics on S.S. Plates",
    "Hotel Signage for Internal & External",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Digital Signage Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Smart <span className="text-cyan-600">Digital Display Solutions</span> for Modern Advertising
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              We provide complete digital signage solutions including display setup,
              content management, scheduling, monitoring, and maintenance for your business.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get Started
              </a>

              <a
                href="#services-overview"
                className="border border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/constructions-services.jpg"
                alt="Digital Signage Services"
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
            <h2 className="text-3xl font-bold mb-6">About Digital Signage Services</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                If you are looking for digital display solutions, Gharfix provides
                professional digital signage banner services in India. Our team offers
                high-quality, customizable solutions tailored to your business needs.
              </p>

              <p>
                We handle the complete digital signage process — from banner display
                setup to content management, content scheduling, and proper functioning
                of the displays. Our experts work closely with clients to understand
                their goals and provide dependable service.
              </p>

              <p>
                Digital signage uses LCD and LED display technology to show videos,
                digital images, web pages, advertisements, information, and promotional
                content in public places such as theatres, restaurants, offices, and stadiums.
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5 text-lg">
              Fill out the form and our team will contact you for your digital signage needs.
            </p>

            <ContactForm serviceName = "Digital Signag Service"/>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Complete Signage & Display Solutions
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-8 text-lg">
            We provide modern display and signage solutions for advertising,
            branding, safety, direction, and information presentation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Digital Signage Banners",
              "Content Management",
              "Digital Menu Boards",
              "LED Display Solutions",
              "LCD Display Solutions",
              "Advertisement Displays",
              "Business Signage",
              "Customized Branding Solutions",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-cyan-700 mb-2">{item}</h3>
                <p className="text-gray-600 text-sm leading-7 text-lg">
                  Reliable and professional signage support for better visibility,
                  branding, and audience engagement.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gharfix */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Why Digital Solutions Matter</h2>
            <div className="space-y-4 text-gray-700 leading-8 text-lg">
              <p>
                In modern advertising, digital solutions play a major role in
                connecting with customers and improving product reach. Digital
                banners attract more attention due to their clarity, movement,
                and flexible content presentation.
              </p>
              <p>
                Once content is created, it can be formatted, scheduled, transferred,
                and displayed through a digital system with ease. Content can also
                be updated or replaced quickly using advanced technology.
              </p>
              <p>
                LED displays offer strong picture clarity and are an effective
                and cost-efficient way to attract onlookers and promote business messages.
              </p>
            </div>
          </div>

          <div className="bg-cyan-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <div className="space-y-4 leading-8 text-cyan-50 text-lg">
              <p>
                Our domain experts understand customer requirements and work
                closely to deliver the right digital solution for each project.
              </p>
              <p>
                We use advanced software tools to monitor the system and generate
                reports for proper performance management.
              </p>
              <p>
                We believe in customer satisfaction, long-term business relationships,
                and dependable service across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Additional Signage Services
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-8 text-lg">
            Along with digital solutions, we also offer a wide range of signage,
            fabrication, and display-related services.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signageServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-cyan-700">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why Gharfix?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whyGharfix.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-10 leading-8 text-lg">
            We have successfully served many clients across the country and continue
            to provide effective, modern, and affordable signage solutions.
          </p>
        </div>
      </section>
    </main>
  );
}