import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function DigitalSignagePage() {

  const extraServices = [
    "Glow Sign Board",
    "Neon Sign Board",
    "LED Sign Board",
    "Signage Maker",
    "Roof Top Sign Boards",
    "CNC Router Fabrication",
    "Laser Fabrication",
    "Backlit 3D Pan Face Graphics",
    "Thermoformed 3D Graphics",
    "3D Graphics with Cold Cathode Lighting",
    "Aluminum Panel Base with 3D Graphics",
    "ALUGOLD & ALUSILVER Backlit Backwash",
    "3D Prismatic Stainless Steel Letters",
    "3D Silhouette Effects",
    "3D Neon Animated Signs",
    "Smart Trim Multipurpose Graphics",
    "Architectural Cove Lighting",
    "Totems / Monoliths / Pylons / Pole Signs",
    "LED Directional Signs",
    "Floor Directories / Mall Directories",
    "Fire Exit / Safety / Water Signs",
    "Building Façade Signage",
    "Customized Stainless Steel Signage  fabrication",
    "All types of Customized Stainless Steel Fabrications",
    "Customized Composite Panel Signage Fabrication",
    "High-quality Inkjet Digitally Printed Graphics on Poster/Vinyl / Translate",
    "Reflective Graphics on S.S. Plates",
    "Hotel Signage for Internal & External",
  ];

  const whyChoose = [
    "One-stop solution for digital display needs",
    "Custom solutions based on customer requirements",
    "Advanced software for monitoring and reports",
    "High-clarity LCD and LED digital displays",
    "Easy content updates with advanced technology",
    "Customer-focused service with long-term business relations",
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Digital Signage Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Modern <span className="text-cyan-600">Digital Display Solutions</span>
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Powerful digital signage services for advertising, branding,
              information display, and content management across public and
              commercial spaces.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/gharfix.jpeg"
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
            <h2 className="text-3xl font-bold mb-6">
              About Digital Signage Solutions
            </h2>

            <div className="space-y-5 text-gray-500 leading-8 text-lg">
              <p>
                At Gharfix.com if you are looking for digital display solutions, your search has ended here. At Gharfix.com, 
                we are the pioneer in providing Digital Signage banner services in India. The in-depth knowledge of our experts 
                and team help us In offering our clients the best quality of digital signage services. Our domain expertise 
                offers customizable solutions to clients. We serve complete digital signage solutions from displaying the 
                banner to managing the content to be displayed. We monitor the proper functioning of the Digital signage 
                banner. We use advanced software to monitor and generate reports. Our experts closely work with the client 
                to understand their needs and fulfill their requirements. Digital Signage technology uses displays using 
                technology like LCD, LED. These can be seen displaying videos, digital images, web pages, on big digital 
                boards in public places. It can be seen outside the theatre halls, in restaurants displaying the offers, 
                Outside corporate offices, Stadiums displaying advertisements. Digital Signage banners are modern ways 
                of marketing and outdoor advertising. They are used as a network of electronic displays that are 
                centrally managed and individually addressable for the display of text, animated or video messages for 
                advertising, information, entertainment, and merchandising to targeted audiences. We help create the 
                digital menu boards which can be seen in restaurants displaying the offers, specialty of the day offers etc.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>

            <ContactForm serviceName = "Digital Signage Banner Service"/>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Why Digital Solutions Matter
            </h2>
            <p className="text-gray-700 leading-8 text-lg">
              In modern advertising, digital display solutions help connect
              with audiences, increase product reach, and attract attention
              through clear, dynamic, and easily changeable content.
            </p>
          </div>

          <div className="bg-cyan-600 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Gharfix Advantage
            </h2>
            <p className="leading-8 text-cyan-50 text-lg">
              We understand customer requirements, develop customized content
              solutions, and deliver dependable signage support with advanced
              technology at cost-effective rates.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Gharfix?
          </h2>
          <p className="space-y-5 text-gray-500 leading-8 pb-7 text-lg">
            In modern times where advertisement plays a very important role in connecting with the crowd, to increase the product 
            reach to the customers, Digital Solution plays a very important role. Our domain experts value our customer’s needs 
            and understand their requirements and work closely to achieve the goals. We believe in a one-stop solution for all 
            our customer needs for digital solutions. We value our customers and believe in customer satisfaction and building 
            long-term business relations. With our excellent team, we have established our self successfully across the country. 
            We give you digital solutions in LCD and LED displays as per your requirement. Digital banners have great clarity 
            and digital advertisement attracts the attention of more people. Thus reaching the goal of Digital Advertisement. 
            Digital Solutions helps us to format the content to be displayed. Once the content is developed we schedule it 
            and then transfer it to the client-server and then play it on the digital displays. LED displays are the best 
            mode of advertisement and give very good picture clarity thus grabbing the attention of onlookers. We can add 
            new content or change the content easily with help of our high-end technology. Thus giving us more options for 
            a better experience at cost-effective rates. We have been catering to the needs of many clients across the country, 
            so look no further than contact us for all your digital signage display needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border flex gap-4"
              >
                <div className="w-10 h-10 bg-cyan-100 text-cyan-700 flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Additional Signage Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraServices.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm border"
              >
                <h3 className="font-medium text-gray-800 text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}