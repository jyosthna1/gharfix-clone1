import Image from "next/image";

export default function ACServicePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">

      {/* IMAGE */}
      <div className="flex justify-center mb-8">
        <Image
          src="/images/amc-appliances.jpg"
          alt="Electrical Services | Gharfix"
          width={300}
          height={225}
          className="rounded-md"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">
        Why do you need Air Conditioner?
      </h1>

      {/* CONTENT */}
      <p className="mb-4 text-gray-700">
        In this modern changing world, Air Conditioners play an important role
        in our life. It has become a requirement for everyone — from middle
        class households to multinational corporate offices.
      </p>

      <p className="mb-4 text-gray-700">
        Air conditioning units maintain proper temperature and moisture levels
        while improving air quality by circulating filtered clean air. In hot
        temperatures, people become fatigued quickly, making air conditioners
        lifesavers against rising climatic temperatures.
      </p>

      <p className="mb-8 text-gray-700">
        At Gharfix.com we provide installation, servicing, and repair for all
        brands and types of AC systems including Split AC, Window AC,
        Ductless AC, VRF systems, and Air Handling Units (AHUs).
      </p>

      {/* SECTION */}
      <h2 className="text-2xl font-semibold mb-4">
        Why do you need Air Conditioning Service?
      </h2>

      <p className="mb-4 text-gray-700">
        Regular servicing is required to keep air conditioning units functioning
        properly. Filters and coils must be cleaned to prevent bacteria, dust,
        and pollutants that may cause asthma, breathlessness, and skin issues.
      </p>

      <p className="mb-8 text-gray-700">
        Our specialized technicians help maintain AC units in good condition,
        preventing major breakdowns and ensuring efficient cooling.
      </p>

      {/* AMC SECTION */}
      <h2 className="text-2xl font-semibold mb-4">
        Annual Maintenance Contract (AMC)
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
        <li>
          <strong>Regular Service AMC:</strong> Three AC services yearly with
          filter cleaning using powerful jet sprays.
        </li>
        <li>
          <strong>Exclusive Service AMC:</strong> Includes servicing plus spare
          parts replacement for better cooling performance.
        </li>
        <li>
          Customized AMC plans based on client requirements.
        </li>
      </ul>

      {/* FEATURES */}
      <h2 className="text-2xl font-semibold mb-4">Our Unique Features</h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
        <li>
          Installation, servicing, and repair for all AC brands including LG,
          Samsung, Daikin, Lloyd, and more.
        </li>
        <li>Highly experienced and customer-friendly technicians.</li>
        <li>Best industry pricing with professional service quality.</li>
      </ul>

      {/* FINAL PARAGRAPH */}
      <p className="text-gray-700">
        We provide round-the-clock service with a dedicated support team.
        Contact GharFix today for reliable AC installation, repair, and
        maintenance services at your doorstep.
      </p>

    </section>
  );
}