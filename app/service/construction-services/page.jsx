import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function ConstructionPage() {

  const whyChoose = [
    "We are a one-stop platform for your entire house maintenance services",
    "Our professionals have all the required skills and tools they need to repair your household items and broken fixtures",
    "We deliver services that fit your home style and specifications",
    "We implement innovative strategies in business to be at the forefront of home repairing and maintenance industry",
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <p className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Construction Works
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Build Your <span className="text-orange-600">Dream Home</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              From construction to renovation and repairs, GharFix provides
              reliable, high-quality services to transform your home exactly
              the way you want.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/construction-work.jpg"
                alt="Construction Work"
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
              About Construction Services
            </h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                It is always a dream for many people to be able to build their own house according to their wishes. 
                Everything in their house should be the way they want it to be. Or sometimes it is the certain parts 
                of it you need to get renovated. And all you need for such jobs are skilled personnel with accurate 
                proficiency in their jobs, which is mostly hard to find. 
              </p>

              <p>
                From new construction to house renovations/house remodelling to repairs, all the services you need will 
                always have long-term implications on your life. Therefore, it is important to choose the best building 
                contractors for even simple processes.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <ContactForm serviceName="Construction Service"/>
          </div>

        </div>
      </section>
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="space-y-3 text-gray-700 leading-8 text-lg">
        <p>
          Be it decorating your windows, waterproofing services or merging two rooms to get extra space, renovating 
          your house requires a lot of efforts. Some things are straight while some things can get tricky to work with. 
          And for such tricky tasks, you need a professional architect and skilled labour and apart from all this, 
          a clear understanding of what you want to do.
        </p>
        <p>
          Among the many service providers in the market, choosing the right one for building or renovating or 
          maintaining your home is not an easy task. Along with quality, cost-effectiveness and timely deliveries 
          play a big role. You need not look any further; we may just have the perfect solution for you – GharFix 
          Home Construction Services.
        </p>
      </div>
    </section>
      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          

          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Your Perfect Housing Partner
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Finding someone to trust your house with can also be the tricky thing sometimes. Sometimes you have a 
              different outlook for what you want and the other person may fail to deliver it that way. But this does 
              not mean that you keep your house from getting its new look. The solution is here! At GharFix.com, 
              you can find the perfect people for the job.
            </p>
            <p className="text-gray-700 leading-8 text-lg pt-3"> 
              GharFix is a one of the leading building repair contractors and home building contractors that offers 
              the best home construction services. We are dedicated to provide quality in every aspect because we 
              know your home is your personal haven. With your home renovations, construction as well as maintenance 
              services, we know that you handover your trust and we take utmost care to not just fulfil but surpass 
              all your expectations.
            </p>
            <p className="text-gray-700 leading-8 text-lg pt-3">
              GharFix employs skilled and experienced experts who you can trust your house with. There’s no worry when 
              you have someone who will deliver the results you want! We deliver exceptional interior designing services 
              that catch the eye of visitors. With one of the best building construction contractors, you need not worry 
              about anything. Sit back and let us fulfil all your needs.
            </p>
          </div>

          <div className="bg-orange-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Complete Home Solutions
            </h2>

            <p className="leading-8 text-orange-50 text-lg pb-3">
              Also, GharFix brings the top-notch house maintenance and repairs, roof repairing services, waterproofing 
              services and ceiling designing services to customers, all at a single platform. From ceiling leak repair 
              services to being your favourite renovation contractor, GharFix is here for everything. We have garnered 
              a reputation as a trusted, qualified and reasonably priced service provider in Mumbai.
            </p>
             <p className="leading-8 text-orange-50 text-lg pb-3">
              Home is your place of relaxation and comfort. It should feel like one. While constructing any home, 
              we take care of all your comforts and also offer contemporary luxuries to create a comprehensive lifestyle. 
              Remodelling your home is as good as building it a new. As your renovation contractor, GharFix ensures to 
              augment your space as well as your experiences while keeping its old charm alive. Our home renovation 
              service is the best-in-class in Mumbai.
             </p>
             <p className="leading-8 text-orange-50 text-lg pb-3">
              GharFix promises you best in class construction works be it for anything, from renovating the house to 
              adding a few floors to the existing house. Construction works are now made easy and at a click with 
              affordable prices at GharFix!
             </p>
             <p className="leading-8 text-orange-50 text-lg pb-3">
              Looking for the prominent building contractors near me, or the best construction companies near me, 
              look no further. GharFix is the one-stop solution for all your needs!
             </p>
          </div>

        </div>
      </section>

      {/* Why GharFix */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why GharFix?
          </h2>
          <p className="leading-8 text-black pb-3 text-lg">
            What are you waiting for then? Now it’s time to give your house the perfect makeover with GharFix. 
            Log in today and give wings to your dreams!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border flex gap-4">
                <div className="w-10 h-10 bg-orange-100 text-orange-700 flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Give Your Home a Perfect Makeover
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            What are you waiting for then? Now it’s time to give your house the perfect makeover with GharFix. Log in today and give wings to your dreams!
          </p>

        </div>
      </section>

    </main>
  );
}