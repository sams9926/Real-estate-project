import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { X, RotateCcw, ZoomIn, ZoomOut, Loader2 } from "lucide-react";
import { Property, PanoramaRoom } from "@/lib/properties";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PanoramaSphereProps {
  imageUrl: string;
  onLoad: () => void;
}

const PanoramaSphere = ({ imageUrl, onLoad }: PanoramaSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scene } = useThree();
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      imageUrl,
      (loadedTexture) => {
        loadedTexture.mapping = THREE.EquirectangularReflectionMapping;
        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        setTexture(loadedTexture);
        onLoad();
      },
      undefined,
      (error) => {
        console.error("Error loading panorama:", error);
        onLoad();
      }
    );
  }, [imageUrl, onLoad]);

  useFrame(() => {
    if (meshRef.current) {
      // Subtle auto-rotation when not interacting
    }
  });

  if (!texture) return null;

  return (
    <mesh ref={meshRef} scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

interface PanoramaViewerProps {
  property: Property;
  onClose: () => void;
}

const PanoramaViewer = ({ property, onClose }: PanoramaViewerProps) => {
  const [activeRoom, setActiveRoom] = useState<PanoramaRoom>(property.panoramaRooms[0]);
  const [isLoading, setIsLoading] = useState(true);
  const controlsRef = useRef<any>(null);

  const handleRoomChange = (roomId: string) => {
    const room = property.panoramaRooms.find((r) => r.id === roomId);
    if (room) {
      setIsLoading(true);
      setActiveRoom(room);
    }
  };

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const handleZoom = (direction: "in" | "out") => {
    if (controlsRef.current) {
      const currentDistance = controlsRef.current.getDistance();
      const newDistance = direction === "in" 
        ? Math.max(50, currentDistance - 50) 
        : Math.min(200, currentDistance + 50);
      controlsRef.current.dollyTo(newDistance, true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
          <div>
            <h2 className="text-xl font-serif font-bold text-foreground">{property.name}</h2>
            <p className="text-sm text-muted-foreground">{property.location}</p>
          </div>
          
          {/* Room tabs */}
          <Tabs value={activeRoom.id} onValueChange={handleRoomChange} className="hidden sm:block">
            <TabsList className="bg-secondary">
              {property.panoramaRooms.map((room) => (
                <TabsTrigger 
                  key={room.id} 
                  value={room.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {room.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile room selector */}
        <div className="sm:hidden px-4 pb-4">
          <Tabs value={activeRoom.id} onValueChange={handleRoomChange}>
            <TabsList className="bg-secondary w-full">
              {property.panoramaRooms.map((room) => (
                <TabsTrigger 
                  key={room.id} 
                  value={room.id}
                  className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs"
                >
                  {room.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/80">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p className="text-muted-foreground">Loading panorama...</p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 0.1], fov: 75 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <PanoramaSphere 
            imageUrl={activeRoom.panoramaUrl} 
            onLoad={() => setIsLoading(false)} 
          />
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.1}
            rotateSpeed={-0.5}
            minDistance={50}
            maxDistance={200}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-md rounded-full px-4 py-2 border border-border">
        <button
          onClick={() => handleZoom("in")}
          className="p-2 hover:bg-secondary rounded-full transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleZoom("out")}
          className="p-2 hover:bg-secondary rounded-full transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-border" />
        <button
          onClick={resetView}
          className="p-2 hover:bg-secondary rounded-full transition-colors"
          aria-label="Reset view"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 right-8 z-10 text-sm text-muted-foreground bg-background/60 backdrop-blur-sm px-4 py-2 rounded hidden lg:block">
        <p>Drag to look around • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default PanoramaViewer;
