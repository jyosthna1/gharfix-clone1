import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function RealEstatePage() {
  const keyAttributes = [
    "A thorough understanding of numerous regulations and laws related to real estate",
    "Focus on good returns to the owners as well tenants without compromising on legal compliances",
    "Constant phone as well as email support to clients",
    "Focusing on delivering innovative services for selling as well as buying properties.",
  ];

  const whyChoose = [
    "Leading real estate consultants in Mumbai",
    "Transparent and professional property guidance",
    "Experienced team handling multiple properties",
    "Support for buying, selling, renting, and investing",
    "Trusted one-stop platform for property services",
    "Guidance through every step of the process",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Real Estate Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Platform for All <span className="text-sky-600">Property Services</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Thinking of buying a home? Looking for the one that suits all your needs, has a perfect neighbourhood and 
              spacious rooms? The search for a perfect house has always been difficult and troublesome. Real estate 
              consulting is what you can turn to. 
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/real-estate.jpg"
                alt="Real Estate Services"
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
        <p className="pb-4 text-gray-400 text-xl">
          But you need not worry when GharFix is here for you. With our extravagant real estate services, you can now bid 
          adieu to all the worries! 
        </p>
        <p className="pb-4 text-gray-700 space-y-5 leading-8 text-lg">
          One often tries to save money when it comes to searching for a perfect home by not hiring real estate agencies 
          and consultants. This may end up leaving a big hole in your pocket as understanding the right properties and 
          negotiations is not as easy task as it seems. Additionally, real estate consulting can save you a lot of time 
          as well. From research on properties to site visits to maintaining a portfolio, a real estate advisor at GharFix 
          can widen your investment opportunities and help you find your best match.
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">
              About Real Estate Services
            </h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                The real estate market is an ever-evolving market and before buying a property you need to have an apt consultant 
                to guide you through the process. Your homesearch has to be a careful procedure as it is a big step and even 
                bigger investment.  
              </p>

              <p>
                Having a professional real estate advisor at your disposal can help you by leaps and bounds. The thorough 
                knowledge of the local market also means that your real estate consultants will have their hands-on on the 
                listing and sales data. With their recommendation you can find the place you need at the best price possible. 
              </p>

              <p>
                What’s more? There are several processes involved in buying a home. Going for multiple site visits and selecting 
                the property is just the start. Once you are set on buying a home, there comes in several legal formalities that 
                need to be taken care of. With a proper real estate advisory service, all the processes are made easy.
              </p>
              <p>
                But the question remains, what real estate agency is the best for you? How better would it be if you were to 
                find the answer on a click? Well, you can now find everything on GharFix. 
              </p>
              <p>
                Whether you are finding a place to rent out, or are looking for a permanent place, you are going to need 
                good and trustworthy real estate service provider. Even if you wish to sell your property, and your broker 
                is asking for a big percentage, you can always list it out on GharFix and find a suitor for that house. 
                GharFix offers the best real estate services in Mumbai.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>

            <ContactForm serviceName = "Real Estate Service In Mumbai"/>
          </div>
        </div>
      </section>

      {/* Why Services Matter */}
      <section className="mx-w-7xl bg-gray-50 py-14">
        <div className="mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Do You Need Real Estate Services?
          </h2>
          <p className="text-gray-600 leading-7 text-lg pb-4">
            The real estate market is an ever-evolving market and before buying a property you need to have an apt 
            consultant to guide you through the process. Your homesearch has to be a careful procedure as it is a 
            big step and even bigger investment.  
          </p>
          <p className="text-gray-600 leading-7 text-lg pb-4">
            Having a professional real estate advisor at your disposal can help you by leaps and bounds. The thorough 
            knowledge of the local market also means that your real estate consultants will have their hands-on on the 
            listing and sales data. With their recommendation you can find the place you need at the best price possible. 
          </p>
          <p className="text-gray-600 leading-7 text-lg pb-4">
            What’s more? There are several processes involved in buying a home. Going for multiple site visits and selecting 
            the property is just the start. Once you are set on buying a home, there comes in several legal formalities 
            that need to be taken care of. With a proper real estate advisory service, all the processes are made easy.
          </p>
          <p className="text-gray-600 leading-7 text-lg pb-4">
            But the question remains, what real estate agency is the best for you? How better would it be if you were to 
            find the answer on a click? Well, you can now find everything on GharFix.
          </p>
          <p className="text-gray-600 leading-7 text-lg pb-4">
            Whether you are finding a place to rent out, or are looking for a permanent place, you are going to need 
            good and trustworthy real estate service provider. Even if you wish to sell your property, and your broker 
            is asking for a big percentage, you can always list it out on GharFix and find a suitor for that house. 
            GharFix offers the <span className="text-orange-700 font-bold text-xl">best</span> real estate services in Mumbai.
          </p>
        </div>
      </section>

      {/* Guidance + Advantage */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Complete Property Guidance
            </h2>
            <p className="text-gray-700 leading-8 text-lg">
              From property research and site visits to selecting the right
              home and handling legal formalities, GharFix supports you at every
              stage of the buying or selling process.
            </p>
          </div>

          <div className="bg-sky-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Why GharFix Stands Out
            </h2>
            <p className="leading-8 text-sky-50 text-lg">
              GharFix offers end-to-end real estate solutions with transparency,
              professionalism, and dedicated support for property owners, tenants,
              buyers, and sellers across Mumba.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why GharFix?
          </h2>
          <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                GharFix offers property buying as a service for our clients and we are creating a niche in the real estate 
                service sector. We have emerged as the leading real estate consultants in Mumbai. Delivering end-to-end 
                property management solutions has helped us to be a one-of-its-kind real estate service provider in Navi 
                Mumbai. We deliver comprehensive assistance to our clients related to the buying and selling properties. 
                On GharFix you may just find the place of your dreams.  
              </p>

              <p>
                Assisting you in finding a home, exploring investment options, loan acquirement and the legal formalities, 
                GharFix walks every step of the way with you. Your real estate needs are perfectly met by our highly trained 
                and experienced professionals.
              </p>

              <p>
                GharFix is a one-stop platform quenching the needs of the property owners across Navi Mumbai. We are 
                well-equipped with an experienced team of professionals handling several properties in Navi Mumbai, currently.
              </p>
              <p>
                With concrete efforts and supreme excellence, we are bringing in transparency and professionalism to the 
                realty sector to be a trustworthy partner for our clientele.
              </p>
            </div>
        </div>
      </section>

      {/* Key Attributes */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Key Attributes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAttributes.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm border"
              >
                <h3 className="font-medium text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-600 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Find the Perfect Home with GharFix
          </h2>
          <p className="text-sky-50 leading-8">
            Buying a property in Mumbai? Log In today on GharFix and find the perfect home you are looking for!
          </p>
        </div>
      </section>
    </main>
  );
}