import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

interface GalleryImage {
  id: number;
  category: "restaurant" | "barbershop" | "perfumes";
  url: string;
  alt: string;
}

const Gallery = () => {
  const [images] = useState<GalleryImage[]>([
    // Restaurant images (including both old and new images)
    {
      id: 1,
      category: "restaurant",
      url: "/lovable-uploads/50ec3f05-adf6-4898-b1ff-af96cbdd2693.png",
      alt: "Restaurant Booth Seating Area",
    },
    {
      id: 2,
      category: "restaurant",
      url: "/lovable-uploads/114bb11f-b243-4b83-a56f-d7c3c1a697f4.png",
      alt: "Restaurant Main Dining Area",
    },
    {
      id: 3,
      category: "restaurant",
      url: "/lovable-uploads/a887ebf3-f8dd-4bfe-a106-1d39d95c4fca.png",
      alt: "Restaurant Booth and Bar Area",
    },
    {
      id: 4,
      category: "restaurant",
      url: "/lovable-uploads/73fe2d00-a4e1-4f8b-a2a2-6cc18672976b.png",
      alt: "Restaurant Lounge Area with TV",
    },
    {
      id: 5,
      category: "restaurant",
      url: "/lovable-uploads/393a1c30-ce61-455e-a8b7-1dba7749b61d.png",
      alt: "Restaurant Interior with Blue Decor",
    },
    {
      id: 6,
      category: "restaurant",
      url: "/lovable-uploads/599ca1fa-efe5-4c32-b9f6-792121b33f69.png",
      alt: "Restaurant Interior with Red Seating",
    },
    {
      id: 7,
      category: "restaurant",
      url: "/lovable-uploads/a604402a-0fb2-47c7-8cc5-3092109063dd.png",
      alt: "Restaurant Lounge Area",
    },
    {
      id: 8,
      category: "restaurant",
      url: "/lovable-uploads/d872671b-d745-434f-a42b-b65834d1ed68.png",
      alt: "Restaurant Seating Area",
    },
    // Barbershop images
    {
      id: 9,
      category: "barbershop",
      url: "/lovable-uploads/9360b9e9-30e1-4319-8db0-968661e99207.png",
      alt: "Barbershop Interior",
    },
    {
      id: 10,
      category: "barbershop",
      url: "/lovable-uploads/c5fbfe29-4798-4b3f-8f4a-026e7de67497.png",
      alt: "Barbershop Products",
    },
    // Perfumes & Shisha images
    {
      id: 11,
      category: "perfumes",
      url: "/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png",
      alt: "Perfume Display",
    },
    {
      id: 12,
      category: "perfumes",
      url: "/lovable-uploads/ffad6fca-7d8f-47fc-9f1a-fd9afbc2885b.png",
      alt: "Shisha Collection",
    },
    {
      id: 13,
      category: "perfumes",
      url: "/lovable-uploads/ad681f73-a6fa-48ca-90ac-12c051f1ba0a.png",
      alt: "Shisha Display",
    },
  ]);

  const getImagesByCategory = (category: string) => {
    return images.filter((image) => image.category === category);
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white pt-24 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Our <span className="text-kamalo-red">Gallery</span>
      </h1>

      <Tabs defaultValue="restaurant" className="w-full">
        <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3">
          <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
          <TabsTrigger value="barbershop">Barbershop</TabsTrigger>
          <TabsTrigger value="perfumes">Perfumes & Shisha</TabsTrigger>
        </TabsList>

        <TabsContent value="restaurant">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {getImagesByCategory("restaurant").map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <ImageModal
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="barbershop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {getImagesByCategory("barbershop").map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <ImageModal
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="perfumes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {getImagesByCategory("perfumes").map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <ImageModal
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gallery;