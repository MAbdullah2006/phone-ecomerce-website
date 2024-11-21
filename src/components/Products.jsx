import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 2,
    name: 'Samsung S24 Ultra',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 3,
    name: 'Google Pixel 8',
    price: 799,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 4,
    name: 'OnePlus 12',
    price: 899,
    image: 'https://images.unsplash.com/photo-1685703204758-c37561dff8d0?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 5,
    name: 'Xiaomi 14',
    price: 749,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 6,
    name: 'Nothing Phone 2',
    price: 699,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 7,
    name: 'ASUS ROG Phone',
    price: 999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 8,
    name: 'Sony Xperia 1',
    price: 899,
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 9,
    name: 'Sony Xperia 2',
    price: 899,
    image: 'https://shandarmobile.com/wp-content/uploads/2023/02/iPhone-13-2.jpg'
  },
  {
    id: 10,
    name: 'Sony Xperia 3',
    price: 899,
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 11,
    name: 'Sony Xperia 4',
    price: 899,
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 12,
    name: 'Sony Xperia 6',
    price: 899,
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&h=400'
  },
];

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('Added to cart!');
  };

  return (
    <div className="py-24 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} 
               className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-md
                         hover:from-blue-600 hover:to-purple-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;