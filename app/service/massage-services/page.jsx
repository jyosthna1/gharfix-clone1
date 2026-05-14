import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function MassageServicesPage() {
  const whyGharfix = [
    "You can now book a massage at home in just a click",
    "Pick any time of the week to book the spa through your smart phone",
    "Our trusted masseuse will resolve all concerns of safety",
    "Your favourite massage experience becomes cost-efficient, which allows you to have regular massage sessions",
    "We firmly believe in building a supportive company environment. ",
    "We ensure that industry-wide unmatched support from the finest quality brands is always delivered. ",
    "In all our acts, we uphold the highest degree of integrity.",
    "We respect our people, promote their progress, keep them to account and honour their achievements.",
  ];

  const benefits = [
    "Helps loosen muscles and body tension",
    "Supports mental relaxation and calmness",
    "Reduces daily stress and fatigue",
    "Improves overall feeling of well-being",
    "Encourages physical, mental, and emotional balance",
    "Helps you feel refreshed for the week ahead",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Massage Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Ultimate <span className="text-purple-600">Relaxation Massage</span> at Home
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Rejuvenate your mind and body with calming massage services at home.
              Enjoy relaxation, stress relief, and wellness at your convenience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book Now
              </a>

              <a
                href="#services-overview"
                className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/massage-spa-relax.jpg"
                alt="Massage Services"
                width={500}
                height={340}
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
            <h2 className="text-3xl font-bold mb-6">Massage – Your Ultimate Relaxation</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                A hectic week with loads of work sure does call for a chilling and relaxing weekend! 
                But often you don’t get the chance to do that. There are so many things people plan 
                for the weekends, to relax, plan a hike, being in the presence of nature and release 
                all the toxins that are! Some just sleep in and ignore any and every kind of an outing. 
                Some people decide to go for short picnics with their friends and family and enjoy a relaxing weekend. 
              </p>

              <p>
                But have you ever thought of just literally relaxing? Relaxing every nerve in your body and 
                getting all energized for the week ahead? Massage, of literally any kind or even a full body 
                massage, helps loosen not just your muscles but the tension in your body!
              </p>

            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5 text-lg">
              Fill out the form and our wellness team will contact you.
            </p>

            <ContactForm serviceName ="Massage Service"/>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Massage – Your Ultimate Relaxation!
          </h2>

          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
            Wouldn’t it be just divine to lie down and have someone give you the perfect massage; a 
            gentle rub on the pressure points to take out all that stress you have been holding up or 
            a calm and soothing atmosphere to calm you down? Doesn’t it sound soothing? All the massage 
            and salon services need you to take some time out from your already busy routines. But 
            sometimes it is just a hassle to make time, book an appointment and visit the massage salons.
          </p>
          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
            With GharFix, you can now book a full body massage, which brings the masseuse right at your place. 
            Not only does it help save a lot of time, but it also allows scheduling the appointment at your 
            convenience. Our specialist rejuvenators offer personally customized beauty approaches. In a 
            calm and relaxing setting, we provide a perfect location to relax, relieve stress and spend 
            quality time with friends and families whether it is at our office or it is our massage services 
            at home. Enjoy our exclusive massage services or feel fresh and new with our home massages. We have 
            covered you via both ways. Our team will lead you on a trip that will help revitalize your state of 
            being with a soft touch of professionalism.
          </p>
        </div>
      </section>

      {/* Calmness + Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Environment that Harbours Calmness
            </h2>
            <div className="space-y-4 text-gray-700 leading-8 text-lg">
              <p>
                The atmosphere is so curated that the soul is touched and mind and body relaxed. GharFix’s 
                massage services are regarded as the finest body care spa in Mumbai. When you walk through 
                the entryway, the aromas and the calm, peaceful environment will enclose you. The experience 
                forms of a ride through the senses with inspiring effects and you mustn’t miss. We believe 
                that beauty and wellness programs are tailored strongly and provide a regularly superlative 
                well-being experience through our dedication to outstanding standards of facilities, 
                strategies, goods and individuals. We have continually grown as Mumbai’s favourite massage 
                service provider and doorstep massage services provider.
              </p>
            </div>
          </div>

          <div className="bg-purple-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Benefits of Massage</h2>
            <p className="space-y-4 leading-8 text-lg">
              Our methods perform in the framework of health prevention, intervention and reversal. 
              All of our wellbeing therapies benefits people physically, mentally and emotionally. 
              A change in their perception and reality is achieved by the synergistic power of mind, 
              body and soul. It helps them to develop, sustain health and well-being. They have a 
              sense of well-being, which eventually leads to improved handling of tension every day.
            </p>
          </div>
        </div>
      </section>

      {/* Why GharFix */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why GharFix?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whyGharfix.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-7 pt-6 text-lg">
            When it comes to a trustworthy online platform for online massage, we become your best bet. 
            Our determination will bring the most desirable and effective 24 hour massage services to you. 
            If you want more information regarding massage services, get in touch with our team to assist 
            you at every step of the process. Let your body get the nourishment it needs. Book a massage 
            section right here and let us arrange everything for you.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Massage Session Today</h2>
          <p className="text-gray-700 leading-8 mb-4 text-lg">
            What are you waiting for then? Log On to GharFix.com today and have a weekend full of relaxation! 
            A mini vacation from all the stress!
          </p>
        </div>
      </section>
    </main>
  );
}