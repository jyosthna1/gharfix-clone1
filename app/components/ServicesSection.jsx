
import Image from "next/image";
import { title } from "process";

const features = [
  {
    title: "Plumbing Services",
    image: "/images/plumbing-services.jpg",
    desc: "GharFix can help you get rid of your leaking tap and bathroom repairs and all other related plumbing works , with reasonable pricing and trained plumbers.Our team is always available to serve you in all the areas of Mumbai and Navi Mumbai do not hesitate to text or call us we are open 24 hours at your service.",
    link: "/best-plumbing-services-in-mumbai",
  },
  {
    title: "Electrical Services",
    image: "/images/electrical-services.jpg",
    desc: "Our experts can solve all your electrical need like a fused electrical circuit,burned bulb holder,faulty wire repair,regular electric maintenance and all other related electrician works.Finding it hard to fix electrical issues at residential or commercial spaces,Gharfix.com is here for all your needs to solve issues in less than 45 mins!",
    link: "/best-electrical-services-in-mumbai",
  },
  {
    title: "Housekeeping Services",
    image: "/images/house-keeping-1.jpg",
    desc: "We have our specialized housekeeping team to handle our corporate clients needs like hygiene everywhere.GharFix can help you get rid of all your basic cleaners, sweepers and building maintenance services,with reasonable pricing and trained workers.Contact now for best-in-class housekeeping solutions.",
    link: "/best-housekeeping-services-in-mumbai",
  },
  {
    title: "Constructions",
    image: "/images/construction.jpg",
    desc: "One of the best experiencing and core expertise that you will get from us is Construction for your every days needs.GharFix promises you best in class construction works be it for anything like renovating the house,adding a few floors to the existing house & waterproofing services.Book your service at a click with affordable prices at GharFix!",
    link: "/best-construction-services-in-mumbai",
  },
  {
    title: "Water Tank Cleaning Services",
    image: "/images/tankcleaning.png",
    desc: "At present we are providing services to various Residential, Industrial Commercial complex and Sky high Buildings with using state of the heart technology. With Our advance and state of the heart technology makes the work better, fast and long lasting also We have pre-advance set up & advanced equipment for tank cleaning which are well known by the industry called scientific method.",
    link: "/water-tank-cleaning-services",
  },
  {
    title: "Digital Signage Banner Services",
    image: "/images/gharfix.jpeg",
    desc: "We have been spearheading Glow , Neon and LED signage business in India over 33year through our latest unique offering of technologically advanced research driven solutions supported by be exaggeration to say that signage business “This will not cutting edge manufacturing facilities. runs in our blood. With fourth generation of family now entering into the business, today we are distinctly placed in offering complete Concept-to-Part solution”",
    link: "/digital-signage-banner-service",
  },
  {
    title: "GharChef Services",
    image: "/images/chef.jpg",
    desc: "GharChef is a unique solution to solve our daily cooking and serving from individual to enterprise business level where we look for fresh food and in-house cooking. GharChef makes life easy, better and healthy. You can take GharChef where ever you go and the time you would like outdoor or indoor.",
    link: "/ghar-chef-services",
  },
  {
    title: "GharMaid Services",
    image: "/images/house-keeping.jpg",
    desc: "GharMaid service helps you and your family to do your daily house chores like house cleaning, bathroom cleaning, kitchen cleaning, cloth washing, dusting, vacuuming, floor cleaning, and organizing household stuff.",
    link: "#",
  },
];

const services2 = [
    {
      title: "Real Estate",
      image: "/images/real-estate-1.jpg",
      desc: "The search for a perfect house has always been difficult and troublesome. But you need not worry when GharFix is here for you.Our Client trust made us to start this venture of real estate where we have trending of buying and selling real estate property.Visit GharFix and find the perfect home you are looking for!",
      link: "/best-real-estate-services-in-mumbai"
    },
    {
      title: "Tailoring Services",
      image: "/images/tailoring-services.jpg",
      desc: "We believe appearance makes lot of difference where custom hand stitched clothes is a key factor.With GharFix,you can now customize your wardrobe online.Log In to GharFix today and have your clothes stitched your way with our expert tailoring services.",
      link: "/best-tailoring-services-in-mumbai"
    },
    {
      title: "Bazaar Services",
      image: "/images/bazaar-services.jpg",
      desc: "Every day grocery is a boring job that too when you come home and forgot get something ,no worries we can fix it.You can just log in to GharFix and find everything you need through online grocery shopping.Now it’s time to order your essentials in a new way,the GharFix way!",
      link: "/bazaar-services"
    },
    {
      title: "Elderly Care Services",
      image: "/images/elderly-services.jpg",
      desc: "Our team love to help elders which may be a volunteer or caretaker that depend on the situation,place,age etc.Our professionals are certified caregivers and are able to provide quality services such as blood pressure check-up, pulse oximeter to old age people.At GharFix,you can find all kinds of services at one click.",
      link: "/best-elderly-care-services-and-facility-in-mumbai"
    },
    {
      title: "Monthly Society Maintenance",
      image: "/images/society-main.jpg",
      desc: "Effortless Monthly Society Maintenance: Comprehensive solutions including housekeeping, security services, office management, gardening, street and park care, ensuring a seamless, safe, and vibrant community every month. Our expert team handles every detail, from pristine parks to secure surroundings.",
      link: "/best-elderly-care-services-and-facility-in-mumbai"
    },
    {
      title: "Professional Driver Services",
      image: "/images/driver.jpg",
      desc: "Professional Driver Services: Reliable, experienced drivers at your service for safe and comfortable journeys. Whether it’s daily commutes, special occasions, or long-distance travel, our vetted drivers ensure punctuality, safety, and a stress-free experience on the road.",
      link: "/best",
    },
    {
      title: "Appliances AMC",
      image: "/images/amc-appliances.jpg",
      desc: "Comprehensive and Non Comprehensive Appliances AMC: Ensure the longevity and peak performance of your home appliances with our Annual Maintenance Contracts. From refrigerators to washing machines, our expert technicians provide regular check-ups, timely repairs, and reliable support, keeping your appliances running smoothly all year round.",
      link: "/best",
    },
    {
      title: "Mobile repair",
      image: "/images/mob_rep.jpg",
      desc: "Expert Mobile Repair Services: Fast, reliable solutions for all your smartphone needs. From screen replacements to battery fixes, our certified technicians bring your device back to life with precision and care. Trust us to restore your mobile’s performance and keep you connected without hassle.",
      link: "/desc",
    },
    
  ];

const services3 = [
  {
      title: "NRI Services",
      image: "/images/nri-services-1.jpg",
      desc: "Our co-found is an NRI and we did our best to serve in all A-Z(aspect) services as needed in that way you can count on us.With trustable consultants, you can now relax and not run the risk of fraud.GharFix is here to fulfill all your needs!",
      link: "/desc",
    },
    {
      title: "Massage and Spa",
      image: "/images/spa-massage.jpg",
      desc: "We have a team who is specialized for various type of massages or therapy.With GharFix,you can now book a full body massage,which brings the masseuse right at your place.Visit GharFix.com today and have a weekend full of relaxation!",
      link: "/desc",
    },
    {
      title: "MacBook Repair",
      image: "/images/macbook-repair.jpg",
      desc: "We have a MacBook repair experts who can fix,analysis and guide you if there is catastrophe happens to your Macbook.Log in today to GharFix and find the best MacBook repair services near you with the best offers on services.",
      link: "/desc",
    },
    {
      title: "Financing Services",
      image: "/images/financing-services.jpg",
      desc: "We are not a financial institute but we provide financial help through our various partners.We offer all kinds of financial services to business and individuals at just one click.We ensure you the best financial consultation services,just one click from your phone.",
      link: "/desc",
    }
]

export default function ServicesSection() {
  return (
    <section>
      <div className="mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 mt-4 bg-white">
          <h2 className="text-4xl font-light text-[#6e6d6d] font-sans">
            A few things we’re great at
          </h2>

          <h3 className="mt-7 text-4xl font-light text-[#6e6d6d] font-sans">
            Home & office appliances AMC
          </h3>

          <p className="mt-7 text-black-600 font-semibold text-xl max-w-3xl mx-auto">
            We are expert in Serving Mobile Tailor Alteration, Elderly Care for NRI’s, 
            Water Tank Cleaning, Plumbing, Electrical, Chef , Maid, Ritual’s and Computer Repair, 
            Also our partners will help in Financing, Real-estate and construction.
          </p>
        </div>
           <div className="pb-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((item, index) => (
            <div key={index} className="p-4 rounded-lg">

              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-md mx-auto"
              />

              <h4 className="mt-4 font-semibold text-lg">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-2 text-lg text-light">
                {item.desc}
              </p>

              <hr className="my-4" />

              <a
                href={item.link}
                className="text-blue-600 font-medium"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
         <div className="bg-[#f4ecec]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {services2.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg m-5">

              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-md mx-auto"
              />

              <h4 className="mt-4 font-semibold text-lg">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-2 text-sm">
                {item.desc}
              </p>

              <hr className="my-4" />

              <a
                href={item.link}
                className="text-blue-600 font-medium"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
        </div>
          <div className="mt-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {services3.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">

              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-md mx-auto"
              />

              <h4 className="mt-4 font-semibold text-lg">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-2 text-sm">
                {item.desc}
              </p>

              <hr className="my-4" />

              <a
                href={item.link}
                className="text-blue-600 font-medium"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
}