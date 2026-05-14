import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function WaterPurifierPage() {
  const waterBenefits = [
    "Drinking pure water keeps us Hydrated and gives us healthy skin and body.",
    "It helps in the food digestion process.",
    "Maintaining the water levels in the body helps us to do weight loss as the body does not store excess water and thus increasing our metabolism rate.",
    "Drinking  clean water supports Kidney function properly and prevents Urinary Infections and kidney stones.",
  ];

  const serviceSteps = [
    "Call Gharfix.com and let us know the service you need.",
    "Fix an appointment with our technician and get a confirmation call.",
    "Our technician will visit the client’s place and complete the work.",
    "Make payment through G-pay.",
  ];

  const purifierServices = [
    "Installation",
    "Servicing",
    "Repair",
  ];

  const servicesDes = [
    "Our professional experts can help you install the RO Water Purifier.",
    "Regular servicing helps us to maintain the water purifier for a longer time and increases its durability",
    "Our service engineers will inspect and check the issue with your RO Water Purifier. They do the repairs by using genuine parts to increase the life and performance of the Water Purifier.",
  ]

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 text-lg">
              RO Water Purifier Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Clean and Safe <span className="text-sky-600">Drinking Water</span> at Your Doorstep
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6 text-lg">
              Get expert installation, servicing, repair, and AMC support for
              RO and UV water purifiers with reliable doorstep service.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book Service
              </a>

              <a
                href="#services-overview"
                className="border border-sky-600 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/nri-services-1.jpg"
                alt="Water Purifier Service"
                width={420}
                height={300}
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
            <h2 className="text-3xl font-bold mb-6">About Water Purifier Services</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Water is a very essential part of our body. Our body consists of 70% water, 
                just like the planet earth. It consists of 70% of water bodies which is essential 
                on earth for all living beings like Plants, Animals, and Human Beings. Any disturbance 
                in the water level gives rise to many drastic changes in the lives of all living beings. 
                In the same manner drinking, pure water not only satisfies our thirst but also helps us 
                to keep our body healthy. Drinking pure water helps our body to keep hydrated and helps 
                in maintaining healthy skin, thus enhancing our beauty. World Health Organisation recommends 
                drinking at least 2-3 liters of pure water to keep the body healthy and hydrated. People 
                living in Hot Climatic conditions should drink 4-5 liters of water to keep hydrated and 
                reduce the chances of fatigue and tiredness. Water has many benefits such as
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5 text-lg">
              Fill out the form and our technician team will contact you.
            </p>

            <ContactForm serviceName = "Ro Repair and Service"/>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Benefits of Drinking Pure Water
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-8 text-lg">
            Clean drinking water is essential for health, hydration, digestion,
            and proper body function.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {waterBenefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7 text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mb-10 leading-8 text-lg pt-4">
            With increasing pollution levels drinking pure and clean water has become a challenge. Drinking 
            unsafe water can lead to various health issues. RO water purifier helps us to drink clean and safe 
            water. It kills germs and bacteria in the contaminated water and gives us pure and safe drinking water.  
            It removes bad smell and dirt from the water thus giving safe and clean water. RO Water purifier 
            functions for 3-4 years if is maintained nicely. If you see a foul smell in your drinking water, 
            or oil or mud in water, taste change it is time for service.
          </p>
          <p className="text-center text-gray-600 mb-10 leading-8 text-lg pt-4">
            At Gharfix.com we advise you to have regular service for your RO and UV water filter. Thus increasing 
            the life span of the Water purifier and increasing its performance. If you find any water leakage, or 
            any unusual noise, foul smell, unusual taste in water. Drinking unsafe water can result in health 
            issues because of the presence of germs and bacteria. Just search for RO Service and Repair near me. 
            You just have to give us a call and we have a team of specialized service engineers and professionals to help you
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Water Purifier Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purifierServices.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl text-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-sky-700 mb-2">{item}</h3>
                <p>{servicesDes[index]}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mb-10 leading-8 text-lg pt-4">
          We believe in trust-building and long-term relationships with our clients. We provide high-quality 
          and reliable service at your doorstep. We service all brands and all types of RO and UV Water Purifier
        </p>
        </div>
        
      </section>

      {/* Service Process */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            For Availing Our Services
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-8 text-lg">
            Booking a service is simple and quick with our doorstep support process.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7 text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Gharfix?</h2>
          <p className="text-gray-700 leading-8 mb-4 text-lg">
            We Provide you with an Annual Maintenance Contract(AMC) for an RO water purifier, 
            where a service engineer will visit the client’s place and service the Water purifier. 
            The service process would include cleaning the water purifier thoroughly and Replace the 
            Filter if required. The AMC will have one filter change in a year included in the contract. 
            If any part needs to be changed it would be an additional cost.
          </p>
          <p className="text-gray-700 leading-8 text-lg">
            At Gharfix.com provides you best affordable rates without a pinch to your pocket.
          </p>
        </div>
      </section>
    </main>
  );
}