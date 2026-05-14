import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function ElderlyCareServicesPage() {
  const reasons = [
    "Experienced professionals- Our team has years of expertise in serving old age people.",
    "Tailored care plans – Our elderly care plans are tailored as per the needs of patients.",
    "Trained staff: we are training our attendants to provide quick services in all situations.",
    "Home care for elderly in one click: We are dedicatedly offering round-the-clock, at-home healthcare services in just one click of your phone.",
    "100% Authentic:  Our completely transparent system helped us to become trusted company in old age service landscape. ",
    "Completely evaluated services: Our elderly care facilities are thoroughly evaluated, and are in line best medical practices and guidelines.",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-rose-100 text-rose-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Elderly Care Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Care &amp; Assistance{" "}
              <span className="text-rose-600">Like Family</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Our elders are our treasure! It is such a privilege to have elderly people in the house. 
              The immense knowledge they impart, the timely and scholarly guidance they give us on 
              certain aspects of our life. And it is more fun when they are in the role of a grandparent! 
            </p>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              The beloved grandparents, who will tell their grandchildren all sorts of stories, who will 
              lighten up their world with small things and what not! It is a special bond, between grandparents 
              and grandchildren. But with age, we can’t ignore the little complications that we come across. 
              And even if we wish to take complete care of our elderly, we are too engrossed in our own routines. 
              Elderly care is a service that will emphasize the social and personal requirements of the senior 
              citizens. And many times, even if you are home, you need someone to help you with all the 
              medications and everything that goes around
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book Care Service
              </a>

              <a
                href="#why-gharfix"
                className="border border-rose-600 text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Why Choose Us
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/elderly.jpg"
                alt="Elderly care services"
                width={438}
                height={338}
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
              Support for Your Loved Ones
            </h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Not many people across the world are fortunate enough to have their parents with them after 
                a certain age. But if you have them around you, you need not worry anymore! Often it is 
                impossible to admit that your loved one has come through this point of life, but they 
                require constant treatment or long-term support.
              </p>

              <p>
                That’s why we are here! To assist you and our loved ones in your crucial times. 
                Even if you are at office, or in a meeting, or you are going to be late, you can 
                always call up GharFix’ Elderly Care Services and make sure that everyone at home 
                is just fine! We, at GharFix, understand the importance of elderly care services.
              </p>

              <p>
                GharFix’ Elderly Care Services for elderly promote their independence while giving 
                them the farthest comfort. Through reviewing and consulting with you and your doctor
                 on the health of your loved one, we establish a program to ensure your ongoing 
                 well-being whether on a daily or occasional basis.
              </p>

              <p>
                Our professions are certified caregivers and are able to provide quality services such as 
                blood pressure checkup, pulse oximeter to old age people. From clinical support to fixing 
                a diet plan, GharFix has a range of elderly care services. 
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5">
              Fill out the form and our elderly care team will contact you.
            </p>

            <ContactForm serviceName= "Elderly Care Service"/>
          </div>
          
        </div>
      </section>

      <div className="space-y-5 text-gray-700 leading-8 text-lg max-w-7xl mx-auto pl-6 pr-6">
        <p>
          Our aim is to give assistance to those who, due to their jobs or if they simply don’t live 
          near their parents, have little time to take care of their family wellbeing. We maintain 
          the proper treatment of your elders by keeping an eye on their medical health and helping 
          to keep trips to the Hospital minimized with the arrangement of doctors or nursing 
          appointments to your house, providing elder home care services.
        </p>
        <p>
          At GharFix, you can find all kinds of services at one click. Trustworthy and the best! 
        </p>
      </div>

      {/* Philosophy */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Core Philosophy</h2>
            <div className="space-y-4 text-gray-700 leading-8 text-lg">
              <p>
                Although there are many agencies offering the same services, we differ 
                from them in being well-organized and working in unity. With the second-largest 
                population, our elderly face diverse hurdles, especially in maintaining health. 
                With our elder care services in Mumbai, we have taken the responsibility of 
                serving them on our shoulders by assisting them with the abilities to live 
                the highest quality of life.
              </p>
              <p>
                We aim to provide tailored care and fulfil all the needs for improving the comfort 
                of our elders. Our mission is to provide holistic, person-centred care that enables 
                seniors to have the highest quality of life, all the while making the next step of 
                their life the most comfortable.
              </p>
            </div>
          </div>

          <div className="bg-rose-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">What We Help With</h2>
            <div className="space-y-4 leading-8 text-rose-50 text-lg">
              <p>
                We lead the industry by providing esteemed elderly services in Mumbai, that 
                not only benefits everyone but provide peace of mind to our hardworking youth. 
                Our state-of-the-art facilities and quality system assist elders in daily 
                activities with the utmost respect. This respect runs in our blood, our ethics 
                and our caregivers and management. With respect, we infuse patience and politeness 
                and become a close companion to your loved ones and even make emotional connections 
                with them to offer them relevant care.
              </p>
              <p>
                All in all, we meet the multiple competing concerns of senior citizens care by offering 
                a welcoming group with support without sacrificing their privacy and avoiding housekeeping 
                dissatisfaction, when required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why GharFix */}
      <section id="why-gharfix" className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">Why GharFix?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-7 text-lg">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-10 leading-8">
          Log In today to get a full range of <span className="font-bold text-xl"> Elderly Care Services</span> at a click. 
        </p>
      </section>
    </main>
  );
}