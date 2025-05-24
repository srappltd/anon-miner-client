import React from 'react';
import { FaMicrochip } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';
import { MdShoppingCart } from 'react-icons/md';

const FeaturedProductCard = ({ img, power, processor, price, title }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-black transition duration-300 hover:scale-105 cursor-pointer max-w-sm w-full">
      
      {/* Product Image */}
      <div className="flex justify-center">
        <img 
          src={img} 
          alt={title} 
          className="h-40 w-40 object-contain" 
        />
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Product Details */}
      <div className="space-y-2">
        <div className="flex justify-between text-base text-gray-700">
          <span className="flex items-center gap-2">
            <ImPower className="text-[#00BFFF]" />
            <span className="text-sm sm:text-base">{power}</span>
          </span>
          <span className="flex items-center gap-2">
            <FaMicrochip className="text-[#00BFFF]" />
            <span className="text-sm sm:text-base">{processor}</span>
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

        {/* Price & Cart Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#0068DA] to-[#00D5E6]">
            ${price}
          </span>

          <button className="text-white text-2xl p-2 rounded-lg bg-gradient-to-r from-[#0068DA] to-[#00D5E6] hover:opacity-90">
            <MdShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
