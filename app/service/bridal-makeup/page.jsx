import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function BridalMakeupPage() {
  const whyGharfix = [
    "Professional bridal makeup and mehndi experts with years of experience",
    "Personalized guidance based on skin type, dress, and occasion",
    "Advanced makeup techniques for a natural and elegant bridal look",
    "Multiple bridal mehndi design options to match your style",
    "Party makeup, saree draping, and hairstyling services also available",
    "Affordable bridal packages with customer-focused service",
  ];

  const mehndiDesigns = [
    "Arabic Mehndi Design",
    "Indo Arabic Mehndi",
    "Radha-Krishna Mehndi Design",
    "Indian Mehndi Design",
    "Western Contemporary Mehndi Designs",
    "Moroccan Mehndi Designs",
  ];

  const bridalServices = [
    "Advanced Facials",
    "Full Body Waxing",
    "Body Polishing",
    "Threading",
    "Manicure",
    "Pedicure",
    "Bridal Makeup",
    "Bridal Mehndi",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Bridal Makeup Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Look Your Best with
              <span className="text-pink-600"> Bridal Makeup & Mehndi</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Make your wedding day unforgettable with professional bridal
              makeup, bridal mehndi, hairstyling, and beauty packages at your
              doorstep.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book Now
              </a>

              <a
                href="#services-overview"
                className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Packages
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/bridal-image.jpg"
                alt="Bridal Makeup"
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
            <h2 className="text-3xl font-bold mb-6">About Bridal Makeup Services</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Marriage is the most important and memorable day in a girl’s life. Every girl wants to 
                look the best and the most beautiful on her wedding day. It takes days of preparation 
                to glow on the face. For a wedding, the preparations start many days earlier, like choosing 
                the Wedding dress, Mehndi dress, Sangeet dress, Haldi function dress, and the Jewelry to 
                be worn for every occasion. Different makeup and different attire for each occasion. After 
                the finalization of the dresses, it is now turned of choosing the right make-up for every 
                occasion. End of the day the glow matters which is present on the bride’s face and the 
                smile for the entire function making her the most special person at the wedding. At Gharfix.com 
                we want to make you and your day memorable so that even after the wedding you always remember 
                how beautiful you looked on your wedding day… feeling of happiness… a feeling of joy… getting 
                pampered. Our beauticians are experts in their fields with professional experience of many years. 
                You just have to check for Bridal Makeup near me, Bridal Mehndi near me and your search ends here.
              </p>
            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5">
              Fill out the form and our bridal team will contact you.
            </p>

            <ContactForm serviceName = "Bridal Makeup"/>
          </div>
        </div>
      </section>

      {/* Bridal Packages */}
      <section id="services-overview" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="space-y-5 text-gray-700 leading-8 text-lg pb-10">
            Every bride is unique with different features and so is our bridal makeup service for them. 
            D-Day preparations start for the bride from a month earlier, you do not have to worry about 
            going in the sun and getting stuck in traffic, and wasting long hours. Just check for bridal 
            packages at your doorstep and our beauticians are there to help you. For enhancing skin health 
            they will help you with advanced facials so that it takes care of any scars or uneven skin tone. 
            Body Polishing is also one of the best services included in the bridal package which gives a fairer skin tone.
          </p>
          <h2 className="text-3xl font-bold text-center mb-4">
            Bridal Packages & Services
          </h2>

          <p className="text-gray-600 mb-10 leading-8 text-lg">
            We offer you different bridal packages which can be customized as per your needs. These contain 
            services like Advanced Facials, Full Body Waxing, Body Polishing, Threading, Manicure, and Pedicure, etc.
          </p>
        </div>
      </section>

      {/* Why Gharfix */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why Gharfix?</h2>
          <ul className="text-gray-700 text-lg list-disc pl-6">
            <li>Our beauticians are professional experts with years of experience in Bridal Makeup and Bridal Mehndi Services.</li>
            <li>Our experts help you to zero down your search by helping you choose the perfect wedding look depending upon your skin type, dress, and event.</li>
            <li>Our beauticians use advanced makeup techniques to blend the makeup with your skin to give you a beautiful and natural look.</li>
            <li>You may choose loud makeup, or light makes up or glittery makeup or natural makeup look, or celebrity wedding look. With the right type of bridal makeup, the Bride can walk down the stage with pride and confidence. We believe in giving you the best service.</li>
            <li>Let your eyes speak for you, our makeup experts enhance the Eye makeup to Highlight the eyes which gives a very beautiful and attractive look to the bride.</li>
            <li>For photoshoots, the bride needs to look beautiful and the skin tone should be perfect. With our high definition make up the bridal makeup lasts for a longer time, perfectly matching the skin the tone of the bride, and sweat resistance giving the confidence to be on top of the world and smiling.</li>
            <li>For Bridal Mehndi you can choose from different bridal mehndi designs such as</li>
            <ul className="list-disc pl-20 pt-6 pb-6">
              <li>Arabic Mehndi design</li>
              <li>Indo Arabic</li>
              <li>Radha-Krishna Mehndi design</li>
              <li>Indian Mehndi design</li>
              <li>Western- Contemporary Mehndi designs</li>
              <li> Morrocan Mehndi designs</li>
            </ul>
            <li>Our Mehndi design artists are very experienced and the best in their fields. You just need to choose the design you want from the catalog or the one you want and our experts will bring it to life on your hands and feet.</li>
            <li>At weddings, we also offer Mehndi services for the family and friends. A wedding is such an occasion where all your family and friends come together to enjoy and make your day memorable. Everyone wants to look perfect on the wedding day. Women love to apply mehndi so our experts can also fulfill these needs and pamper the women of the house with beautiful mehndi designs to show off and feel special.</li>
            <li>We also offer Party makeup, Saree draping services, Hairstyling.</li>
            <li>Our beauticians are experts in hairstyling and you can choose from various hairstyles i.e. modern or traditional. Our beauticians are professionals from reputed institutes recognized by the beauty industry.</li>
            <li>Our focus is to build customer satisfaction and build long-term relationships with our clients.</li>
            <li>We offer our services at the best affordable rates.</li>
          </ul>

          <p className="text-center font-bold text-red-600 max-w-3xl mx-auto mt-10 leading-8 text-xl">
            So what are you waiting for, call us for your Bridal Makeup and Bridal Mehndi packages?
          </p>
        </div>
      </section>
    </main>
  );
}