"use client"
import { useState, useEffect } from "react"
import ServicesSection from "./components/ServicesSection"
import HeroSlider from "./components/HeroSlider"
import Image from "next/image"

export default function Home() {

  const [current,setCurrent]=useState(0)

  const scrollDown = () => {
  document.getElementById("services")?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
    <div className="w-full">

      {/* SLIDER */}
      <div className="relative w-full h-[350px] overflow-hidden">
        <HeroSlider/>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">

          <h1 className="text-5xl font-bold mb-4">
            GHARFIX
          </h1>
         <p className="text-xl mb-4">Solution To Your Needs</p>

        </div>

        {/* DOWN ARROW */}
        <button
  onClick={scrollDown}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center animate-bounce">
    <svg
      className="w-8 h-8 text-black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round"/>
    </svg>
  </div>
</button>

      </div>


      {/* NEXT SECTION */}
      <section id="services" className="m-10">
        <ServicesSection/>
      </section>

    </div>
  )
}