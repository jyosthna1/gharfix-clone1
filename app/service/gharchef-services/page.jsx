import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function GharChefPage() {
  const whyGharChef = [
    "Reliable and professional home chefs",
    "Experts in multi-cuisine cooking",
    "Customized meals based on your taste",
    "Affordable and flexible services",
  ];

  return (
    <main className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <p className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              GharChef Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Enjoy <span className="text-orange-600">Healthy Homemade Food</span> Without Effort
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Get professional chefs at home for daily cooking or special occasions.
              Eat fresh, hygienic, and customized meals while saving your time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Book a Chef
              </a>

              <a
                href="#services-overview"
                className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-4">
              <Image
                src="/images/chef.jpg"
                alt="GharChef"
                width={420}
                height={360}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Form */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About GharChef Services</h2>

            <div className="space-y-5 text-gray-700 leading-8 text-lg">
              <p>
                Food plays an important role in our lives, as they provide vitamins and minerals. Eating healthy and clean 
                food is very important. Homemade food is the most healthy food in Indian Cooking. When we prepare food at 
                home we can control the cleanliness, healthiness, and freshness of the food. Eating healthy food keeps us 
                look and feel healthier. It is an energy booster. Healthy food helps us to maintain weight and reduce stress. 
                With our modern changing times and the growing working population where a wife is also working along with 
                her husband to meet the financial status of a house. It is not advisable to depend upon the outside food 
                at all times as it could lead to health and digestion issues. Thus to enjoy home-cooked food we highly 
                recommend the Gharchef services from Gharfix.com. If you are looking for a chef to cook for a home party, 
                or to cook daily meals you just have to check for Gharchef services and your search ends here at Gharfix.com. 
                We are the service provider and provide you reliable, trustworthy, and professional chefs who are well 
                experienced in their professions. We understand your requirements analyze your needs and the food taste 
                that you are looking for. Giving you the best chef which meets your requirement fully. Thus you can enjoy 
                home-cooked and healthy food without disturbing your routine, your extracurricular activities. You can spend 
                more time with your family, giving more attention to your kids, doing office work without any disturbance, 
                attend meetings without worrying about cooking.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            id="contact-form"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Booking</h3>

            <p className="text-gray-600 mb-5">
              Fill this form and we will contact you.
            </p>

            <ContactForm serviceName = "Chef Service"/>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services-overview" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-4">
            Our Cooking Services
          </h2>

          <p className="space-y-5 text-l text-gray-600 leading-8 max-w-7xl mx-auto mb-10 text-lg">
            Our cook maintains personal hygiene and wears masks when they come for services. They also sanitize their hands 
            before starting to do the food preparation. They are experts in cooking Maharashtrian food, North Indian, Punjabi, 
            South Indian dishes, Chinese, etc. If you are health conscious or like to eat less spicy food, less oily food you 
            have come to the right place. Our chef customizes the menu for you and prepares the food the way you want, healthy 
            and tasty. GharChefs cook the best food using good ingredients and with love and a positive mindset. We would 
            recommend that you let the chef know how to do you like your food, any food allergies that anyone might have 
            due to any food ingredients. With your guidance, you can explain your cooking method to the cook. Thus making 
            the Cook comfortable and adjust the surroundings giving the best results. You can explain to them the use of 
            a Convection Microwave for heating the food.  Cooking food at home gives you choose what you want to eat and 
            how you want it in terms of texture, spices used, oil. People love eating steamed rice and dal tadka, especially 
            for children.  Nowadays people prefer food cooked in very little quantity of oil. Health-conscious people look 
            forward to eating boil food like steamed vegetables, salads, fruits, soups. This is possible with the help of a 
            home cook who prepares the food according to your taste and instructions. Thus you can have healthy homemade food 
            without disturbing your commitments. Our Gharchef cooks have experience in making vegetarian and non-vegetarian 
            cuisines. Be it Chicken dishes or mutton dishes, or just boiled chicken for health-conscious people.
          </p>
          <p className="space-y-5 text-l text-gray-600 leading-8 max-w-7xl mx-auto mb-10 text-lg">
            If you have a home party or function and need cooks for cooking food for a larger crowd, do not worry contact us 
            at Gharchef services and we will provide you cook of your choice, reliable and trustworthy. Our chef has experience 
            of cooking food for parties also i.e. to cook food in larger quantity. You can customize the menu and the chef 
            will help you to execute the menu at the comfort of your home, so you are relaxed that the food you are serving 
            your guest is fresh and prepared under hygienic conditions and healthy. They can make vegetarian Biryanis and 
            non-vegetarian biryanis like Chicken, Mutton. They are also specialized in making Fish curries, seafood for 
            Non-vegetarian food lovers.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why GharChef?
          </h2>
          <ul className="space-y-3 text-l text-gray-600 leading-8 max-w-7xl mx-auto text-lg list-disc pl-5">
            <li>
              We are the service provider for the best cooks who are reliable and trustworthy.
            </li>
            <li>
                Expert in cooking multi cuisines like North Indian, Maharashtrian, Punjabi, South Indian, Chinese dishes.
            </li>
            <li>
              Gharchef cooks are specialized in making Nonvegetarian food like Chicken and Mutton dishes. They also are 
              experts in making seafood dishes. You can guide them and share kitchen tips and also share your cooking 
              recipes as per your taste or the food that you love.
            </li>
            <li>
              We provide Gharchef services at affordable industry rates.
            </li>
          </ul>
          <p className="text-red-400 text-xl font-bold text-center pt-6">
              At Gharfix.com we believe in customer satisfaction and building long-term business relationships.
            </p>
        </div>
      </section>

    </main>
  );
}