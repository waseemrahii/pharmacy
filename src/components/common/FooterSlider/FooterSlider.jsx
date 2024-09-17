import React from "react";
import './FooterSlider.css'
const sliderData = [
  {
    id: "style-ZDSA5",
    link: "/about-us",
    imgSrc: "/about-company.png",
    imgAlt: "About Us",
    title: "About Us",
    description: "Know about our company more.",
  },
  {
    id: "style-8FEOy",
    link: "/contact",
    imgSrc: "/contact-us.png",
    imgAlt: "Contact Us",
    title: "Contact Us",
    description: "We are Here to Help",
  },
  {
    id: "style-m9Ub9",
    link: "/about",
    imgSrc: "/faq.png",
    imgAlt: "FAQ",
    title: "Buy Voucher",
    description: "Get all Answers",
  },
];

const FooterSlider = () => {
  return (
    <div className="text-center p-10">
      <div className="max-w-860px mx-auto footer-slider-container">
        <div className="container">
          <div className="footer-slider owl-theme owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer owl-height style-oIxbk" id="style-oIxbk">
              <div className="owl-stage " >
                {sliderData.map((item) => (
                  <div key={item.id} className="owl-item active" id={item.id}>
                    <div className="footer-slide-item">
                      <div>
                        <a href={item.link}>
                          <div className="text-center">
                            <img
                              className="object-contain"
                              width="36"
                              height="36"
                              src={item.imgSrc}
                              alt={item.imgAlt}
                            />
                          </div>
                          <div className="text-center">
                            <p className="m-0">{item.title}</p>
                            <small className="d-none d-sm-block">{item.description}</small>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="owl-nav disabled style-LKKoK" id="style-LKKoK">
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
      </div>
    </div>
  );
};

export default FooterSlider;
