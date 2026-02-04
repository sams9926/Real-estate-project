import { properties, Property } from "@/lib/properties";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  onViewTour: (property: Property) => void;
  onViewMap: (property: Property) => void;
}

const PropertyGrid = ({ onViewTour, onViewMap }: PropertyGridProps) => {
  return (
    <section id="properties" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Exceptional Estates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each property in our collection represents the pinnacle of luxury living,
            carefully selected for its architectural distinction and prime location.
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rotate-45 border border-primary/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Property grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PropertyCard
                property={property}
                onViewTour={onViewTour}
                onViewMap={onViewMap}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
