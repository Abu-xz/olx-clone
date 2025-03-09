import React, { useState } from 'react'
import '../index.css'
import { FaRegHeart } from 'react-icons/fa';


function ProductCard({ product }) {

  const [isWishListed, setIsWishListed] = useState(false);

  const toggleWishlist = () => {
    setIsWishListed(!isWishListed);
  }

  return (
    <div className="outline-1 outline-gray-300 rounded-lg shadow-md overflow-hidden w-full lg:w-72 bg-white">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer"
          onClick={toggleWishlist}>
          <FaRegHeart className={` transition-colors duration-300 ${isWishListed ? 'text-pink-600' : 'text-gray-600'}`} size={18} />
        </button>
        {product.featured && (
          <span className="absolute bottom-0 left-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-tr-lg">
            FEATURED
          </span>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">₹ {product.price}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-xs text-gray-400">{product.location}</p>
        <p className="text-xs text-gray-500">{product.date}</p>
      </div>
    </div>
  )
}

export default ProductCard;