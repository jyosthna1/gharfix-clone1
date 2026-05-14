import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function PindDaanPage() {
  const ritualServices = [
    "Pind Daan in Kashi",
    "Ashes & Bones Immersion in Ganga",
    "Last Rituals Assistance",
    "Shraadh Pooja",
    "Pitru Tarpan",
    "Pitro Dosh Pooja",
    "Tripindi Shraadh Ritual",
    "Video Coverage of Rituals",
  ];

  const requiredDetails = [
    "Name of the deceased person",
    "Gotra",
    "Tithi",
    "Death date",
    "Death time",
    "Ashes and bones sent by speed post",
  ];

  const whyChooseUs = [
    "Rituals are performed in Kashi by experienced scholar pandits",
    "All rites are conducted as per shastra and tradition",
    "Video of the full ritual process is shared with the family",
    "Support for families who cannot travel during difficult times",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Pind Daan & Hindu Ritual Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Perform Sacred <span className="text-amber-600">Last Rituals in Kashi</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              We help families perform Pind Daan, ashes immersion, and other
              important Hindu rites in the holy city of Kashi with care,
              tradition, and proper guidance.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get Assistance
              </a>

              <a
                href="#services-overview"
                className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Rituals
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/ritual.jpg"
                alt="Pind Daan Ritual"
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
            <h2 className="text-3xl font-bold mb-6">About Pind Daan in Kashi</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                India is a country of religious heritage and traditions for centuries. Kashi(Varanasi) 
                is a land of Pilgrimage. It is the oldest city of India and is considered very holy and 
                called Lord Shiva’s land. Hindus from all over the world have been traveling for their 
                rich heritage and ancient traditions for performing the Hindu rites. Kashi (Varanasi) 
                is famous for moksha. Our forefathers have a belief that if the ashes of the dead person 
                are immersed in the holy water of Ganga after doing the last rituals at the Kashi ghat. 
                The departed soul would attain Moksha or Salvation. As per the Hindu belief, anyone who 
                bathes in the holy water of Ganga or his ashes and bones are immersed in the holy water 
                of Ganga will achieve Moksha or Salvation. He will be given a place in heaven and will 
                get freedom from the cycle of rebirths. People from all over the world come to Kashi to 
                do the last rituals of their loved ones by bathing in the Holy Ganga river and immersing 
                the ashes and bones in the holy water and praying Lord shiva to free them from all their 
                sins giving moksha to their loved ones. Thus People wish to travel to Kashi in their old 
                age times so they live in this world and get moksha.
              </p>

              <p>
                India is a country of religious heritage and traditions for centuries. Kashi(Varanasi) 
                is a land of Pilgrimage. It is the oldest city of India and is considered very holy and 
                called Lord Shiva’s land. Hindus from all over the world have been traveling for their 
                rich heritage and ancient traditions for performing the Hindu rites. Kashi (Varanasi) 
                is famous for moksha. Our forefathers have a belief that if the ashes of the dead person 
                are immersed in the holy water of Ganga after doing the last rituals at the Kashi ghat. 
                The departed soul would attain Moksha or Salvation. As per the Hindu belief, anyone who 
                bathes in the holy water of Ganga or his ashes and bones are immersed in the holy water 
                of Ganga will achieve Moksha or Salvation. He will be given a place in heaven and will 
                get freedom from the cycle of rebirths. People from all over the world come to Kashi to 
                do the last rituals of their loved ones by bathing in the Holy Ganga river and immersing 
                the ashes and bones in the holy water and praying Lord shiva to free them from all their 
                sins giving moksha to their loved ones. Thus People wish to travel to Kashi in their old 
                age times so they live in this world and get moksha.
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5 text-lg">
              Fill out the form and our team will help you with the ritual process.
            </p>

            <ContactForm serviceName = "Ritual Service"/>
          </div>
        </div>
      </section>

      {/* Ritual Details */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">How Pind Daan Is Performed</h2>
            <div className="space-y-4 text-gray-700 leading-8 text-lg">
              <p>
                Pind Daan is a ritual where Pind is made from flour (wheat atta, Rajgira atta, Rice atta, etc) 
                missed with milk and honey. Pandit makes 7 pinds and these are offered to the ancestors and 
                one of them is offered to the soul of your loved one. It is offered at the ghat till a crow 
                comes and bites it… This is the belief that the ancestors have accepted the offering and have 
                attained moksha. Pind Daan is considered a very important step for the deceased loved ones to attain Moksha.
              </p>
            </div>
          </div>

          <div className="bg-amber-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Role</h2>
            <div className="space-y-4 leading-8 text-amber-50 text-lg">
              <p>
                After completing the last rites of the deceased person, the collected ashes and bones 
                need to be sent through speed post to our Kashi Office.
              </p>
              <p>
                We also require the details like the Name of the deceased person<span className="font-bold"> Gotra, Tithi, Death date, 
                and time.</span> Once the ashes are received, the following day the Pind Daan ritual is conducted. 
                Our Pandit prepares the pind and from the time we receive the ashes videos are made for every 
                ritual the video is prepared and the whole procedure of Pind Daan is covered. After the 
                chanting of mantras is done, then the ashes and bones are immersed in the holy river of 
                Ganga. One pind is offered to the crows. All videos of the ritual are shared with the loved 
                ones of the deceased person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Details */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Details Required for the Ritual
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-8 text-lg">
            To perform the ritual properly, we require the following information
            and materials from the family.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDetails.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-amber-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Poojas */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Additional Rituals & Poojas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">
                Shraadh Pooja & Pitru Tarpan
              </h3>
              <p className="text-gray-700 leading-8 text-lg">
                 This pooja is conducted to offer offerings to the ancestors and receive their blessings in their 
                 family, business, peace, and fortune. The person who does this pooja has to stand inside the river 
                 water till the belly and offer water to the ancestors and seek their blessings.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">
                Pitro Dosh Pooja
              </h3>
              <p className="text-gray-600 leading-8 text-lg">
                As per the Hindu religion doing a shraadh of the departed soul is very important. 
                If it is not done it brings a bad omen to the family of the dead. This curse from 
                the afterlife is called Pitra Dosh. This is a misconception that when the dead get 
                angry, they curse the generations of that family. It is the karmas of the ancestors 
                that come on the family as sins, property conflicts, wrongdoings; the generations do 
                not grow…i.e. no heir.  Tripindi Shraadh ritual helps in repaying the karmic works 
                of the ancestors and it stops the tribulations on the family of the departed soul, 
                the descendants have to bear the punishment of tribulations among members of the family, 
                or perform offerings to honor the memory of the dearly departed in the family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}