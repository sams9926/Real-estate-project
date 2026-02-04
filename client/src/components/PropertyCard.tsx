import { useState } from "react";
import { Bed, Bath, Square, Eye, Map } from "lucide-react";
import { Property } from "@/lib/properties";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: Property;
  onViewTour: (property: Property) => void;
  onViewMap: (property: Property) => void;
}

const PropertyCard = ({ property, onViewTour, onViewMap }: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="card-luxury rounded-lg group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        
        <img
          src={property.image}
          alt={property.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

        {/* Status badge */}
        <Badge
          className={`absolute top-4 left-4 ${
            property.status === "Sold"
              ? "bg-destructive/90 text-destructive-foreground"
              : "bg-primary/90 text-primary-foreground"
          } border-0`}
        >
          {property.status}
        </Badge>

        {/* Hover overlay with actions */}
        <div
          className={`absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewTour(property);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">360° Tour</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewMap(property);
            }}
            className="flex items-center gap-2 px-4 py-2 border border-primary text-foreground rounded hover:bg-primary/10 transition-colors"
          >
            <Map className="w-4 h-4" />
            <span className="text-sm font-medium">Site Map</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <p className="text-2xl font-serif font-bold text-primary mb-2">
          {property.price}
        </p>

        {/* Name and location */}
        <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
          {property.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{property.location}</p>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
