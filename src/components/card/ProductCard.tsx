import React from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>
        <p className="text-red-500 font-bold text-lg mb-3">${price.toFixed(2)}</p>

        {/* Add to Cart Button */}
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(id)}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transform transition duration-300"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
