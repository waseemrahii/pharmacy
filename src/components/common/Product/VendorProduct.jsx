import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../redux/productSlice'; // Adjust path as necessary
import { fetchCategories } from '../../redux/categorySlice'; // Adjust path as necessary
import './Product.css';
import ImageUrl from '../../../ImageUrl';

const VendorProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { products, loading, error } = useSelector((state) => state.product); 
  const { categories } = useSelector((state) => state.category); 

  const [priceRange, setPriceRange] = useState('0-1000000');
  const [category, setCategory] = useState(null);
  const [sort, setSort] = useState('price');
  const [order, setOrder] = useState('asc');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId'); 
  const categoryId = queryParams.get('category'); 

  useEffect(() => {
    // Set the category state based on the query parameter
    if (categoryId) {
      setCategory(categoryId);
    }

    const fetchProductData = async () => {
      await dispatch(fetchProducts({
        userId, 
        priceRange,
        category: category || categoryId, // Use the category state or the query parameter
        sort,
        order,
      }));
    };

    fetchProductData();
    dispatch(fetchCategories()); 
  }, [dispatch, userId, priceRange, category, sort, order, categoryId]); 

  const handleCategoryChange = (id) => {
    setCategory(id);
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange(`${min}-${max}`);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleGoBack = () => {
    navigate('/partners'); 
  };

  return (
    <div className="container pb-5 mb-2 mb-md-4 rtl mt-24" dir="ltr" style={{}}>
      <section className="col-lg-12">
        {loading && <p>Loading products...</p>}
        {error && <p>Error loading products: {error}</p>}
        {products.length === 0 && !loading && (
          <div className="text-center mt-24">
            <p className="text-xl font-semibold">No products available.</p>
            <button
              className="btn bg-emerald-400 text-white hover:bg-emerald-500 hover:border-none hover:text-white mt-4"
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        )}
        <div className="row" id="ajax-products">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={{
                id: product._id,
                name: product.name,
                price: {
                  original: product.price,
                  discounted: product.price,
                },
                rating: 5, 
                discount: '', 
                imageUrl: `${ImageUrl}/${product.thumbnail}`,
                link: `${ImageUrl}/products/${product._id}`,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default VendorProduct;
