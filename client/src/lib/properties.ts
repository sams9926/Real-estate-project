export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  status: "For Sale" | "Sold";
  image: string;
  description: string;
  panoramaRooms: PanoramaRoom[];
}

export interface PanoramaRoom {
  id: string;
  name: string;
  panoramaUrl: string;
}

// Real luxury property images from Unsplash
export const properties: Property[] = [
  {
    id: "1",
    name: "Villa Serenità",
    location: "Malibu, California",
    price: "$24,500,000",
    bedrooms: 7,
    bathrooms: 9,
    sqft: "12,500",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    description: "An architectural masterpiece overlooking the Pacific Ocean with floor-to-ceiling windows and infinity pool.",
    panoramaRooms: [
      { id: "1-living", name: "Living Room", panoramaUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" },
      { id: "1-master", name: "Master Suite", panoramaUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" },
      { id: "1-kitchen", name: "Kitchen", panoramaUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" },
    ],
  },
  {
    id: "2",
    name: "Château Lumière",
    location: "Beverly Hills, California",
    price: "$45,000,000",
    bedrooms: 10,
    bathrooms: 14,
    sqft: "25,000",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    description: "A French-inspired estate with manicured gardens, wine cellar, and private cinema.",
    panoramaRooms: [
      { id: "2-living", name: "Grand Hall", panoramaUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80" },
      { id: "2-master", name: "Master Suite", panoramaUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80" },
      { id: "2-kitchen", name: "Gourmet Kitchen", panoramaUrl: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1920&q=80" },
    ],
  },
  {
    id: "3",
    name: "The Horizon Estate",
    location: "Aspen, Colorado",
    price: "$32,750,000",
    bedrooms: 8,
    bathrooms: 10,
    sqft: "18,000",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
    description: "Mountain retreat with ski-in access, heated outdoor spaces, and panoramic alpine views.",
    panoramaRooms: [
      { id: "3-living", name: "Great Room", panoramaUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80" },
      { id: "3-master", name: "Master Wing", panoramaUrl: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80" },
      { id: "3-kitchen", name: "Chef's Kitchen", panoramaUrl: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1920&q=80" },
    ],
  },
  {
    id: "4",
    name: "Palazzo del Mare",
    location: "Miami Beach, Florida",
    price: "$58,000,000",
    bedrooms: 12,
    bathrooms: 15,
    sqft: "32,000",
    status: "Sold",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    description: "Waterfront mega-mansion with private dock, helipad, and resort-style amenities.",
    panoramaRooms: [
      { id: "4-living", name: "Ocean Lounge", panoramaUrl: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=80" },
      { id: "4-master", name: "Owner's Suite", panoramaUrl: "https://images.unsplash.com/photo-1600566752547-33a32a8f8a6d?w=1920&q=80" },
      { id: "4-kitchen", name: "Entertainment Kitchen", panoramaUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80" },
    ],
  },
  {
    id: "5",
    name: "The Glass Pavilion",
    location: "Montecito, California",
    price: "$39,900,000",
    bedrooms: 6,
    bathrooms: 8,
    sqft: "15,000",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Ultra-modern glass architecture blending indoor-outdoor living with ocean vistas.",
    panoramaRooms: [
      { id: "5-living", name: "Sky Lounge", panoramaUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" },
      { id: "5-master", name: "Penthouse Suite", panoramaUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80" },
      { id: "5-kitchen", name: "Designer Kitchen", panoramaUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" },
    ],
  },
  {
    id: "6",
    name: "Belvedere Manor",
    location: "Greenwich, Connecticut",
    price: "$28,500,000",
    bedrooms: 9,
    bathrooms: 11,
    sqft: "20,000",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Historic Georgian estate with modern updates, tennis court, and guest house.",
    panoramaRooms: [
      { id: "6-living", name: "Drawing Room", panoramaUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80" },
      { id: "6-master", name: "Master Suite", panoramaUrl: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80" },
      { id: "6-kitchen", name: "Estate Kitchen", panoramaUrl: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1920&q=80" },
    ],
  },
];
