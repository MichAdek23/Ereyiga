
import React from 'react';
import { Star, Heart } from 'lucide-react';

const FriendshipMessage: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -top-6 -left-6">
            <Star className="text-birthday-gold h-12 w-12 opacity-50" />
          </div>
          <div className="absolute -bottom-6 -right-6">
            <Heart className="text-birthday-coral h-12 w-12 opacity-50" />
          </div>
          
          <div className="border-4 border-birthday-blue/20 p-8 md:p-12 rounded-lg bg-gradient-to-br from-white to-blue-50">
            <h2 className="text-3xl md:text-4xl font-dancing font-bold mb-8 text-center text-birthday-blue">
              A Friend Closer Than a Brother
            </h2>
            
            <div className="font-montserrat text-lg space-y-6 text-gray-700">
              <p>
                Dear Ereyigabubari,
              </p>
              
              <p>
                From our days in secondary school to now as coursemates in the University of Port Harcourt, 
                you've been more than just a friend to me. You've been a brother, a confidant, and a constant support.
              </p>
              
              <p>
                As we continue our journey as Year 2 students, I want to take a moment to celebrate not just your birthday, 
                but the incredible person you are. Your kindness, intelligence, and unwavering loyalty have made these years 
                some of the best of my life.
              </p>
              
              <p>
                May this new year of your life bring you all the joy, success, and blessings you deserve. 
                I'm grateful for our friendship and look forward to creating many more memories together.
              </p>
              
              <p className="text-right font-semibold">
                Happy Birthday, my friend!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendshipMessage;
