import React, { useState } from 'react'
import '../index.css'
import { FaRegHeart } from 'react-icons/fa';

function ProductCard({ product }) {

  const [isWishListed, setIsWishListed] = useState(false);

  const toggleWishlist = () => {
    setIsWishListed(!isWishListed);
  }

  return (
    <div className="outline-1 outline-gray-300 rounded-b-lg shadow-md overflow-hidden w-full lg:w-72 bg-white">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-96 h-52 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer"
          onClick={toggleWishlist}>
          <FaRegHeart className={` transition-colors duration-300 ${isWishListed ? 'text-pink-600' : 'text-gray-600'}`} size={18} />
        </button>
        <span className="absolute bottom-0 left-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-tr-lg">
          FEATURED
        </span>
      </div>

      <div className="py-2 px-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-900">₹ {product.price}</h2>
        <p className="text-md text-gray-700 font-semibold uppercase">{product.productName}</p>
        <p className="text-sm text-gray-700">{
          `${product.category.slice(0,1).toUpperCase() + product.category.slice(1)}`
          }</p>

        <div className='flex justify-between'>
          <p className="text-xs text-gray-600">{product.location}</p>
          <p className="text-xs text-gray-600">
            {product.createdAt?.toDate
              ? product.createdAt.toDate().toLocaleDateString()
              : new Date(product.createdAt).toLocaleDateString()}
          </p>
        </div>

      </div>
    </div>
  )
}

export default ProductCard;