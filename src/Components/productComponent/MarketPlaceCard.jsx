import React from 'react';

const MarketPlaceCard = ({ icon, title, description }) => {
  return (
    <div className="border border-blue-500 rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 bg-white/5 backdrop-blur-sm shadow-md">
      
      {/* Icon */}
      <div className="flex items-center justify-center w-24 h-24 text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 text-white shadow-lg">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default MarketPlaceCard;
