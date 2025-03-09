import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: "https://dummyjson.com/image/300", // Replace with actual image URL
    title: "Toyota Fortuner 2014 Diesel",
    price: "15,80,000",
    description: "2014 - 145,000 km",
    location: "CALICUT BEACH, KOZHIKODE",
    date: "FEB 25",
    featured: true,
  },
  {
    id: 2,
    image: "https://dummyjson.com/image/300",
    title: "Premium Villa project at Vazhakala",
    price: "2,50,00,000",
    description: "4 Bds - 4 Ba - 2550 ft²",
    location: "ELAMKULAM, KOCHI",
    date: "FEB 20",
    featured: true,
  },
  {
    id: 3,
    image: "https://dummyjson.com/image/300",
    title: "Samsung S23 Ultra",
    price: "55,000",
    description: "Samsung S23 ultra",
    location: "NELLAYA VILLAGE, VANIYAMKULAM II",
    date: "TODAY",
    featured: false,
  },
  {
    id: 4,
    image: "https://dummyjson.com/image/300",
    title: "Apple iPhone 14 Plus",
    price: "45,000",
    description: "Apple, iPhone 14 plus",
    location: "NELLAYA VILLAGE, VANIYAMKULAM II",
    date: "TODAY",
    featured: false,
  },
];

const ProductList = () => {


  return (
    <div className="p-5 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center min-w-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
