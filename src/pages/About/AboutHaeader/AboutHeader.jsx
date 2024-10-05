
// import React, { useEffect } from 'react';
// import 'aos/dist/aos.css'; // Import AOS CSS
// import AOS from 'aos'; // Import AOS library
// import './AboutHeader.css'; // Import your CSS file here
// import { FaWeight } from 'react-icons/fa';

// const AboutHeader = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Duration of animations
//       once: false, // Animation should happen every time the element scrolls into view
//     });
//   }, []);

//   return (
//     <section
//       className="Default_marketing-default-hero__Ew4q_"
//       style={{
       
       
//       }}
//     >
//       <section className="dist_marketing-container__H_Hue">
//         <div className="Default_marketing-default-hero__inner__fqA9B">
//           <div
//             className="Default_marketing-default-hero__content__4Xu0A"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//           >
//             <div
//               className="Default_marketing-default-hero__document__zulIy"
//               data-aos="fade-right"
//               data-aos-duration="1200"
//             >
//               <h1
//                 className="marketing-heading-3 dist_brevo-heading__utk3d text-white"
//                 style={{ fontWeight: "bold", fontSize: "2rem" }} // Increased font size for desktop
//                 data-aos="zoom-in"
//                 data-aos-duration="1500"
//               >
//                 About Gifts Pharmacy 
//               </h1>
//               <p
//                 className="marketing-typo_text-inter-3-regular Default_marketing-default-hero__text__n2eF4"
//                 style={{ fontSize: "1.2rem", lineHeight: "1.6" }} // Enhanced font size and spacing

//                 data-aos="fade-left"
//                 data-aos-duration="1000"
//               >
//                 At Gifts Pharmacy, we specialize in providing high-quality,
//                  personalized medication solutions for all your 
//                  health needs. Our goal is to help you stay healthy, 
//                  strong, and balanced. We believe that everyone deserves 
//                  a healthy lifestyle, and we're here to support and guide
//                   you through the process. We offer a variety of products
//                    and services to meet your needs, from prescription 
//                    medications to consultation services.
//               </p>
//             </div>
//           </div>
//           <div
//             className="Default_marketing-default-hero__media__z3g1Z"
          
//             data-aos="fade-up"
//             data-aos-duration="1200"
//           >
          
//             <div className="image-div"
//              style={{
//               height: "400px", // Fixed height for better alignment
//               width: "100%",
//               maxWidth: "600px", // Responsive image size
//               borderRadius: "20px", // Added rounded corners
//               boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Added shadow for a modern look
//               objectFit: "cover", // Ensures image fits properly
//             }}
//             >
//             <img
//               src="/hero.png"
//               alt="Hero"
//               style={{
//                 height: "100%", 
//                 width: "100%",
//                 objectFit: "contain",
//               }}
//               data-aos="zoom-in"
//               data-aos-duration="1500"
//             />
//             </div>
            
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
                className="marketing-heading-3 dist_brevo-heading__utk3d text-white mb-4"
                style={{ fontWeight: "bold", fontSize: "2rem" }}
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                About Gifts Pharmacy
              </h1>
              <p
                className="marketing-typo_text-inter-3-regular Default_marketing-default-hero__text__n2eF4 text-justify"
                style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                At Gifts Pharmacy, we specialize in providing high-quality,
                personalized medication solutions for all your health needs. Our goal is to help you stay healthy, strong, and balanced. We believe that everyone deserves a healthy lifestyle, and we're here to support and guide you through the process.
              </p>
            </div>
          </div>
          <div
            className="Default_marketing-default-hero__media__z3g1Z"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div
              className="image-div"
              style={{
                height: "400px", // Fixed height for better alignment
                width: "100%",
                maxWidth: "600px", // Responsive image size
                borderRadius: "20px", // Rounded corners
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Added shadow for modern look
                objectFit: "cover", // Ensures image fits properly
              }}
            >
              <img
                src="/hero.png"
                alt="Hero"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutHeader;
