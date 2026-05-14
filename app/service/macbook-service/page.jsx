import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function MacBookRepairServicesPage() {
  const quickFixes = [
    {
      title: "Inoperable Wireless LAN or Wi-Fi / Bluetooth",
      desc: "If you don't have Wi-Fi or Bluetooth on your MacBook, the Wi-Fi / BT antenna might need an adjustment.",
    },
    {
      title: "Heating Issues",
      desc: "If your MacBook heats too much due to a drop or liquid deposition, we will check the MacBook for logic board or battery problems.",
    },
    {
      title: "RAM Upgradation",
      desc: "When your MacBook is slow or performance declines",
    },
    {
      title: "Setting up Windows on Mac",
      desc: "Contact us if you want to install Windows operating system over Apple OS.",
    },
    {
      title: "Damage Due to Water",
      desc: "If you have spilt water on your MacBook unintentionally, we will put life back to it.",
    },
    {
      title: "Substitution of the Logic Board",
      desc: "The same can be replaced if a defect exists in the logic board.",
    },
    {
      title: "Keyboard Issues",
      desc: "If any or all of the MacBook keys don’t operate, the keyboard or MacBook top case can need to be replaced depending on the problem.",
    },
    {
      title: "Not Working Trackpad ",
      desc: "If your Macbook tracking scroll or swipe feature doesn’t work then the trackpad will need to be replaced.",
    },
    {
      title: "Cooling / Fan Issues",
      desc: "If the fan of your MacBook makes a lot of noise, a check may be required",
    },
    {
      title: "Problems around software",
      desc: "If you have device issues or need to update your MacBook .",
    },
    {
      title: "Battery Replacement",
      desc: "MacBook batteries can need to be replaced if your MacBook doesn’t retain a charge for a long time or if the battery drains easily.",
    },
    {
      title: "MacBook Charging Issues",
      desc: "The DC-in Board could need a replacement if your MacBook doesn’t charge.",
    },
    {
      title: "SSD Upgrade / Hard Disk",
      desc: "If your MacBook or faster MacBook needs more room, we will upgrade your hard drive or SSD based on your original diagnostic diagnosis.",
    },
  ];

  const offeredServices = [
    "MacBook repair and troubleshooting",
    "Screen replacement",
    "Display panel replacement and memory replacement",
    "Operating System installation and setup service",
    "Water or liquid damage repairing service",
    "USB port replacement and repair",
    "Charger and battery replacement and repair service",
    "Hard disk drive data recovery service",
    "MacBook Air display hinge replacement",
    "Software installation service",
    "Power port repair and replacement",
    "Keyboard repair and replacement",
    "Power jack repair and replacement",
    "Hard drive upgrade, replacement, and repair services",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              MacBook Repair Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Get Your <span className="text-gray-900">MacBook Repaired</span> at a Click
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Professional repair and replacement services for MacBook Air,
              MacBook Pro, iMac, Mac Mini, and more. Fast, reliable, and handled
              by experienced experts.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-orange-500 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book Repair
              </a>

              <a
                href="#quick-fixes"
                className="border border-black text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/mac-repair.jpg"
                alt="MacBook repair services"
                width={540}
                height={362}
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
              An Easy Solution for Your MacBook Repair
            </h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                The technology giant, Apple’s products have tremendous craze among people across the globe. 
                Be it their mobile phones or laptops or tablets, it is a symbol of status to have an Apple 
                product. And why would it not be? With the quality performances of their products, everyone 
                sure does want to own an Apple product. 
              </p>

              <p>
                However, the craze of the Apple products is much less in India as compared to other countries. 
                Sometimes it is mainly because of the repairing issues. What if your MacBook needs some repair? 
                Will it be available anywhere near you? 
              </p>

            </div>
          </div>

          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
            <p className="text-gray-600 mb-5">
              Fill in your details and our repair team will contact you.
            </p>

            <ContactForm serviceName = "Macbook Service"/>
          </div>
        </div>
      </section>

      {/* Reliable Hands */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6 gap-5">
          <h1 className="text-xl font-bold pb-4">An Easy Solution for Your MacBook Repair</h1>
          <p className="space-y-5 text-gray-700 leading-7 text-lg pb-3">
            What if we told you, there is a solution to all these problems? You can now get your MacBook 
            repaired at a click! At GharFix, you can have solutions to all your problems, even fixing 
            a MacBook. GharFix employs only the best and experienced professionals. This ensures the 
            quality of your products and no guesswork when repairing the MacBook. 
          </p>
          <p className="space-y-5 text-gray-700 leading-7 text-lg pb-3">
            There are several cases where it so happens that while trying to fix the MacBook, people tend 
            to damage it even more, and sometimes it is beyond repair. But with GharFix, you can forget 
            those worries and rely on its trustable workforce. 
          </p>
          <p className="space-y-5 text-gray-700 leading-7 text-lg pb-3">
            We deliver exceptional repairing services for all Mac products including MacBook Air, 
            MacBook Pro, MacBook, iMac, and Mac Mini. We offer dependable, affordable repair and 
            replacement services to all Mac devices. Be it MacBook Air keyboard replacement or 
            MacBook screen repair, anything and everything is just a click away. 
          </p>
          <p className="space-y-5 text-gray-700 leading-7 text-lg pb-3">
            We have expertise in solving both hardware and software related problems of Apple Macbook 
            computers. Our experts resolve all the problems in your MacBook and fulfill your upgrade 
            and replacement needs efficiently. We have all the necessary accessories and parts to 
            perform quick fixes to facilitate the smooth and efficient functioning of Apple products. 
            We assist you in the best possible way with our high-quality repair, upgrade and replacement 
            services for your MacBook.
          </p>
          <h1 className="text-xl font-bold pt-6 pb-4">In Reliable Hands</h1>
          <p className="space-y-5 text-gray-700 leading-7 text-lg pb-3">
            We provide professional apple MacBook repairs and assistance in any area of operation 
            from reinstallation to upgrading, battery replacement, storage, network charging or 
            even audio issues. We will perform bench tests to diagnose your device problem. If 
            we can’t identify the issue from our exams on the bench, we can need a further exam 
            for your unit. We can clarify everything and you can make an educated decision after 
            we have diagnosed your Mac. We will let you know how long your repair takes and how 
            quickly we can get the real parts from Apple depending on the work we need. Don’t 
            worry, we are the experts of MacBook repair in Mumbai. 
          </p>

        </div>
      </section>

      {/* Quick Fixes */}
      <section id="quick-fixes" className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          GharFix Quick Fixes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {quickFixes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
            >
              <h3 className="text-lg font-bold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-7 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Services Offered by GharFix
          </h2>
          <p className="space-y-5 text-gray-700 leading-7 text-lg pb-5">
            GharFix can carry out a variety of MacBook repairing work including: –
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offeredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gray-200 text-black flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-7 text-lg">{service}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-10 leading-8 text-lg">
            Log in today to GharFix and find the best MacBook repair services near you with the best offers on services. 
          </p>
        </div>
      </section>
    </main>
  );
}