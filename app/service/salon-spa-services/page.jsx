import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function DigitalSignagePage() {
  const whyGharfix = [
    "Facial services: Face cleaning, face bleach, different types of facials based on your skin type. Advanced facials and skin treatments.",
    "Makeup Services: Face make-up, saree draping, etc.",
    "Hair Services: Hair massage, Hair cut, Hair color, Hairstyling, Hair treatment for nourishing and conditioning of hair.",
    "Cleansing Service: Manicure, Pedicure Nail shaping, applying nail polish and underarms",
    "Threading services: Eyebrow, Upper lip, Forehead.",
    "Waxing: Full body waxing, Full hands, full legs",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Digital Signage Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Smart <span className="text-cyan-600">Digital Display Solutions</span> for Modern Advertising
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              We provide complete digital signage solutions including display setup,
              content management, scheduling, monitoring, and maintenance for your business.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get Started
              </a>

              <a
                href="#services-overview"
                className="border border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/salon-spa.jpg"
                alt="Digital Signage Services"
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
            <h2 className="text-3xl font-bold mb-6">About Digital Signage Services</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                At Gharfix.com we believe in customer satisfaction and give you a one-stop solution for all your 
                needs. We all love to be pampered and spend some “Me Time” to relax and feel special. At 
                Gharfix.com we are the best service provider for all services like Manicure, Pedicure, 
                Makeup, Haircut, Threading, Waxing, Facial, Bleach, Massage, Mehandi, Bridal Services. 
                Our Beauticians are professional experts with years of professional experience and use 
                precision while servicing a client. During this pandemic where lives have come to halt 
                and people are working from home. Women are more stressed up and busy with work thus can’t 
                go to the beauty parlors because of the tight schedule. So do not worry we bring you the 
                beauty services at your doorstep… wherein you can sit back and relax in the comfort of your home. 
                Our beauticians follow all the hygiene precautions and use disposable wipes and towels. Our 
                beauticians wear masks during the complete service and use sanitizers and have kept sanitizers 
                for our clients to ensure safety. We believe in seamless service and building trust for long-term
                 business benefits. So what are you waiting for just checking for Salon and spa services near me, 
                 beauty services at home near me, best hair services near me your search ends here. Tell us your 
                 requirement we will be happy to help you.
                 </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5">
              Fill out the form and our team will contact you for your digital signage needs.
            </p>

            <ContactForm serviceName = "Salon Spa Service"/>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why Gharfix.com?</h2>
          <p className="pb-10 text-lg text-gray-600">
            We focus on best brands like L’Oreal, Matrix, Cheryl’s, Lakme, Biotique, Oriflame, Lotus, etc. 
            We use sealed and genuine products. We believe in customer hygiene and thus use disposable towels 
            and wipes. We offer you a wide range of beauty services that fit your needs and also don’t pinch 
            your pocket. We offer beauty services from hair styling, to facial skincare, Waxing, Threading 
            Manicure, Pedicure, and body massage. We offer a one-stop solution for all your beauty needs. We 
            offer the best quality services in the industry at affordable rates. Our beauticians are very 
            experienced and specialized in their fields. We also customize beauty packages as per your requirement and budget.
          </p>
          <h2 className="text-3xl font-bold text-center mb-10"> We Offer Services like</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whyGharfix.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-lg mt-10 leading-8">
            Spa Services: Spa services help us to de-stress and enjoy therapeutic benefits. Due to stress, busy schedules, 
            increasing work pressure, Anxiety tension increases in our body and mind. Thus in our busy lives, we should 
            take out some time for ourselves and relax and enjoy spa services. These services are provided by our professional 
            therapists. To enjoy these services, you do not have to go to the spa center or spend time booking appointments or 
            scheduling or following up with them and increasing stress. Just look for Spa services near me and your search ends 
            here at Gharfix.com where we believe in customer satisfaction and building long-term relationships. You can enjoy 
            the spa services at the comfort of your home without disturbing your schedule or wasting time traveling and getting 
            stuck in traffic. Just give us a call and we will fix an appointment and book your schedule at your convenience. 
            Our Therapists are very professional and maintain good hygiene i.e. wear masks during the complete service and use 
            sanitizers. We offer the best quality service in the industry at a very affordable service. Our Therapists give you 
            a massage for 60 minutes which relaxes your body and mind. Thus you feel relaxed and are ready to make a fresh start.
          </p>
        </div>
      </section>
    </main>
  );
}