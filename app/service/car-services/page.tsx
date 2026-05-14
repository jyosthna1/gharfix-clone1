import Image from "next/image";

export default function CarServicesPage() {

  const uniqueFeatures = [
    "We have a team of highly skilled and trained mechanics.",
    "We provide car service and repair costs that suit your pockets, the best in the industry.",
    "Customer satisfaction is very important and we believe in trust-building and long-term relationships.",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Car Services & Repair
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Complete <span className="text-blue-600">Car Care Services</span> at Your Convenience
            </h1>

            <p className="text-lg text-gray-500 leading-8 mb-6">
              Get reliable car maintenance, repair, denting, painting, AC service,
              polishing, washing, and more with doorstep support and free pick-up
              and drop.
            </p>

            <div className="flex flex-wrap gap-4">

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
                src="/images/car-service.jpg"
                alt="Car Services"
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
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About Car Services</h2>

            <div className="space-y-5 text-gray-600 leading-8 text-lg">
              <p>
                Good news!!! Now you do not have to wait for long queues at the garages or wait for 
                mechanics for a long time. At Gharfix.com we cater a wide range of services for all 
                your needs.  We provide car maintenance, car repair, and car cleaning services. We 
                believe that you have an amazing experience driving your luxury car safely and in a 
                pleasant manner without any breakdowns. We offer great deals of services for different 
                brands like Maruti, Hyundai, Ford, Toyota, Honda, and all types of car models. We offer 
                you a variety of Car services like Car Denting, Car Painting, Car Engine Oil change, Car 
                Battery change or charging, Wheel alignment services, Car Polish Servicing, Replacing 
                mirrors, or any need for any accessory for your car. If you want to change the look of 
                your car, get a makeover for your car body painting. We provide car service insurance. 
                Ghaarfix.com is a one-stop solution for all your needs.
              </p>

              <p>
                You just need to check for Car Services and Repair near me. Just give us a call and book 
                an appointment and choose the type of service you need for your car… we at Gharfix.com 
                will be happy to help you.
              </p>

              <p className="text-center text-red-600 font-bold">
                You just have to call us to book an appointment.
              </p>
            </div>
          </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Car Services
          </h2>
          <div className="text-gray-600 text-lg mb-10 leading-8">
            <p className="pb-5">
            We have a team of highly skilled and trained professional mechanics who will be happy to help you.
          </p>
          <p className="pb-5">We will provide you with a free pick-up and drop facility for your luxury car.</p>
          <p>
            We have designed services in a unique manner depending upon the car type and the brand. 
            So that you have complete peace of mind and be rest assured your car is in the safe hands 
            of our professional. You can tell us about your requirement or the issues you are facing, 
            our specialized mechanics will be happy to provide you a solution for your car
          </p>
          </div>
          <h1 className="text-center font-bold text-3xl pb-2">Choose from the services below</h1>
          <h1 className="pt-6 font-bold text-xl text-blue-600">Preventive Maintenance service:</h1>
          <p className="text-lg text-gray-600">We provide preventive car maintenance service. These regular services keep a check on the 
            health of your car thus preventing major breakdowns and big service bills. It also increases 
            the lifespan of the car’s body parts and its performance.
          </p>
          <h1 className="pt-6 font-bold text-xl text-blue-600 pb-2">Car Air Conditioning Repairs and maintenance: </h1>
          <p className="text-lg text-gray-600">
            Car Air Conditioning units require regular maintenance to give a good cooling effect. When you call 
            us for service, our highly skilled mechanics check all the Air conditioning units for any issues regarding 
            the leaks or damaged compressor to prevent any major issue. We replace the faulty parts with good genuine 
            parts as per best industry standards. During the service, the AC filters are cleaned to remove dirt and 
            dust because this could lead to the less cooling effect and also contaminate the air inside the car and 
            thus resulting in health issues for people driving long distances.
          </p>
          <ul className="list-disc pl-10 text-lg text-gray-600 pt-10 pb-10">
            <li>We make sure that you enjoy driving with excellent comfort and luxury.</li>
            <li>We offer services like Functions and Performance tests.</li>
            <li>Leak test to check if any refrigerant is getting leaked.</li>
            <li>All the parts of the Air conditioning units are checked for right functioning.</li>
            <li>We check the Evaporator also for any issues because it absorbs the heat in the vehicle during cooling.</li>
            <li>Replacing the damaged filters, thus giving clean and odor-free air.</li>
            <li>AC Vents are checked if the cool air is distributed uniformly inside the car.</li>
          </ul>
          <p className="text-lg text-gray-600">These regular checks help you to have the Air Conditioning unit 
            function in good condition and give you peace of mind and satisfaction when you are driving your car. 
            Regular serviced Air conditioning units give you clean and cool air in summers and a heated effect 
            in winters… Thus enjoying your ride irrespective of the weather condition.
          </p>
          <h1 className="pt-6 font-bold text-xl text-blue-600 pb-2">Car Dent Repair and painting services: </h1>
          <p className="text-lg text-gray-600">
            During driving however cautiously we drive but there are times when 
            accidents happen, in high traffic lanes vehicles pass very closely thus touching each other and leaving 
            marks i.e. dents… do not worry at Gharfix.com we offer you car body repair for dent removal. Our highly 
            trained and experienced mechanics will give your car a makeover like never before and will give a 
            dent-free shining car like a new one. If you want to change the look of the car, or give it a sports 
            look or some unique design look we are happy to help you. Body repair helps you to get rid of those 
            scratches and dents and increase the resale value and look of the car.
          </p>
          <p className="text-lg text-center text-red-600 pt-4">
            We also provide car polishing services also.
          <br/>
           We provide you with the Nanocrystal coating for the car.
          </p>
          <h1 className="pt-6 font-bold text-xl text-blue-600 pb-2">
            Car Wash Services:
          </h1>
          <p className="text-lg text-gray-600">
            We clean the car using high foam shampoo as per the industry standards… which protects the car 
            body color from decoloring and prevents any scratches while cleaning. The car wash cleaning 
            service includes vacuuming from inside the car. Cleaning the foot mats. Cleaning the car doors 
            and then greasing them after the service.
          </p>
          <p className="text-lg text-center text-red-600 pt-4">
            We provide roadside assistance also.
          </p>
        </div>
      </section>

      {/* Unique Features */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Unique Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {uniqueFeatures.map((item, index) => (
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
        </div>
      </section>
    </main>
  );
}