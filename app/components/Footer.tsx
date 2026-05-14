import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#303030] text-gray-300 border-t-4 border-blue-500 mt-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5">

        {/* CONTACT US */}
        <div className="md:border-l md:border-r md:border-gray-500 md:pb-40">
          <div className="px-6 py-8 text-center md:text-left">
          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Us
          </h3>

          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <a
          href="https://api.whatsapp.com/send?phone=917506855407"
          target="_blank"
          className="flex items"
        ><span className="text-blue-400 cursor-pointer">
              [Click2Chat]
            </span>
            </a>
          </div>

          <p className="mb-3">
            Call : +91 7506855407
          </p>

          <p>
            Email Us :
            <span className="text-blue-400 ml-1 cursor-pointer">
              [ClickHere]
            </span>
          </p>
        </div>
        </div>

        {/* SERVING CITIES */}
        <div className="md:border-r md:border-gray-500 md:pb-20">
          <div className="px-6 py-8 text-center md:text-left">
          <h3 className="text-white text-xl font-semibold mb-6">
            Serving Cities
          </h3>

          <ul className="space-y-2 md:list-disc list-inside text-lg">
            <li>Mumbai</li>
            <li>Navi Mumbai</li>
            <li>Lucknow (New)</li>
            <li>Bangalore</li>
            <li>Chennai</li>
            <li>Delhi</li>
            <li>Hyderabad</li>
          </ul>
        </div>
        </div>

        {/* TRENDING SERVICES */}
        <div className="md:border-r md:border-gray-500">
          <div className="px-6 py-8 text-center md:text-left">
          <h3 className="text-white text-xl font-semibold mb-6">
            Trending Services
          </h3>

          <ul className="space-y-2 md:list-disc list-inside text-lg">
             <li>Mobile Tailoring</li>
            <li>Apple Macbook Repair</li>
            <li>Water Tank Cleaning</li>
            <li>Housekeeping</li>
            <li>Electrical</li>
            <li>Home</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        </div>
        {/* LOGO + SOCIAL */}
        <div className="bg-[#111] text-center md:text-center">
          <div className="mb-4">
            {/* Replace with your logo */}
            <img src="/images/cropped-Ghar-Fix-Logo_PNG-1.png" className="h-16 mx-auto mt-8 "/>
          </div>

          <p className="mb-5">© 2026 Gharfix.</p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-center text-xl mb-20">
            <a href="https://www.facebook.com/gharfixmumbai20/" target="_blank">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" size={30} />
            </a>
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" size={30}/>
            <a href="https://www.instagram.com/gharfix_mumbai_/" target="_blank">
            <FaInstagram className="hover:text-orange-500 cursor-pointer" size={30}/>
            </a>
            <a href="https://www.youtube.com/watch?v=KeqEdfI68S8" target="_blank">
            <FaYoutube className="hover:text-orange-500 cursor-pointer" size={30}/>
            </a>
          </div>

          {/* AI Chat Button */}
          
        </div>
        <div className="hidden md:block mx-auto">
        <button className="mb-10 mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg">
            💬 AI Chat
          </button>
          </div>
      </div>
    </footer>
  );
}