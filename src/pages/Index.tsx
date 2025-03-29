
import React from 'react';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/PhotoGallery';
import FriendshipMessage from '@/components/FriendshipMessage';
import BirthdayConfetti from '@/components/BirthdayConfetti';
import BirthdayWishesForm from '@/components/BirthdayWishesForm';
import { Button } from '@/components/ui/button';

const Index = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-white">
      <BirthdayConfetti />
      
      <Hero />
      
      <div className="py-8 px-4 bg-gradient-to-r from-birthday-blue/20 to-birthday-coral/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-dancing font-bold mb-4 text-gray-800">
            Celebrating Your Special Day!
          </h2>
          <p className="font-montserrat text-xl text-gray-700 max-w-3xl mx-auto">
            Today marks another beautiful chapter in your life's journey. 
            May your birthday be as wonderful and extraordinary as you are!
          </p>
        </div>
      </div>
      
      <PhotoGallery />
      
      <FriendshipMessage />
      
      <div className="py-10 px-4 bg-birthday-blue text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-dancing font-bold mb-6">
              Wishing You A Happy Birthday
            </h2>
            <p className="font-montserrat text-xl mb-8">
              May your day be filled with joy, laughter, and all the things that make you happy!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
              <Button 
                className="bg-white text-birthday-blue hover:bg-birthday-gold hover:text-white text-lg py-6 px-8"
                onClick={() => alert("Happy Birthday Ereyigabubari! 🎉🎂🎁")}
              >
                Send Quick Birthday Wishes
              </Button>
              <p className="mt-4 text-sm opacity-80">Click for a quick celebration!</p>
            </div>
            
            <BirthdayWishesForm />
          </div>
        </div>
      </div>
      
      <footer className="py-6 bg-gray-100 text-center text-gray-600 font-montserrat">
        <p>Made with ❤️ for Ereyigabubari Nwidee Emmanuel</p>
        <p>© {currentYear} - A Special Birthday Tribute</p>
      </footer>
    </div>
  );
};

export default Index;
