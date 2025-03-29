
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const PhotoGallery: React.FC = () => {
  // Real photos of Ereyigabubari
  const photos = [
    {
      id: 1,
      url: "/lovable-uploads/88bcda8b-7c26-489d-9d4a-5759fda97d7a.png",
      caption: "All the great moments we've shared"
    },
    {
      id: 2,
      url: "/lovable-uploads/198e2ce5-1370-4321-ac0b-ffdd1bbc8a75.png",
      caption: "From secondary school to university"
    },
    {
      id: 3,
      url: "/lovable-uploads/de334417-84cf-487e-9079-4d2a441d7a0b.png",
      caption: "Celebrating your special day!"
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-dancing font-bold text-center mb-12 text-birthday-blue">
          Memories Together
        </h2>
        
        <div className="md:hidden">
          <Carousel className="w-full max-w-lg mx-auto">
            <CarouselContent>
              {photos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <Card className="overflow-hidden shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative h-80 w-full">
                        <img 
                          src={photo.url} 
                          alt={`Ereyigabubari photo ${photo.id}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-center font-montserrat text-gray-700">{photo.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-80 w-full">
                  <img 
                    src={photo.url} 
                    alt={`Ereyigabubari photo ${photo.id}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-center font-montserrat text-gray-700">{photo.caption}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
