"use client";

import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const servicesDropDownList = [
  { name: "TAILORING SERVICES", link: "/service/best-tailoring-services-in-mumbai" },
  { name: "MASSAGE SERVICES MUMBAI", link: "/service/massage-services" },
  { name: "NRI SERVICES MUMBAI", link: "/service/nri-service-mumbai" },
  { name: "BAZAR-SERVICES", link: "/service/bazaar-services" },
  { name: "PLUMBING SERVICES", link: "/service/plumbing-services" },
  { name: "FINANCING SERVICES", link: "/service/financing-services" },
  { name: "BEST MACBOOK REPAIR SERVICES", link: "/service/macbook-service" },
  { name: "BEST ELDERLY CARE SERVICES", link: "/service/elderly-care-services" },
  { name: "GHAR CHEF SERVICES", link: "/service/gharchef-services" },
  { name: "BRIDAL MAKE-UP AND BRIDAL MEHNDI", link: "/service/bridal-makeup" },
  { name: "DIGITAL SIGNAGE BANNER SERVICES", link: "/service/digital-signag" },
  { name: "SALON AND SPA SERVICES AT YOUR DOORSTEP", link: "/service/salon-spa-services" },
  { name: "RO SERVICE AND REPAIR", link: "/service/ro-service-repair" },
  { name: "RITUALS ONLINE", link: "/service/ritual-services" },
  { name: "CAR SERVICING AND REPAIR", link: "/service/car-services" },
  { name: "WATER TANK CLEANING SERVICES", link: "/service/water-tank-cleaning-services" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuView, setMenuView] = useState("main");
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setMenuView("main");
  },[pathname]);

  return (
    <header className="sticky top-0 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/cropped-Ghar-Fix-Logo_PNG-1.png"
            alt="GharFix Logo"
            width={160}
            height={64}
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-lg">

          <Link href="/" className="tracking-widest">HOME</Link>

          {/* SERVICES DROPDOWN */}
          <div className="relative inline-block group">
            <button className="cursor-pointer tracking-widest">
              SERVICES
            </button>

            <div
              className="absolute w-56 left-0 mt-2 opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200 bg-black text-xs text-white"
            >
              {servicesDropDownList.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="block px-4 py-2 hover:bg-blue-500"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=917506855407"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Image
              src="/whatsapp-phone-icon.png"
              alt="whatsapp"
              width={26}
              height={26}
            />
            CLICK
          </a>

          <Link href="/mobile-repair" className="tracking-widest">MOBILE REPAIR</Link>
          <Link href="/registration" className="tracking-widest">REGISTRATION</Link>
          <Link href="/job" className="tracking-widest">JOB</Link>
          <Link href="/blog" className="tracking-widest">BLOG</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden mr-4"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} strokeWidth={3} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-4 bg-[#414040] text-white rounded-xl z-50
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-[110%]"}`}
        >
          {/* Close */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => {
                setMenuOpen(false);
                setMenuView("main");
              }}
            >
              <X size={30} />
            </button>
          </div>

          {/* MAIN MENU */}
          {menuView === "main" && (
            <nav className="flex flex-col gap-8 pl-10 text-lg font-semibold">
              <Link href="/">• HOME</Link>

              <button className="text-left" 
                onClick={() => {
                  setMenuView("services");
                  }}>
                › SERVICES
              </button>

              <Link href="/mobile-repair">• MOBILE REPAIR</Link>
              <Link href="/registration">• REGISTRATION</Link>
              <Link href="/job">• JOB</Link>
              <Link href="/blog">• BLOG</Link>
            </nav>
          )}

          {/* SERVICES MENU */}
          {menuView === "services" && (
            <div className="pl-10 pr-6">
              <div className="relative flex items-center mb-6">
                <button onClick={() => setMenuView("main")}>←</button>

                <h2 className="absolute left-1/2 -translate-x-1/2 font-bold">
                  SERVICES
                </h2>
              </div>

              <ul className="list-disc pl-5 max-h-[60vh] overflow-y-auto space-y-4 text-sm">
                {servicesDropDownList.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.link}
                      className="block px-4 py-2 hover:bg-blue-500"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}