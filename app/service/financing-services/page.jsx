import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function FinancingServicesPage() {
  const reasons = [
    "Our in-depth understanding of the finance world helps us examine the monetary aspects of businesses and enables us to deliver insights that may not be apparent to those working within the organization.",
    "With the prime focus on delivering professional and cost-effective financial services, we simplify financial planning for individuals as well as businesses.",
    "At GharFix, we empower our clients by offering superior tools, sharing knowledge, continuous support, all at minimum cost.",
    "Our financial consulting services vary as per the requirements of the individuals or business offering tailored solutions to suit the financial requirements of each customer.",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Financing Services
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              Trusted Platform for All{" "}
              <span className="text-emerald-600">Financial Needs!</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              We are living in a highly globalized world today where it is normal for individuals to seek 
              financial consultation for investment. People are always in the look-out for good and trustable 
              financial services. They look for agents that will guide them through the process of choosing 
              apt financial consultation services. Because, many times, these services are very complicated 
              and can get hard to understand. And we all need someone who can simplify its nature to us. 
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get Consultation
              </a>

              <a
                href="#why-gharfix"
                className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Why Choose Us
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/finance-services.jpg"
                alt="Finance services"
                width={540}
                height={362}
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

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Financial institutions provide individuals and businesses with financial resources. 
                A selection of banks, investment firms, bonds, lending agencies, real estate agents 
                and insurance companies compose this section of the economy. The financial sector, 
                which leads the world in terms of profit and equity capitalization, is probably the 
                most important sector in the economy. This sector is dominated by major conglomerates, 
                but also by a number of smaller businesses.
              </p>

              <p>
                Be it simple banking services, or the investment consultancy, mutual funds advisory, 
                general wealth management, financing services encompass a wide range of services. 
                Sometimes you are subjected to fraud in seeking this consultation. It is important 
                to ensure that your needs are guided by advisors who have enough industry experience. 
                There is need for a trusted financial consultant who is well versed in the risk and 
                return of the finance sector.
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5">
              Fill out the form and our finance team will contact you.
            </p>
            <ContactForm serviceName ="Financing Service"/>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
              One-Stop Solution for Your Financial Needs
            </h2>
            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                At GharFix.com, we offer all kinds of financial services to business and individuals at 
                just one click. From foreign direct investment to mutual funds, you can seek advice for 
                all types of investment options.  
              </p>
              <p>
                We have deep knowledge industries to help you with trusted financial consulting services. 
                With our finance veterans, you can develop practical, clear action plans and implement 
                them to assure sustainable financial performance. We offer businesses as well as individuals 
                with trusted financial advisory services to strengthen financial strategy, plan efficient 
                financial procedures and ultimately increase the revenue.
              </p>
              <p>
                We have contributed to the growth of India’s financial needs at every step. We are the best 
                financial advisors, period. Today, we are playing an active role in the growth of the finance 
                industry.  We work together as a collaborative team with our customers to produce outstanding 
                outcomes, outperform competition and redefine industries. In order to produce stronger, 
                quicker and longer-lasting outcomes, we complement our personalized, applied experience 
                with a vibrant global innovator ecosystem. We are looking for individuals and clients who 
                stick out for themselves — and who support this attitude in others. In order to achieve such 
                high standards of quality, we set a bold ambition with our clients and work together as one team.
              </p>
              <p>
                We bring together financial strength and proven innovation expertise and sustainable growth 
                strategy, which are committed to the positive transformations in the world as a confident 
                partner for its customers.
              </p>
              <p>
                To protect investments, safeguard and maintain funds and resources and help their clients fund 
                ventures, Gharfix provides a broad variety of financial advisory services and tailored financial 
                consulting services. In their everyday life and professional activities, we seek to protect them 
                and to offer the innovative services and solutions they require. The aim of the organization is 
                to inspire anyone who wishes to affect the future positively.
              </p>
            </div>
        </div>
      </section>


      {/* Why GharFix */}
      <section id="why-gharfix" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why GharFix?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mx-auto text-lg mt-10 leading-8">
            GharFix also employs experienced finance professionals for the job, so that is one less 
            thing you can worry about! So what are you waiting for? Log In to GharFix today to avail 
            all the services and have your finances organized with ease!  We ensure you the top-notch 
            financial consultation services, just one click from your phone. 
          </p>
        </div>
      </section>
    </main>
  );
}