// import React from 'react';
// import './AboutHeader.css'; // Import your CSS file here
// import { FaWeight } from 'react-icons/fa';

// const AboutHeader = () => {
//   return (
//     <section className="Default_marketing-default-hero__Ew4q_ "
//     style={{
//       height:"88vh",
//       overflow:"hidden"
//     }}
// >     
//  <section className="dist_marketing-container__H_Hue"
       
//       >
//         <div className="Default_marketing-default-hero__inner__fqA9B">
//           <div className="Default_marketing-default-hero__content__4Xu0A">
//             <div className="Default_marketing-default-hero__document__zulIy">
//               <h1 className="marketing-heading-3 dist_brevo-heading__utk3d text-white " style={{fontWeight:"bold"}}>About My Pharmacy</h1>
//               <p className="marketing-typo_text-inter-3-regular Default_marketing-default-hero__text__n2eF4">
//               At My Pharmacy, we specialize in providing high-quality, personalized medication solutions for all your health needs. Our goal is to help you stay healthy, strong, and balanced. We believe that everyone deserves a healthy lifestyle, and we're here to support and guide you through the process. We offer a variety of products and services to meet your needs, from prescription medications to over-the-counter options.
//               </p>
//             </div>
           
//           </div>
//           <div className="Default_marketing-default-hero__media__z3g1Z "    
//          style={{
//           height: "87%",
//           overflow: "hidden",
//           marginTop: "3rem",
//           display: "flex",
//           justifyContent: "center",
      
//          }}
//     >
//             {/* <iframe
//               allow="autoplay"
//               aria-label="video"
//               src="https://player.vimeo.com/video/920649734?autoplay=1&loop=0&muted=1&controls=1"
//               title="video"
//             ></iframe> */}

//             <img src="/hero.png" alt="" className='' style={{height:"90%"}}/>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default AboutHeader;



import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import './AboutHeader.css'; // Import your CSS file here
import { FaWeight } from 'react-icons/fa';

const AboutHeader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Animation should happen every time the element scrolls into view
    });
  }, []);

  return (
    <section
      className="Default_marketing-default-hero__Ew4q_"
      style={{
        height: "88vh",
        overflow: "hidden",
      }}
    >
      <section className="dist_marketing-container__H_Hue">
        <div className="Default_marketing-default-hero__inner__fqA9B">
          <div
            className="Default_marketing-default-hero__content__4Xu0A"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              className="Default_marketing-default-hero__document__zulIy"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h1
                className="marketing-heading-3 dist_brevo-heading__utk3d text-white"
                style={{ fontWeight: "bold" }}
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                About Gifts Pharmacy 
              </h1>
              <p
                className="marketing-typo_text-inter-3-regular Default_marketing-default-hero__text__n2eF4"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                At Gifts Pharmacy, we specialize in providing high-quality,
                 personalized medication solutions for all your 
                 health needs. Our goal is to help you stay healthy, 
                 strong, and balanced. We believe that everyone deserves 
                 a healthy lifestyle, and we're here to support and guide
                  you through the process. We offer a variety of products
                   and services to meet your needs, from prescription 
                   medications to consultation services.
              </p>
            </div>
          </div>
          <div
            className="Default_marketing-default-hero__media__z3g1Z"
            style={{
              height: "87%",
              overflow: "hidden",
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img
              src="/hero.png"
              alt="Hero"
              style={{ height: "90%" }}
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutHeader;
