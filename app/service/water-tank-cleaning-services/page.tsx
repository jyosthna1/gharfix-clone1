import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function WaterTankCleaningPage() {
  const cleaningSteps = [
    "We have a team of experts who use an automatic machine to dewater the tank with less effort. We ensure less wastage of water while cleaning the tanks",
    " We then clean the water storage tank from inside using the machines and also manually scrubbing all the algae and mud from the walls. The sludge is carefully removed using a kit to maintain cleanliness.",
    "We then use High power jet sprays to wash the water tank. The ceilings of the water tank are cleaned thoroughly using high-pressure jet sprays as there are more germs and bacteria due to dampness and Oxygen presence",
    "Water Tank Disinfection plays a very important role in stopping the germs and bacteria duplication and give clean water. Once the Water tank is cleaned thoroughly, we spray the anti-bacterial spray inside the tanks’ walls and in the corners to sterilize the tank both inside out. The Anti-bacterial sprays used are the approved disinfectants in our industry for Domestic and Commercial purposes",
    " In the last stage of the process of final sterilization and disinfection, we use UV radiation. It is used to kill any floating or suspended germs and bacteria that remain in the tank. This complete procedure makes the water tank 100% bacteria-free and perfect for storing drinking water.",
  ];


  const whyChoose = [
    "We have a highly experienced and qualified team that uses an advanced setup and advanced equipment for tank cleaning which are well recognized as scientific methods by our Industry.",
    "Once we survey the cleaned water tank we provide you with the certificate for water tank cleaning.",
    "We have an excellent customer service team to take care of your queries and provide a solution.",
    "At present, we provide services for Residential societies, Individual Houses, Apartments, Industrial areas, Commercial complexes, and Sky-high buildings.",
    "We guarantee high standards of service, at the best rates in Industry.",
    "We also provide Sump Water Tank Cleaning Services.",
    "We also provide Loft water tank cleaning services for Individuals.",
    "We provide the Water Storage Tank maintenance facility also at the best Industry rates.",
  ];

  return (
    <main className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <p className="bg-blue-100 text-blue-700 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Water Tank Cleaning
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Clean & Safe <span className="text-blue-600">Water Tank Services</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              Ensure hygienic water storage with professional cleaning,
              disinfection, and maintenance services for your water tanks.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact-form"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Book Service
              </a>

              <a
                href="#services"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/tankcleaning.png"
                alt="Water Tank Cleaning"
                width={420}
                height={300}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Form */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">
              Why Do You Need Water Tank Cleaning?
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Are you experiencing a foul smell in water? Does your drinking water have mud particles? Are you concerned 
              about the health of your loved ones? If you are worried about the condition of water in the water storage 
              tank is not good? Do not worry – just give us a call at Gharfix.com we have a perfect solution for all your 
              needs for water tank cleaning.
            </p>
          </div>

          {/* Form */}
          <ContactForm serviceName="Water Tank Cleaning" />
        </div>
      </section>

      {/* Cleaning Steps */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6 text-lg">
          <p className="text-gray-700 leading-8 pb-4">
            Water plays a very important role in our life. Contaminated water is the main cause of water-borne diseases 
            to mankind. It is the main cause of illness in children below 5 years and elderly persons as their immunity 
            is low. One of the reasons for contaminated water is due to water storage tanks and their poor ways of cleaning 
            through the services of local plumbers and sweepers.
          </p>
          <p className="text-gray-700 leading-8 pb-6">
            At Gharfix.com We are the pioneers in water tank cleaning services. With our state of the heart, advanced 
            technologies work becomes faster, better, and long-lasting. If we do not clean the tank for a longer period 
            we start getting a foul smell. The reason for the foul smell in the water is due to the accumulation of 
            residual particles and dust settling at the bottom of the water tank. This could also be cause for breeding 
            germs and bacteria in water. If we use such water for our daily routines like drinking, bathing, and other 
            household purposes, we will give birth to various waterborne diseases, skin irritation, and fungal infections. 
            We can also maintain the Chlorine level of water with regular cleaning of water storage tanks. Considering 
            these factors at Gharfix.com we clean the water storage tanks effectively taking utmost care that no inconvenience 
            is caused to the client. We have a team of professionals who clean the water storage tanks very effectively using 
            the advanced set of equipment. Thus giving you a clean water storage tank as good as a new one Thus We provide 
            water cleaning services for Overhead Water Storage Tank, Underground water storage tank, Sump tank cleaning, 
            Sintex Water tank.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-center mb-6">
            Cleaning Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {cleaningSteps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex gap-4">
                <div className="bg-blue-100 text-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
                  {i + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 text-lg">
        <p className="text-gray-700 leading-8 pb-6">
          At Gharfix.com our main purpose here is to make your life easier, healthier, and cleaner. We can fully organize, 
          scrub, sanitize, and disinfect everything in your water storage tank.
        </p>
        <p className="text-gray-700 leading-8 pb-6">
          It is recommended that the Water Storage Tank cleaning every four to six months for the commercial and residential 
          complexes depending upon the size and frequent usage of Water.
        </p>
      </div>

      {/* Why Choose */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Gharfix.com?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl flex gap-4">
                <div className="bg-blue-100 text-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
                  {i + 1}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-8 pb-6 pt-6 text-lg">
            We believe in 100% Customer satisfaction. We have a list of happy and satisfied customers and we maintain 
            close relationships with them to lead to mutual benefits and business prosperity …so what are you waiting 
            for…We are just a call away… CALL US AND BOOK AN APPOINTMENT NOW!!!…
          </p>
        </div>
      </section>

    </main>
  );
}