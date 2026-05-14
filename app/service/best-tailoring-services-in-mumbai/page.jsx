import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function TailoringServicesPage() {

  const whyBest = [
    " Schedule a professional’s visit to ensure perfect fitting",
    "Choose your favourite style from our style catalogue or simply give us your style image",
    "Skilled tailors, designers and craftsmen ensure perfect finishing",
    "We ensure on-time delivery",
    "Get customized designs in kurtas, blouses, salwar suits, suits and more, and manage to look glamorous every day",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-rose-100 text-rose-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Tailoring & Alteration Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              The Luxury of <span className="text-rose-600">Tailor-Made Clothing</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              In this new age where one can get everything ready-made and online, there are just a few who consider 
              tailoring as a trend. But here’s the thing, even though it might be considered as the old-fashioned way 
              of buying clothes, most online platforms can’t match the tailor-made outfits, stitched to perfection. 
              It sure takes some time for the outfit, but the result is never disappointing. The comfort of it, the 
              design and everything is unparalleled. With every detail weaved with love and care, it is a luxury in itself!
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book a Tailor
              </a>

              <a
                href="#services-overview"
                className="border border-rose-600 text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Mobile Alteration Service
                </h2>
                <p className="text-gray-600">
                  Our tailor will see you at your place
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Form */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Additionally, many a times your favourite dresses and clothes may need some repairs. 
                Clothing repairs for general tears can be a tedious job when done at home. We have 
                a cost-effective solution to alter, stitch and clothing repairs. 
              </p>

              <p>
                Up-scaling of old clothes according your wishes will not just save your old favourites, 
                but also save a lot of money. This wonderful solution can give a fresh new look to
                 your wardrobe. Old sarees, dresses and even jeans can be up-scaled beautifully.
              </p>

              <p>
                Now, what if we tell you can have even this comfort a click away? Fascinating isn’t it? 
                We bet you have never expected to find tailoring services online, but with this new age, 
                we bring to you a new comfort, right at you home. GharFix brings to you online custom tailoring services!
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5 text-lg">
              Fill out the form and our tailoring team will contact you.
            </p>

            <ContactForm serviceName = "Tailoring Service In Mumbai"/>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Your Customised Wardrobe at GharFix
          </h2>

          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
            GharFix offers online tailoring services and takes care of all your stitching needs. 
            We render clothing alterations, designing your wardrobe to match your style and also 
            fittings and suitings. From simple tops and shirts to heavy gowns, anarkalis and suits, 
            GharFix customises everything for you. It is one of the best online tailoring services in Mumbai.
          </p>
          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
            With GharFix, you can now customize your wardrobe online.You can choose from a variety of designs, 
            or choose to make your own design as well as seek advice from our fashion designers, all your needs 
            are taken care of with our online tailoring services. You can let your imagination run in every 
            direction and we will weave your thoughts into beautiful dresses.
          </p>
          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
            Apart from new clothing options, we also recreate and revamp your old ones! If you are thinking 
            of making something new, something different out of your old sarees, well, you don’t need to 
            think much of where to go. With GharFix’s online custom tailoring services, you can get the 
            best fashion advice on what to do with those!
          </p>
          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
            Our highly skilled designers and craftsmen ensure that you get your clothes stitched exactly 
            the way you want them. We also render express service if you are in a rush. By paying a 
            little extra, we ensure faster delivery of your stitched garment. All the garments are 
            tailored as per the specifications provided by you. Additionally, our courteous customer 
            support team is here to address all your queries. All you need to do is book an online 
            tailor with GharFix, and enjoy the benefits of personalised clothing.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Booking an Online Tailoring Service with GharFix
          </h2>

          <p className="text-gray-60 mx-auto leading-8 text-lg">
            The easiest way of finding an ‘online tailor near me’ is to search for it online. For all your needs, 
            be it make the clothes anew or for small alterations, you can now search for specific things. For eg.: 
            ladies tailor near me or suit tailor near me or tailor alterations near me. Once you find a list of names, 
            it is important to compare and understand what the services they provide are and how good these services are. 
With GharFix, all these steps are combined in a single effort. With are verified, professional services, all your 
worries will be at bay. All you need to do is book our online tailoring services on a click or connect with our 
experts for further procedures!
          </p>

        </div>
      </section>

      {/* Online Tailoring / Best Choice */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Why GharFix is the Best Choice
              </h2>
              <p className="text-gray-700 leading-7 text-lg">
                Our boutique tailoring services are easy to opt for. For all your clothing alterations, 
                stitching, customisation in clothes, we are here with a one-stop solution. With easy booking 
                and high-quality online tailoring services, there’s nothing better for you!
              </p>
              <ul className="space-y-4 text-gray-700 leading-7 text-lg list-disc list-inside pt-4 pl-4">
                {whyBest.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-600 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Book Your Tailor Today</h2>
          <p className="text-xl font-semibold">
            So what are you waiting for? Log In to GharFix today and have your clothes stitched your way with 
            our expert tailoring services. Revamp your wardrobe today!
          </p>
        </div>
      </section>
    </main>
  );
}