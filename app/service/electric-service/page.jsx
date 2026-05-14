import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function ElectricalServicesPage() {
  const serviceHighlights = [
    "Electrical Maintenance",
    "Electrical Repairs",
    "Emergency Electrician Support",
    "Wiring Services",
    "Home Electrical Repairs",
    "Electrical Panel Wiring",
    "New Installations",
    "Electrical Construction",
  ];

  const whyChoose = [
    "Serving residential and commercial electrical needs",
    "Professionally trained electricians",
    "Knowledge of modern and existing electrical systems",
    "Affordable home electric repair services",
    "Trusted and reliable service providers",
    "Fast and convenient booking support",
  ];

  const reasonsToAvoidDIY = [
    "Electrical work can be risky and unsafe without proper knowledge",
    "Small-looking issues may need deeper technical solutions",
    "Trying random fixes can lead to damage or injury",
    "Professional service ensures safe and proper repairs",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Electrical Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Exceptional Service, <span className="text-yellow-600">Quality Workmanship</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Reliable electrical repairs, maintenance, wiring, and emergency
              support for homes and commercial spaces with trained professionals.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book Electrician
              </a>

              <a
                href="#services-overview"
                className="border border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/Electrical-services-card.jpg"
                alt="Electrical Services"
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
            <h2 className="text-3xl font-bold mb-6">About Electrical Services</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Look around folks, have you ever noticed that almost everything around you needs 
                electricity to run. The laptop you work on, a simple table fan, the mobile phone 
                you might be reading this on, everything works on electricity. It has now become a necessity. 
                Everywhere you walk around; you are surrounded by wires and devices. And to keep all 
                our devices as well as our homes & workspaces working rightly, we require electrical work. 
                Electrical maintenance as well as electrical repairs is therefore a much needed service in today’s day.
              </p>

              <p>
                Electrical service can range from installations to electrical repairs. An electrician sure 
                knows the way around through all those wires and electrical issue repairs, however finding 
                a local electrician on time is not as easy as it seems. Electrical maintenance that is to 
                be done at regular intervals can wait, but when there are sudden repairs that come up, 
                finding an emergency electrician can be a hustle you don’t want. In those cases, most of 
                us opt to do it ourselves. However, that’s not a good idea. Let’s understand why.
              </p>

              <p>
                When it comes to electrical maintenance services, it is best to stay away and let 
                the professionals handle it. When it comes to electrical services, you can’t just 
                try out something and see whether it works for you. Such adventures can cost you a 
                fortune or injure you at times; who knows a problem that just seems petty might need a deep solution. 
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5 text-lg">
              Fill out the form and our electrician team will contact you.
            </p>

            <ContactForm serviceName = "Electric Service"/>
          </div>
        </div>
      </section>

      {/* Why not DIY */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why You Should Avoid DIY Electrical Fixes
          </h2>

          <p className="text-center lg:text-left text-gray-600 max-w-3xl lg:max-w-7xl mx-auto mb-10 leading-8 text-lg">
            Electrical issues are best handled by trained professionals to
            ensure safety, reliability, and long-term solutions.
          </p>
          <p className="text-center lg:text-left text-gray-600 max-w-3xl lg:max-w-7xl mx-auto mb-10 leading-8 text-lg">
            It could be any kind of electrical service, be it wiring or fixing bulbs or even the 
            simple maintenance service, a trained electricians is your best resort. And to have 
            it done properly, it is best you call up an expert. Be it an emergency or that long 
            pending electrical maintenance, what if we tell you that finding an electrical technician 
            is now as easy as a click on your phone?
          </p>
          <p className="text-center lg:text-left text-gray-600 max-w-3xl lg:max-w-7xl mx-auto mb-10 leading-8 text-lg">
            GharFix brings in a solution that’s not just optimal and premium, but also very simple. 
            From the comfortable confines of your home, you can now book an electrical maintenance 
            technician and get all your home electrical repairs done easily. Timely and efficient, 
            our services as an electrical contractor will be your go to, forever!

          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {reasonsToAvoidDIY.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Electrical Services
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-8 text-lg">
            From repairs and maintenance to installations and panel wiring,
            GharFix offers dependable electrical services for all kinds of needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easy Booking + Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-center text-2xl font-bold mb-4">
              Calling an Electrician Has Never Been Easier
            </h2>
        <div className="grid md:grid-cols-2 gap-10">
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            
            <div className="space-y-4 text-gray-700 leading-8 text-lg">
              <p>
                Be it the regular <span className="font-bold">electrical maintenance service,</span> or any kind of wiring service, 
                getting a trained electrician to help you fix those problems isn’t hard in today’s day. 
                You can just log in to GharFix.com and find all kinds of electrical services you need! 
              </p>
              <p>
                GharFix employs only the best and professionally trained electricians who can solve your 
                problems with ease and before time. With trusted and reliable service providers, 
                you would wonder how all this cannot be a threat to the wallet. Well, GharFix will 
                not only provide you with best in class services and reliable service providers, 
                it also offers all the services at an affordable price. 
              </p>
            
            </div>
          </div>

          <div className="bg-yellow-500 text-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-4 leading-8 text-yellow-50 text-lg">
              <p>
                Just a call away to serve you, every electrician at GharFix is proficient in everything. 
                From home electrical wiring & electrical panel wiring to new installation and 
                electrical construction to working with switches, fuses and more, our electricians 
                will serve you to the best of their abilities.
              </p>
              <p>
                Gharfix.com brings to you a range of services to fix all your problems. Be it anything, 
                from deep electrical problems to electric maintenance services, it is now easy to find 
                electrical contractors just a click away. You can find a reliable solution to all your problems here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why GharFix */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why GharFix?</h2>


          <p className=" text-gray-600 max-w-3xl lg:max-w-7xl mx-auto mt-10 leading-8 text-lg">
            If you are looking for the best electrical service in Mumbai or best electric service 
            in Navi Mumbai, you need not look any further. The answers to your queries like ‘proficient 
            electric company near me’ or ‘best-in-class electric contractors near me’ is GharFix!
          </p>
          <ul className="list-disc pl-10 text-gray-600 max-w-3xl lg:max-w-7xl mx-auto mt-10 leading-8 text-lg">
            <li >We are an electrical contracting company serving to all the electrical needs of residential as well as commercial properties</li>
            <li>Our trained electricians have extensive knowledge of new technologies and electrical systems that have been installed for years</li>
            <li>We are delivering exceptional home electric repair and electric maintenance services at an affordable cost</li>
          </ul>
          <p className=" text-gray-600 max-w-3xl lg:max-w-7xl mx-auto mt-10 leading-8 text-lg">
            Finding it hard to fix electrical issues at residential or commercial spaces, Gharfix.com is here for all your needs! 
          </p>
        </div>
      </section>
    </main>
  );
}