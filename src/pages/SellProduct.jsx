import React, { useState } from 'react';
import { db } from '../firebase/setup';
import { uploadImageToCloudinary } from '../Cloudinary/cloudinaryConfig';
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';



const SellProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ productName, category, price, location, image })
    setIsLoading(true);

    if (!productName || !category || !price || !location || !image) {
      console.log('field required')
      return;
    }
    try {
      // upload image to cloudinary and get the url to store
      const imageUrl = await uploadImageToCloudinary(image);
      console.log('uploaded image url: ', imageUrl);

      //save product details to upload to firestore db
      const productData = {
        productName,
        category,
        price: parseFloat(price),
        location,
        imageUrl,
        createdAt: new Date(),
      }

      await addDoc(collection(db, 'products'), productData);

      console.log('product added to firebase')

      setProductName('');
      setCategory('');
      setPrice('');
      setLocation('');
      setImage(null);
      setImagePreview(null);
      alert('Product added successfully!');
      navigate('/')

    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sell Your Product</h2>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-4 flex justify-center">
            <img
              src={imagePreview}
              alt="Product Preview"
              className="w-36  h-36 object-cover rounded-lg"
            />
          </div>
        )}


        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="fashion">Fashion</option>
            <option value="vehicles">Vehicles</option>
            <option value="properties">Properties</option>
            <option value="bikes">Bikes</option>
            <option value="books">Books</option>
          </select>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white py-2 px-4 rounded-md border-2 hover:bg-white hover:text-black hover:border-2  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
        >
          {isLoading ? 'Submitting' : 'Submit'}
        </button>
        <Link to={'/'}>
          <button
            type='button'
            disabled={isLoading}
            className="w-full bg-gray-300 text-black p-2 mt-2 rounded-md cursor-pointer"
          >
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SellProduct;