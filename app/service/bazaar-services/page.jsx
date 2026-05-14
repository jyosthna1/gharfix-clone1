import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function BazaarServicesPage() {
  const features = [
    "Quick and Easy Service: Quickly and easily add items to your card and checkout",
    "Timely service: We ensure timely deliveries for all our customers",
    "Trusted professionals: Our service providers go through a strict background check process to ensure premium quality of deliverables",
    "Unbeatable prices: Apart from offering top-notch quality, we are sweetening the deal by delivering products at unbeatable prices",
    "Time-saving: It just takes 1 minute to order groceries online on GharFix to get all the products delivered on your doorstep",
    "Payment options as per your liking: We understand the importance of hard-earned money. Hence, we accept all your international and national cards, debit cards or cash on delivery",
    "Special offers: The best prices in online grocery shopping with additional offers",
    "We deliver the purest product: You can always expect the best quality grocery with freshest products and the longest sell-by dates",
    "Happiness Redefined: We ensure complete customer satisfaction and stand behind all your product purchase",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Bazaar Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Easiest Way of Shopping from an{" "}
              <span className="text-green-600">Online Supermarket</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Isn’t it all just tedious sometimes to have to go to the bazaar and buy things? And more so when you are 
              in the middle of some function at your house and you are prepping for that and don’t have the time to 
              rush to the store to buy some essentials? Wouldn’t you love it if there was someone who would get that 
              stuff for you?
            </p>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              Or you have got a busy routine, with all the office work and meetings and everything, and you are 
              just exhausted. And you come home to an empty refrigerator. What a nightmare! Wouldn’t you love 
              it if all your groceries were done and you would have to just collect them at the door? It 
              sure does sound relieving and luxurious.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Order Now
              </a>

              <a
                href="#why-gharfix"
                className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Why Choose Us
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/bazar-services-page.jpg"
                alt="Bazaar services"
                width={438}
                height={338}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Your Easiest Grocery Shopping</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Well, brace yourselves! Everything is now possible. You won’t have to drag yourselves 
                to the stores even when you are exhausted you can just do online grocery shopping. 
                You can just log in to GharFix and find everything you need.
              </p>

              <p>
                Mumbai’s one of the leading services provider company, GharFix brings all bazar products to 
                customers in the comfort of their home. From vegetables to fruits, find all your grocery 
                online and we deliver all your essentials to fulfil your daily needs. We have taken away 
                all the stress related to shopping for daily bazar products. We allow you to order products 
                online without travelling long distance.
              </p>

              <p>
                You can start shopping by following a pretty simple process. Start by building your cart. 
                With all kinds of products available at the best prices, you will never fall short of 
                anything and can get everything. Get it delivered on your doorstep quickly. 
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5 text-lg">
              Share your grocery needs and our team will contact you.
            </p>

            <ContactForm serviceName="Bazar Services"/>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
            So you can grocery shop at ease even when you are in the office or in the middle of something else. 
            GharFix makes it all easy. With fresh veggies and all other products at affordable prices and with 
            quick deliveries, you can forget the tiring task of going to the market and getting things.
          </p>
          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
             We prioritise a straightforward agenda, to help you walk away from the mundane online grocery 
             shopping and present novel digital solutions for grocery delivery. Not to mention that too 
             from the comfort of your home or office. Gone are days of being stuck in traffic jams, 
             long-queues, carrying groceries and most importantly, wasting your precious time. Just 
             a simple click and we will move Earth and Moon to bring you, whatever you need, to your 
             door. Hell, if you like, we could set them up in your kitchen too!
          </p>
          <p className="text-gray-600 mx-auto mb-10 leading-8 text-lg">
            We think of ourselves as innovators in supportability, business benevolence, and working and 
            creating opportunities for others. We seek nothing but redefining our nation’s food experience 
            and online food shopping for our customers. Whatever they need or order, they come first and 
            deserves the finest of quality. We further add benefits, tastes, and flavours by handpicking 
            quality products delivering straight to our customer with no compromises.
          </p>
          <p className="text-lg text-gray-600 mx-auto mb-10 leading-8">
            Come join us as we enhance your retail and shopping experience by being in line with the 
            digital world. With Gharfix as your online supermarket, you will get nothing short of exceptional 
            products, the ease of shopping, unmatched quality, offers, and prices across the brands.
          </p>
        </div>
      </section>

      {/* Why GharFix */}
      <section id="why-gharfix" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why GharFix?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-red-600 max-w-3xl mx-auto mt-10 leading-8 text-xl font-bold">
           Now it’s time to order your essentials in a new way, the GharFix way!
          </p>
        </div>
      </section>
    </main>
  );
}