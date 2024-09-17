import React from "react";
import './ShipingPolicy.css'
const shippingData = [
  {
    id: "style-5Klz1",
    imgSrc: "https://6valley.6amtech.com/public/assets/front-end/img/delivery_info.png",
    text: "Fast Delivery all across the country",
  },
  {
    id: "style-s5APz",
    imgSrc: "https://6valley.6amtech.com/public/assets/front-end/img/safe_payment.png",
    text: "Safe Payment",
  },
  {
    id: "style-bCN4n",
    imgSrc: "https://6valley.6amtech.com/public/assets/front-end/img/return_policy.png",
    text: "7 Days Return Policy",
  },
  {
    id: "style-4WIqm",
    imgSrc: "https://6valley.6amtech.com/public/assets/front-end/img/authentic_product.png",
    text: "100% Authentic Products",
  },
];

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-web snipcss-cBe2A">
      <div className="footer-top-slider owl-theme owl-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer owl-height style-vjzvY" id="style-vjzvY">
          <div className="owl-stage style-klNfk" id="style-klNfk">
            {shippingData.map((item) => (
              <div key={item.id} className="owl-item active" id={item.id}>
                <div className="footer-top-slide-item">
                  <div className="d-flex justify-content-center">
                    <div className="shipping-method-system">
                      <div className="w-100 d-flex justify-content-center mb-1">
                        <img
                          alt=""
                          className="object-contain"
                          width="88"
                          height="88"
                          src={item.imgSrc}
                        />
                      </div>
                      <div className="w-100 text-center">
                        <p className="m-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="owl-nav disabled style-arkW9" id="style-arkW9">
          <button type="button" role="presentation" className="owl-prev">
            <span aria-label="Previous">‹</span>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div className="owl-dots disabled"></div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
