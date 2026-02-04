import { X } from "lucide-react";
import { Property } from "@/lib/properties";

interface SiteMapViewerProps {
  property: Property;
  onClose: () => void;
}

const SiteMapViewer = ({ property, onClose }: SiteMapViewerProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h2 className="text-xl font-serif font-bold text-foreground">{property.name}</h2>
            <p className="text-sm text-muted-foreground">Estate Site Plan</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Site Map SVG */}
        <div className="p-6 overflow-auto">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-auto"
            style={{ minHeight: "400px" }}
          >
            {/* Background */}
            <rect x="0" y="0" width="800" height="500" fill="hsl(0 0% 8%)" />
            
            {/* Property boundary */}
            <rect
              x="50"
              y="50"
              width="700"
              height="400"
              fill="none"
              stroke="hsl(43 55% 54% / 0.3)"
              strokeWidth="2"
              strokeDasharray="10 5"
            />

            {/* Main Residence */}
            <g>
              <rect
                x="200"
                y="150"
                width="300"
                height="180"
                fill="hsl(43 55% 54% / 0.2)"
                stroke="hsl(43 55% 54%)"
                strokeWidth="2"
              />
              <text x="350" y="245" textAnchor="middle" fill="hsl(43 20% 90%)" fontSize="14" fontFamily="Raleway">
                Main Residence
              </text>
              <text x="350" y="265" textAnchor="middle" fill="hsl(43 10% 60%)" fontSize="11" fontFamily="Raleway">
                {property.sqft} sqft
              </text>
            </g>

            {/* Pool */}
            <g>
              <rect
                x="550"
                y="200"
                width="120"
                height="80"
                rx="10"
                fill="hsl(200 70% 50% / 0.3)"
                stroke="hsl(200 70% 50%)"
                strokeWidth="2"
              />
              <text x="610" y="245" textAnchor="middle" fill="hsl(43 20% 90%)" fontSize="12" fontFamily="Raleway">
                Pool
              </text>
            </g>

            {/* Garden */}
            <g>
              <ellipse
                cx="130"
                cy="250"
                rx="60"
                ry="80"
                fill="hsl(120 40% 30% / 0.3)"
                stroke="hsl(120 40% 40%)"
                strokeWidth="2"
              />
              <text x="130" y="255" textAnchor="middle" fill="hsl(43 20% 90%)" fontSize="12" fontFamily="Raleway">
                Garden
              </text>
            </g>

            {/* Garage */}
            <g>
              <rect
                x="200"
                y="360"
                width="100"
                height="60"
                fill="hsl(0 0% 20% / 0.5)"
                stroke="hsl(0 0% 40%)"
                strokeWidth="2"
              />
              <text x="250" y="395" textAnchor="middle" fill="hsl(43 20% 90%)" fontSize="11" fontFamily="Raleway">
                Garage
              </text>
            </g>

            {/* Guest House */}
            <g>
              <rect
                x="550"
                y="320"
                width="100"
                height="80"
                fill="hsl(43 55% 54% / 0.15)"
                stroke="hsl(43 55% 54% / 0.6)"
                strokeWidth="2"
              />
              <text x="600" y="360" textAnchor="middle" fill="hsl(43 20% 90%)" fontSize="11" fontFamily="Raleway">
                Guest
              </text>
              <text x="600" y="375" textAnchor="middle" fill="hsl(43 20% 90%)" fontSize="11" fontFamily="Raleway">
                House
              </text>
            </g>

            {/* Driveway */}
            <g>
              <path
                d="M 250 420 L 250 480 L 400 480"
                fill="none"
                stroke="hsl(0 0% 35%)"
                strokeWidth="30"
                strokeLinecap="round"
              />
              <text x="320" y="470" textAnchor="middle" fill="hsl(43 20% 90%)" fontSize="10" fontFamily="Raleway">
                Driveway
              </text>
            </g>

            {/* Entrance */}
            <g>
              <circle cx="400" cy="480" r="8" fill="hsl(43 55% 54%)" />
              <text x="400" y="500" textAnchor="middle" fill="hsl(43 10% 60%)" fontSize="10" fontFamily="Raleway">
                Entrance
              </text>
            </g>

            {/* Compass */}
            <g transform="translate(720, 80)">
              <circle r="25" fill="none" stroke="hsl(43 55% 54% / 0.5)" strokeWidth="1" />
              <path d="M 0 -20 L 5 5 L 0 0 L -5 5 Z" fill="hsl(43 55% 54%)" />
              <text y="-30" textAnchor="middle" fill="hsl(43 55% 54%)" fontSize="12" fontFamily="Raleway" fontWeight="bold">
                N
              </text>
            </g>
          </svg>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary/20 border border-primary" />
              <span className="text-sm text-muted-foreground">Main Residence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[hsl(200_70%_50%_/_0.3)] border border-[hsl(200_70%_50%)]" />
              <span className="text-sm text-muted-foreground">Pool</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[hsl(120_40%_30%_/_0.3)] border border-[hsl(120_40%_40%)]" />
              <span className="text-sm text-muted-foreground">Garden</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[hsl(0_0%_20%_/_0.5)] border border-[hsl(0_0%_40%)]" />
              <span className="text-sm text-muted-foreground">Garage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMapViewer;
