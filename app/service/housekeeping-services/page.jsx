import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function HousekeepingPage() {
  const services = [
    "Maid services",
    "Household maintenance, including furniture and more",
    "Keeping utensils like refrigerator and oven clean",
    "Cleaning and tidying bathrooms and working areas",
    "Cleaning less-used spaces on a frequent basis",
    "Keeping all facades clean",
    "Cleaning and repairing of windows",
    "Furniture repair",
    "Keeping pathways, patios, and steps clean and tidy",
    "Managing grocery shopping",
  ];
  

  return (
    <main className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <p className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Housekeeping Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              A Perfect <span className="text-green-600">Caretaker of Your Space</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Keep your home clean, organized, and stress-free with professional
              housekeeping services designed for modern lifestyles.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/house-keeping.jpg"
                alt="Housekeeping"
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
            <h2 className="text-3xl font-bold mb-6">
              Why Housekeeping Matters
            </h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                As the old saying goes, cleanliness is next to godliness and a clean house is just 
                next to heaven. Surely you must have dreamt about your house is absolutely spotless 
                and just really clean. How amazing would it be if you could keep your house that way 
                every day? But with busy routines and tireless work life, one can’t really pull up themselves 
                for more than basic work once home. 
              </p>
              <p>
                Let us understand what role proper housekeeping services can play in our lives. Coming home 
                to a clean, beautiful space can turn your home into a peaceful retreat for you. To create this, 
                you require the best cleaning and housekeeping services. A housekeeping maid with the proper skills, 
                knowledge and empathy can turn any house into a home that you would always want to come back to!
              </p>

              <p>
                Maintaining a clean and tidy space requires a lot more effort than we can imagine. From everyday 
                cleaning and dusting to keeping the home organised, housekeeping services are more than just fulfilling 
                basic maintenance needs. After a busy day at work, you realise just how much you need housekeeping 
                services to spend a few moments of warmth and peace with your loved ones.
              </p>

              <p>
                With the right housekeeping agency at work, you will never have to come home to a chaotic, messy 
                and dirty house. This is where GharFix steps in!
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <ContactForm serviceName ="Housekeeping Service"/>
          </div>

        </div>
      </section>

      {/* Importance Section */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            The Importance of Housekeeping
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            A stark clean and properly maintained atmosphere makes you feel at home instantly. A sense of comfort, 
            safety and joy surrounds you in a place like that. Moreover, tidy places promote healthy living habits 
            and protect you from unwanted illness conditions. 
          </p>
          <p className="text-gray-600 leading-8 pt-4 text-lg">
            Your hard-earned leisure pays off when you can enjoy the true elegance of your home. Professional 
            housekeeping services ensure to keep you and your family happy, healthy and safe while creating an 
            inviting space.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Keeping your space clean – An everyday struggle
            </h2>
            <p className="text-gray-700 leading-7 pb-6 text-lg">
              Having a clean house not only freshens up your mood but is also a healthy sign. Imagine living in 
              a house that’s all dusty and with all your stuff lying around in that mess. One never feels great to 
              come back to an unclean home. Moreover, with busy schedules, you can’t dedicate time to clean your 
              house and all the work is postponed to the weekends.
            </p>
            <p className="text-gray-700 leading-7 pb-6 text-lg">
              What if some guests decide to come over for a dinner party, or you decide to have a house party? 
              You simply cannot welcome them in a dirty house. It is at such times you wonder; what if there 
              was someone to help you out with those tasks? 
            </p>
            <p className="text-gray-700 leading-7 text-lg">
              Well, you can forget all those worries, because there is someone you can call up in case you get 
              caught up in the worst-case scenario. GharFix.com is here to help you fix everything. From basic 
              housekeeping services to maid services, you can find it all here.
            </p>
          </div>

          <div className="bg-green-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Come home to Cleanliness
            </h2>
            <p className="leading-7 text-green-50 text-lg pb-6">
              GharFix can help you get rid of all your basic cleaners, sweepers and building maintenance services, 
              with reasonable pricing and trained workers. Our maid and housekeeping services are of the highest 
              standards. We ensure that when choose our housekeeping services for home, not only are they verified 
              and efficient but also the best housekeeping services you can find around you.
            </p>
            <p className="leading-7 text-green-50 text-lg pb-6">
              We offer more than just scheduled housekeeping services. You can find full-time cleaning experts who work diligently
               and provide best-in-class housekeeping solutions for your space at GharFix. We ensure that your property looks 
               clean and neat at all times. 
            </p>
            <p className="leading-7 text-green-50 text-lg">
              To avail our services all you can do is Google “Housekeeping services near me or Housekeeping agency near me” and 
              enquire with our executives for more details.
            </p>
          </div>

        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Housekeeping Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border flex gap-4"
              >
                <div className="w-10 h-10 bg-green-100 text-green-700 flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Why Choose GharFix?
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            Almost every business requires the service of a professionally run housekeeping company and we take pride
             in saying that GharFix.com is one of the best housekeeping service providing company in India.
          </p>

        </div>
      </section>

    </main>
  );
}