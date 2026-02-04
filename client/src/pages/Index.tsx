import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertyGrid from "@/components/PropertyGrid";
import PanoramaViewer from "@/components/PanoramaViewer";
import SiteMapViewer from "@/components/SiteMapViewer";
import EstateFinder from "@/components/EstateFinder";
import Footer from "@/components/Footer";
import { Property } from "@/lib/properties";

const Index = () => {
  const [selectedPropertyForTour, setSelectedPropertyForTour] = useState<Property | null>(null);
  const [selectedPropertyForMap, setSelectedPropertyForMap] = useState<Property | null>(null);
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  const handleViewTour = (property: Property) => {
    setSelectedPropertyForTour(property);
  };

  const handleViewMap = (property: Property) => {
    setSelectedPropertyForMap(property);
  };

  const handleCloseTour = () => {
    setSelectedPropertyForTour(null);
  };

  const handleCloseMap = () => {
    setSelectedPropertyForMap(null);
  };

  const handleSelectFromFinder = (property: Property) => {
    setIsFinderOpen(false);
    // Scroll to properties section
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Property Listings */}
      <PropertyGrid onViewTour={handleViewTour} onViewMap={handleViewMap} />

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">About Us</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8">
            Defining Luxury Living
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            For over two decades, AURUM Estates has been the premier destination for 
            discerning individuals seeking the world's most exceptional properties. 
            Our curated collection represents the pinnacle of architectural achievement, 
            from historic estates to cutting-edge contemporary masterpieces.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each property is selected not merely for its physical attributes, 
            but for its ability to provide a lifestyle of unparalleled distinction.
          </p>
          
          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rotate-45 border border-primary/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Estate Finder Sidebar */}
      <EstateFinder
        isOpen={isFinderOpen}
        onToggle={() => setIsFinderOpen(!isFinderOpen)}
        onSelectProperty={handleSelectFromFinder}
      />

      {/* 360° Panorama Viewer Modal */}
      {selectedPropertyForTour && (
        <PanoramaViewer
          property={selectedPropertyForTour}
          onClose={handleCloseTour}
        />
      )}

      {/* Site Map Viewer Modal */}
      {selectedPropertyForMap && (
        <SiteMapViewer
          property={selectedPropertyForMap}
          onClose={handleCloseMap}
        />
      )}
    </div>
  );
};

export default Index;
