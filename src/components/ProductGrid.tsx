import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Avocados',
      description: 'Fresh, ripe avocados from California',
      price: 1.99,
      bulkPrice: 1.49,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600',
      category: 'Produce'
    },
    {
      id: 2,
      name: 'Free-Range Eggs',
      description: 'Farm fresh organic eggs',
      price: 4.99,
      bulkPrice: 3.99,
      image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600',
      category: 'Dairy'
    },
    {
      id: 3,
      name: 'Quinoa',
      description: 'Organic white quinoa',
      price: 6.99,
      bulkPrice: 4.99,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600',
      category: 'Grains'
    },
    {
      id: 4,
      name: 'Almond Milk',
      description: 'Unsweetened organic almond milk',
      price: 3.99,
      bulkPrice: 2.99,
      image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=600',
      category: 'Dairy Alternatives'
    },
    {
      id: 5,
      name: 'Mixed Berries',
      description: 'Fresh organic berry mix',
      price: 5.99,
      bulkPrice: 4.49,
      image: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&w=600',
      category: 'Produce'
    },
    {
      id: 6,
      name: 'Honey',
      description: 'Raw organic honey',
      price: 8.99,
      bulkPrice: 6.99,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600',
      category: 'Pantry'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;