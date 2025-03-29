
import React from 'react';
import { Cake, Gift, PartyPopper } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-birthday-blue/10 via-birthday-gold/10 to-birthday-coral/10 animate-pulse" />
      </div>
      
      <div className="flex items-center justify-center space-x-4 mb-4">
        <PartyPopper className="text-birthday-gold h-8 w-8 md:h-12 md:w-12" />
        <Cake className="text-birthday-coral h-8 w-8 md:h-12 md:w-12" />
        <Gift className="text-birthday-blue h-8 w-8 md:h-12 md:w-12" />
      </div>
      
      <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-birthday-blue via-birthday-gold to-birthday-coral">
        Happy Birthday!
      </h1>
      
      <h2 className="font-montserrat text-2xl md:text-4xl mb-8 font-semibold text-gray-800">
        Ereyigabubari Nwidee Emmanuel
      </h2>
      
      <p className="font-montserrat text-lg md:text-xl max-w-2xl text-gray-600">
        Today we celebrate your life, your friendship, and all the amazing memories we've shared throughout the years.
      </p>
    </div>
  );
};

export default Hero;
