
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PhotoGallery: React.FC = () => {
  // Placeholder images - you can replace these with actual photos of your friend
  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      caption: "All the great moments we've shared"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      caption: "From secondary school to university"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      caption: "Celebrating your special day!"
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-dancing font-bold text-center mb-12 text-birthday-blue">
          Memories Together
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <img 
                  src={photo.url} 
                  alt={`Photo ${photo.id}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-center font-montserrat text-gray-700">{photo.caption}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center mt-8 text-gray-500 italic">
          * Replace these with actual photos of Ereyigabubari for the actual gift
        </p>
      </div>
    </div>
  );
};

export default PhotoGallery;
