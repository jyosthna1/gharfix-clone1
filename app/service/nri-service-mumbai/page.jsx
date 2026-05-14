import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function NriServicesPage() {
  const whyGharFix = [
    "We offer services that comply with numerous laws such as Wealth Tax, Income Tax etc.",
    "We deliver trusted NRI matrimony services.",
    "We work as lawyers for NRIs, advancing them on income tax return filing and advising on how to reduce tax liability in India",
    "We guide NRIs in all property matters in the nation.",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              NRI Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Single Platform for All <span className="text-blue-600">NRI Services</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              A one-stop destination for NRI investment guidance, legal support,
              tax assistance, banking solutions, and property management services in India.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get Started
              </a>

              <a
                href="#services-overview"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/nri-services-page.jpg"
                alt="NRI Services"
                width={420}
                height={360}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About NRI Services</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Non-Resident Indians or the NRIs are the people of Indian nationality living abroad. Generally, 
                NRIs look forward to investing in India as another source of income, or just for investment. 
                The Indian government has, in recent years, made many laws for <strong>NRI investment,</strong> and made it 
                even more feasible and easy for the NRIs. 
              </p>

              <p>
                Generally, the investment is sought in real estate or any other form that is profitable. 
                Now, since you don’t actually live in India and don’t visit much, we know you seek agents 
                who can advise you on NRI investment plan and the course of action. Many times it also 
                happens that you may fall prey to fraud services.
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5 text-lg">
              Fill out the form and our team will get in touch with you.
            </p>

            <ContactForm serviceName ="Nri Service Mumbai"/>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            One-Stop Solution for NRI Services
          </h2>
          <div className="text-left text-gray-600 mx-auto mb-10 leading-7 text-lg">
            <p className="pb-4">
              If you are an NRI yourself, or you know anyone who is looking for NRI investment options, easy 
              banking solutions, you don’t need to worry anymore. Just ask log on to GharFix.com.
            </p>
            <p className="pb-4">
              GharFix has designed comprehensive financial solutions for the NRIs looking for investments 
              and financial aids. With easy processing and apt solutions and advice from experts, you now 
              don’t need to research so much on options as you can have it all on a single click on GharFix!
            </p>
            <p className="pb-4">
              We provide professional services to cover the full range of NRI needs under one roof. It’s 
              the right place for you, and while you are overseas, we are completely committed to meeting 
              your legal needs, banking, economic, land investment management, etc. We are a full-service 
              company offering a variety of services to suit NRI needs.
            </p>
            <p>
              Many of the businesses provide one service, either through legal or accounting officers or real 
              estate personnel. Our business focus is on ending services. By providing all types of services, 
              we believe in value for money and time from our customers. We also feel that it is the best way 
              to thrive in our industry if our clients understand the maximum extent of their desires under 
              one roof. We do not compromise the quality of our services and are here to meet the entire needs 
              of our customers whether it is open NRI account online,NRI tax filing, property management for NRI, 
              NRI tax filing online or any NRI service in Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Plethora of Opportunities in India</h2>
            <div className="space-y-4 text-gray-700 leading-8 text-lg">
              <p>
                India has emerged as a splendid investment hub for Non-resident Indians. A robust & 
                growing economy, profitable companies and strong standing markets have ensured that 
                NRI investors get maximum returns from both debts as well as the equity market.
              </p>
              <p>
                A highly automated and transparent stock exchange and a booming mutual fund sector 
                have ensured that investments are transparent and liquid. With India being one of 
                the world’s booming markets, it is the best time for NRIs to commence a business 
                in India. We, at GharFix, not only offer NRI investment services but also housekeeping 
                services including NRI shopping, NRI maid to you.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Methodologies</h2>
            <div className="space-y-4 leading-8 text-blue-50 text-lg">
              <p>
                The company, along with a network of highly trained and skilled lawyers and consultants 
                in India, offers a wide variety of resources to ensure that the NRI has adequate solutions 
                for addressing its problems. Our strategy is cautious and methodical on any job we pursue. 
                We are proud of our work and have very firm principles in work ethics in terms of 
                responsibilities, consistency and time scales focused on systems even in providing online NRI services.
              </p>
              <p>
                We ensure that all our customers do our best, regardless of the level of work they offer us. 
                We still try to do so in line with our responsibilities to all our customers. Our services 
                are delivered by a community of experts that provide tailored-made services to meet the 
                particular needs of expatriates globally. We promise better efficiency, long-term cost 
                savings and, in particular, flexibility to make use of the facilities listed in our service bouquet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why GharFix */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why GharFix?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whyGharFix.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-10 leading-8 text-lg">
            With trustable consultants, you can now relax and not run the risk of fraud. GharFix is here 
            to fulfil all your needs and fix all your problems!  
          </p>
        </div>
      </section>
    </main>
  );
}