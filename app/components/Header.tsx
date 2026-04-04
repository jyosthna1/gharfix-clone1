"use client"

import { useState } from "react"
import Link from "next/link"
import { Poppins } from "next/font/google";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { Menu ,X, } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});



const servicesDropDownList = [
  { name: "TAILORING SERVICES", link: "/service/tailor-service" },
  { name: "MASSAGE SERVICES MUMBAI", link: "/service/massage-services" },
  { name: "NRI SERVICES MUMBAI", link: "/plumbing" },
  { name: "BAZAR-SERVICES", link: "/plumbing" },
  { name: "PLUMBING SERVICES", link: "/plumbing" },
  { name: "FINANCING SERVICES", link: "/plumbing" },
  { name: "BEST MACBOOK REPAIR SERVICES", link: "/plumbing" },
  { name: "BEST ELDERLY CARE SERVICES", link: "/plumbing" },
  { name: "GHAR CHEF SERVICES", link: "/plumbing" },
  { name: "BRIDAL MAKE-UP AND BRIDAL MEHNDI", link: "/plumbing" },
  { name: "DIGITAL SIGNAGE BANNER SERVICES", link: "/plumbing" },
  { name: "SALON AND SPA SERVICES AT YOUR DOORSTEP", link: "/plumbing" },
  { name: "RO SERVICE AND REPAIR", link: "/plumbing" },
  { name: "RITUALS ONLINE", link: "/plumbing" },
  { name: "CAR SERVICING AND REPAIR", link: "/plumbing" },
  { name: "WATER TANK CLEANING SERVICES", link: "/plumbing" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuView, setMenuView] = useState("main")

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
        <header className="sticky top-0 bg-white shadow-md z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-black-500 text-l p-2">

            <a href="/"><img src="/images/cropped-Ghar-Fix-Logo_PNG-1.png" className="h-16"/></a>

            <nav className="hidden md:flex gap-6">

              <a href="/">HOME</a>

              {/* Dropdown large devices*/}
        <div className="relative inline-block group">
          <button className="text-l cursor-pointer">
            SERVICES
          </button>

          {/* Dropdown Menu */}
          <div className="absolute w-44 left-0 mt-2 opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200 bg-black text-xs text-white">
            {servicesDropDownList.map((service, index) => (
      <a
        key={index}
        href={service.link}
        className="block px-4 py-2 hover:bg-blue-500 transition-colors"
      >
        {service.name}
      </a>
    ))}
          </div>
        </div>
              <a
          href="https://api.whatsapp.com/send?phone=917506855407"
          target="_blank"
          className="flex items"
        >
          <Image
              src="/whatsapp-phone-icon.png"
              alt="whatsapp"
              width={26}
              height={26}
            />CLICK
            </a>

              <a href="/mobile-repair">MOBILE REPAIR</a>

              <a href="/registration">REGISTRATION</a>

              <a href="/job">JOB</a>

              <a href="/blog">BLOG</a>

            </nav>

            {/* small devices */}

            <button className="md:hidden mr-8" onClick={toggleMenu}>
              <Menu size={28} strokeWidth={3}/>
            </button>
            <div
            className={`md:hidden fixed inset-4 bg-[#414040] text-white rounded-xl z-50
            transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "-translate-x-[110%]"}`}
          >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => {
              setMenuOpen(false)
              setMenuView("main")
            }}
          >
            <X size={30} />
          </button>
        </div>

        {/* Menu Items */}
        
        <nav className="flex flex-col items-start text-left gap-8 pl-10 text-lg font-semibold">
          {menuView === "main" && (
            <>
              <a href="/">• HOME</a>

              <button onClick={() => setMenuView("services")}>
                › SERVICES
              </button>

              <a href="#">• MOBILE REPAIR</a>
              <a href="#">• REGISTRATION</a>
              <a href="#">• JOB</a>
              <a href="#">• BLOG</a>
            </>
          )}

        </nav>
        {menuView === "services" && (
  <div className="pl-10 pr-6">

    {/* Header */}
          <div className="relative flex items-center mb-6">

        {/* Back button (left) */}
        <button onClick={() => setMenuView("main")}>
          ←
        </button>

        {/* Centered title */}
        <h2 className="absolute left-1/2 -translate-x-1/2 font-bold">
          SERVICES
        </h2>

      </div>

    {/* ✅ Scrollable Services List */}
      <ul className="list-disc pl-5 space-y-3 max-h-[60vh] overflow-y-auto space-y-4 text-sm pr-2 scrollbar-thin">
        {servicesDropDownList.map((service, index) => (
          <li key={index}>
            <a
              href={service.link}
              className="block px-4 py-2 hover:bg-blue-500 transition-colors"
            >
              {service.name}
            </a>
          </li>
        ))}
      </ul>
        </div>
      )}
      </div>
          </div>
        </header>
  )
}