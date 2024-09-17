// import React from 'react'
// import StoreList from './AllVendor'
// import { storesData } from '../../components/common/Data/storeData';

// const VendorList = () => {
//   return (
//     <div className='mb-15' style={{marginTop:"8%"}}>
//        <StoreList stores={storesData} />  
//     </div>
//   )
// }

// export default VendorList



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoreList from './AllVendor';

const VendorList = () => {
  const [storesData, setStoresData] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/vendors');
        const vendorsData = response.data.docs;

        // Fetch products count for each vendor
        const vendorsWithProducts = await Promise.all(
          vendorsData.map(async (vendor) => {
            try {
              const productsResponse = await axios.get(
                `http://localhost:3000/api/products/?userId=${vendor._id}`
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
    <div className='mb-15' style={{ marginTop: "8%" }}>
      <StoreList stores={storesData} />
    </div>
  );
};

export default VendorList;
