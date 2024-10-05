import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoreList from './AllVendor';
import BaseUrl from '../../BaseUrl';

const VendorList = () => {
  const [storesData, setStoresData] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/vendors`);
        const vendorsData = response.data.docs;

        // Fetch products count for each vendor
        const vendorsWithProducts = await Promise.all(
          vendorsData.map(async (vendor) => {
            try {
              const productsResponse = await axios.get(
                `${BaseUrl}/products/?userId=${vendor._id}`
              );
              const totalProducts = productsResponse.data.docs.totalDocs;
              return { ...vendor, totalProducts };
            } catch (error) {
              console.error('Error fetching products:', error);
              return { ...vendor, totalProducts: 0 };
            }
          })
        );

        setStoresData(vendorsWithProducts);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className='mb-15 sm:mt-25 md:mt-12 lg:mt-7' style={{marginTop:"5rem"}}>
      <StoreList stores={storesData} />
    </div>
  );
};

export default VendorList;//
