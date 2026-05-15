"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/slide1.jpg", title: "Slide 1" },
  { src: "/slide2.jpeg", title: "Slide 2" },
  { src: "/slide3.jpg", title: "Slide 3" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
    </section>
  );
}