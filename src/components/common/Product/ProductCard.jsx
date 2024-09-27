import React from 'react';
import { Link } from 'react-router-dom';
import { TiStar } from 'react-icons/ti';
import { FaEye } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
      <div className="product-single-hover style--card">
        <div className="overflow-hidden position-relative">
          <div className="inline_product clickable d-flex justify-content-center">
            <span className="for-discount-value p-1 pl-2 pr-2 font-bold fs-13 " style={{background:"#1EBEB6 !important" }}>
              <span className="direction-ltr d-block">{product.discount}</span>
            </span>
            <div className="p-10px pb-0">
              <Link to={product.link} className="w-100">
                <img alt={product.name} src={product.imageUrl} />
              </Link>
            </div>
            <Link to={`/product/${product.id}`} >

            <div className="quick-view">
              <button className="btn-circle stopPropagation action-product-quick-view">
                <FaEye className="czi-eye align-middle text-[#1EBEB6]" />
              </button>
            </div>
            </Link>
          </div>
          <div className="single-product-details">
            <div className="rating-show justify-content-between text-center">
              <span className="flex justify-center font-size-sm text-body">
                {[...Array(product.rating)].map((_, i) => (
                  <TiStar key={i} className="text-warning" />
                ))}
                <label className="badge-style">(1)</label>
              </span>
            </div>
            <div className="text-center">
              <Link to={product.link}>{product.name}</Link>
            </div>
            <div className="justify-content-between text-center">
              <div className="product-price text-center d-flex flex-wrap justify-content-center align-items-center gap-8">
                <del className="category-single-product-price">
                  ${product.price.original.toFixed(2)}
                </del>
                <br />
                <span className="text-accent text-dark">
                  ${product.price.discounted.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

