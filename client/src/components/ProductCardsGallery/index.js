import React from 'react';
import ProductCard from '../ProductCard.js/ProductCard';
import './productsCardGallery.scss'

function ProductCardsGallery({ products, addProduct }) {
  return (
    <div className="wrapper">
      <div className="products_card_gallery ">
        {products.map(product =>
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            imgUrl={product.img}
            addProduct={addProduct}
          />
        )}
      </div>
    </div>
  );
}

export default ProductCardsGallery;