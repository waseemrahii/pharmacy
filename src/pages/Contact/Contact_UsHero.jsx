import React from 'react';
import './Contact_UsHero.css'
import { Link } from 'react-router-dom';
const Contact_UsHero = () => {
  return (
    <section className="custom-page-header position-relative overflow-hidden ptb-120 bg-custom text-center">
      <div className="container">
        <div className="rows" >
          <div className="col-lg-8 col-md-12">
            <h1 className="custom-display-5 fw-bold text-center mt-10">Join Our Smart 100 Club  </h1>
            {/* <p className="custom-display-5 text-center mt-4">Join Our Smart 100 Club  </p> */}
            <p className="custom-lead text-center mt-4">
            Join our club today and have access to the latest lifestyle innovations. Be part of a growing community seeking better health and longer productive lives through lifestyle medicine changes. Benefits of membership include advice on pre-screening tests and early intervention, effective diet plans, exercise advice, knowledge resource and education, which can lead better health and avoid many diseases of old age.

You will receive regular updates, recommendations and special discounts on many products.
                {/* Become a member of our Smart 100 Club and get exclusive discounts on your next purchase. Sign up now and join the ranks of our best-selling pharmacies and healthcare providers. */}
              
 </p>
 <a
              href="https://forms.gle/SUeRpGGKQcTtQHHdA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-center text-white px-4 py-2 mt-5 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
            >
            <button>

            Free Membership
            </button>
          </a>
   </div>
        </div>
        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-custom-light right-5"></div>
      </div>
    </section>
  );
};

export default Contact_UsHero;
