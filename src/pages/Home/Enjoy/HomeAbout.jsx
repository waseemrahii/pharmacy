
// import React, { useEffect } from 'react';
// import { FaPlay, FaAngleRight, FaGrin, FaGrimace } from 'react-icons/fa'; // Import necessary icons
// import './HomeAbout.css'; // Import your CSS file
// import 'aos/dist/aos.css'; // Import AOS CSS
// import AOS from 'aos'; // Import AOS library

// function EnjoyAbout() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Duration of animations
//       once: false, // Animation should happen every time the element scrolls into view
//     });
//   }, []);

//   return (
//     <div className="about-area bg-gray relative default-padding">
//       <div className="container p-24">
//         <div className="rows">
//           <div className="col-lg-6 thumb" style={{ marginTop: "-4%" }} data-aos="fade-right" data-aos-duration="1000">
//             <div className="thumb-box" style={{ width: "100%", marginTop: "-4%" }}>
//               <img
//                 src="child.png"
//                 alt="Thumb"
//                 data-aos="zoom-in" // Add AOS animation to the image
//                 data-aos-duration="1000" // Animation duration
//               />
           
//             </div>
//           </div>
//           <div className="col-lg-6 info" data-aos="fade-left" data-aos-duration="1000">
//             <h5 className="title text-capitalize">
//               Enjoy our youth-friendly environment
//               </h5>
//             <p>
//               We believe every youth deserves a safe, welcoming, 
//               and inclusive environment. Our site offers a variety
//                of products that are safe for children, and our staff are committed
//                 to making sure that our customers feel comfortable and safe.
//             </p>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EnjoyAbout;


import React, { useEffect } from 'react';
import { FaPlay, FaAngleRight, FaGrin, FaGrimace } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

function EnjoyAbout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-gray relative px-0 md:px-6 lg:px-12  py-6 md:py-12 lg:py-20 xl:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse  items-center justify-center gap-6 lg:gap-12">
        <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
          <div className="relative mb-6 lg:mb-12">
            <img
              src="child.png"
              alt="Thumb"
              className="w-full h-auto max-w-full max-h-[350px]"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-justify lg:text-left" data-aos="fade-left" data-aos-duration="1000">
          <h5 className="text-2xl lg:text-3xl font-semibold mb-4">Enjoy our youth-friendly environment</h5>
          <p className="text-base lg:text-lg leading-relaxed">
            We believe every youth deserves a safe, welcoming, and inclusive environment. Our
            site offers a variety of products that are safe for children, and our staff are
            committed to making sure that our customers feel comfortable and safe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnjoyAbout;
