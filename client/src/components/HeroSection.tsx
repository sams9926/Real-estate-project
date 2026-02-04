import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProperties = () => {
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8 opacity-0 animate-fade-in-up">
          <span className="text-primary text-lg tracking-[0.3em] font-light uppercase">
            Exceptional Properties
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 opacity-0 animate-fade-in-up delay-200">
          <span className="text-gold-gradient">AURUM</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-4 opacity-0 animate-fade-in-up delay-300">
          Estates
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-400">
          Discover extraordinary residences where luxury meets legacy. 
          Curated collection of the world's most distinguished properties.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-500">
          <button 
            onClick={scrollToProperties}
            className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            View Collection
          </button>
          <button className="px-8 py-4 border border-primary/50 text-foreground font-medium tracking-wide hover:bg-primary/10 hover:border-primary transition-all duration-300">
            Private Consultation
          </button>
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-600">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-2 h-2 rotate-45 border border-primary/50" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToProperties}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/70 hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll to properties"
      >
        <ChevronDown className="w-8 h-8 animate-scroll-bounce" />
      </button>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
};

export default HeroSection;
