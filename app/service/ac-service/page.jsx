import Image from "next/image";

export default function PlumbingHero() {
  return (
    <section className="relative h-[420px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/plumbing-banner.jpg"
        alt="Plumbing Services"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
          <div>
            <Image
              src="/images/logo.png"
              alt="GharFix Logo"
              width={90}
              height={90}
            />
          </div>

          <nav className="hidden md:flex items-center gap-10 text-white uppercase tracking-[4px] text-sm">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Click</a>
            <a href="#">Mobile Repair</a>
            <a href="#">Registration</a>
            <a href="#">Job</a>
            <a href="#">Blog</a>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div>
          <h1 className="text-white text-5xl md:text-7xl font-light uppercase">
            Plumbing Services
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl">
            Comprehensive Plumbing Solutions Tailored to Your Needs
          </p>
        </div>
      </div>

      {/* Bottom Slanted White Shape */}
      <div
  className="absolute bottom-0 left-0 w-full h-[120px] bg-white/80"
  style={{
    clipPath: "polygon(0 35%, 100% 100%, 100% 100%, 0 100%)",
  }}
/>
<div
  className="absolute bottom-0 left-0 w-full h-[160px] bg-white"
  style={{
    clipPath: "polygon(0 0, 100% 75%, 100% 100%, 0 100%)",
  }}
/>
    </section>
  );
}