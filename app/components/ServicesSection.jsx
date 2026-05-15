import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Plumbing Services",
    image: "/images/plumbing-services.jpg",
    desc: "GharFix can help you get rid of your leaking tap and bathroom repairs and all other related plumbing works , with reasonable pricing and trained plumbers.Our team is always available to serve you in all the areas of Mumbai and Navi Mumbai do not hesitate to text or call us we are open 24 hours at your service.",
    link: "/service/plumbing-services",
  },
  {
    title: "Electrical Services",
    image: "/images/electrical-services.jpg",
    desc: "Our experts can solve all your electrical need like a fused electrical circuit,burned bulb holder,faulty wire repair,regular electric maintenance and all other related electrician works.Finding it hard to fix electrical issues at residential or commercial spaces,Gharfix.com is here for all your needs to solve issues in less than 45 mins!",
    link: "/service/electric-service",
  },
  {
    title: "Housekeeping Services",
    image: "/images/house-keeping-1.jpg",
    desc: "We have our specialized housekeeping team to handle our corporate clients needs like hygiene everywhere.GharFix can help you get rid of all your basic cleaners, sweepers and building maintenance services,with reasonable pricing and trained workers.Contact now for best-in-class housekeeping solutions.",
    link: "/service/housekeeping-services",
  },
  {
    title: "Constructions",
    image: "/images/construction.jpg",
    desc: "One of the best experiencing and core expertise that you will get from us is Construction for your every days needs.GharFix promises you best in class construction works be it for anything like renovating the house,adding a few floors to the existing house & waterproofing services.Book your service at a click with affordable prices at GharFix!.",
    link: "/service/construction-services",
  },
  {
    title: "Water Tank Cleaning",
    image: "/images/tankcleaning.png",
    desc: "At present we are providing services to various Residential, Industrial Commercial complex and Sky high Buildings with using state of the heart technology. With Our advance and state of the heart technology makes the work better, fast and long lasting also We have pre-advance set up & advanced equipment for tank cleaning which are well known by the industry called scientific method.",
    link: "/service/water-tank-cleaning-services",
  },
  {
    title: "Digital Signage",
    image: "/images/gharfix.jpeg",
    desc: "We have been spearheading Glow , Neon and LED signage business in India over 33year through our latest unique offering of technologically advanced research driven solutions supported by be exaggeration to say that signage business “This will not cutting edge manufacturing facilities. runs in our blood. With fourth generation of family now entering into the business, today we are distinctly placed in offering complete Concept-to-Part solution” ",
    link: "/service/digital-signage-banner-service",
  },
  {
    title: "GharChef Services",
    image: "/images/chef.jpg",
    desc: "GharChef is a unique solution to solve our daily cooking and serving from individual to enterprise business level where we look for fresh food and in-house cooking. GharChef makes life easy, better and healthy. You can take GharChef where ever you go and the time you would like outdoor or indoor.",
    link: "/service/gharchef-services",
  },
  {
    title: "GharMaid Services",
    image: "/images/house-keeping.jpg",
    desc: "GharMaid service helps you and your family to do your daily house chores like house cleaning, bathroom cleaning, kitchen cleaning, cloth washing, dusting, vacuuming, floor cleaning, and organizing household stuff.",
    link: "/service/housekeeping-services",
  },
];

const services2 = [
  {
    title: "Real Estate",
    image: "/images/real-estate-1.jpg",
    desc: "The search for a perfect house has always been difficult and troublesome. But you need not worry when GharFix is here for you.Our Client trust made us to start this venture of real estate where we have trending of buying and selling real estate property.Visit GharFix and find the perfect home you are looking for!",
    link: "service/best-real-estate-services-in-mumbai",
  },
  {
    title: "Tailoring Services",
    image: "/images/tailoring-services.jpg",
    desc: "We believe appearance makes lot of difference where custom hand stitched clothes is a key factor.With GharFix,you can now customize your wardrobe online.Log In to GharFix today and have your clothes stitched your way with our expert tailoring services.",
    link: "service/best-tailoring-services-in-mumbai",
  },
  {
    title: "Bazaar Services",
    image: "/images/bazaar-services.jpg",
    desc: "Every day grocery is a boring job that too when you come home and forgot get something ,no worries we can fix it.You can just log in to GharFix and find everything you need through online grocery shopping.Now it’s time to order your essentials in a new way,the GharFix way!",
    link: "/service/bazaar-services",
  },
  {
    title: "Elderly Care Services",
    image: "/images/elderly-services.jpg",
    desc: "Our team love to help elders which may be a volunteer or caretaker that depend on the situation,place,age etc.Our professionals are certified caregivers and are able to provide quality services such as blood pressure check-up, pulse oximeter to old age people.At GharFix,you can find all kinds of services at one click.",
    link: "/service/elderly-care-services",
  },
  {
    title: "Monthly Society Maintenance",
    image: "/images/society-main.jpg",
    desc: "Effortless Monthly Society Maintenance: Comprehensive solutions including housekeeping, security services, office management, gardening, street and park care, ensuring a seamless, safe, and vibrant community every month. Our expert team handles every detail, from pristine parks to secure surroundings.",
    link: "/best-elderly-care-services-and-facility-in-mumbai",
  },
  {
    title: "Professional Driver Services",
    image: "/images/driver.jpg",
    desc: "Professional Driver Services: Reliable, experienced drivers at your service for safe and comfortable journeys. Whether it’s daily commutes, special occasions, or long-distance travel, our vetted drivers ensure punctuality, safety, and a stress-free experience on the road.",
    link: "/services/car-services",
  },
  {
    title: "Appliances AMC",
    image: "/images/amc-appliances.jpg",
    desc: "Comprehensive and Non Comprehensive Appliances AMC: Ensure the longevity and peak performance of your home appliances with our Annual Maintenance Contracts. From refrigerators to washing machines, our expert technicians provide regular check-ups, timely repairs, and reliable support, keeping your appliances running smoothly all year round.",
    link: "/service/plumbing-services",
  },
  {
    title: "Mobile Repair",
    image: "/images/mob_rep.jpg",
    desc: "Expert Mobile Repair Services: Fast, reliable solutions for all your smartphone needs. From screen replacements to battery fixes, our certified technicians bring your device back to life with precision and care. Trust us to restore your mobile’s performance and keep you connected without hassle.”",
    link: "/service/mobile-repair",
  },
];

const services3 = [
  {
    title: "NRI Services",
    image: "/images/nri-images.jpg",
    desc: "Our co-found is an NRI and we did our best to serve in all A-Z(aspect) services as needed in that way you can count on us.With trustable consultants, you can now relax and not run the risk of fraud.GharFix is here to fulfill all your needs!",
    link: "/service/nri-service-mumbai",
  },
  {
    title: "Massage and Spa",
    image: "/images/spa-massage.jpg",
    desc: "We have a team who is specialized for various type of massages or therapy.With GharFix,you can now book a full body massage,which brings the masseuse right at your place.Visit GharFix.com today and have a weekend full of relaxation!",
    link: "/service/massage-services",
  },
  {
    title: "MacBook Repair",
    image: "/images/macbook-repair.jpg",
    desc: "We have a MacBook repair experts who can fix,analysis and guide you if there is catastrophe happens to your Macbook.Log in today to GharFix and find the best MacBook repair services near you with the best offers on services.",
    link: "/service/macbook-service",
  },
  {
    title: "Financing Services",
    image: "/images/financing-services.jpg",
    desc: "We are not a financial institute but we provide financial help through our various partners.We offer all kinds of financial services to business and individuals at just one click.We ensure you the best financial consultation services,just one click from your phone.",
    link: "/service/financing-services",
  },
];

function ServiceCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
      <div className="overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm leading-7 mb-5">
          {item.desc}
        </p>

        <Link
          href={item.link} target="_blank"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
        >
          Learn more
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

function ServicesGrid({ title, subtitle, items, bg = "bg-white" }) {
  return (
    <section className={`${bg} py-16 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 leading-8">
            {subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesSection() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.12),_transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
              Home • Office • Lifestyle Services
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              A few things we’re
              <span className="text-blue-600"> great at</span>
            </h1>

            <h2 className="mt-5 text-2xl md:text-3xl font-medium text-gray-700">
              Home & Office Appliances AMC
            </h2>

            <p className="mt-6 text-md md:text-lg font-bold text-gray-600 leading-8 max-w-3xl mx-auto">
              We are expert in Serving Mobile Tailor Alteration, Elderly Care for NRI’s, Water Tank Cleaning, 
              Plumbing, Electrical, Chef , Maid, Ritual’s and Computer Repair, Also our partners will help in Financing, 
              Real-estate and construction.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#featured-services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-medium shadow-lg transition"
              >
                Explore Services
              </Link>

              
            </div>
          </div>
        </div>
      </section>

      <div id="featured-services">
        <ServicesGrid
          title="Featured Services"
          subtitle="Professional and reliable everyday services designed to make your life easier."
          items={features}
          bg="bg-white"
        />

        <ServicesGrid
          title="More Services We Offer"
          subtitle="From real estate to mobile repair, GharFix connects you with trusted support across categories."
          items={services2}
          bg="bg-gray-50"
        />

        <ServicesGrid
          title="Specialized Services"
          subtitle="Personalized solutions for NRI needs, wellness, technology repairs, and financing guidance."
          items={services3}
          bg="bg-white"
        />
      </div>
    </main>
  );
}