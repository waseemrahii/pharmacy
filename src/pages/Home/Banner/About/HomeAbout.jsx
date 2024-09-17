
// import React, { useEffect } from 'react';
// import { FaPlay, FaAngleRight } from 'react-icons/fa'; // Import necessary icons
// import 'aos/dist/aos.css'; // Import AOS CSS
// import AOS from 'aos'; // Import AOS library

// function HomeAbout() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Duration of animations
//       once: false, // Animation should happen every time the element scrolls into view

//     });
//   }, []);

//   return (
//     <div className="about-area bg-gray relative default-padding container">
//       <div className="container p-20">
//         <div className="row flex justify-center items-center">
//           <div className="col-lg-6 thumb" data-aos="fade-right" data-aos-duration="1000">
//             <div className="thumb-box" style={{ width: "88%" }}>
//               <img
//                 src="/aboutdill.png"
//                 alt="Thumb"
//               />
//             </div>
//           </div>
//           <div className="col-lg-6 info" data-aos="fade-left" data-aos-duration="1000">
//             <h1 className='mb-4 font-bold'>
//             A Place where Healthcare feels at home
//             </h1>
//             <p >
//             Welcome to our unique website designed and developed by a highly skilled team of professionals. Everyone gets sick at some time and requires appropriate support to aid their recovery. Our products are carefully reviewed and recommended with sensitivity to the patients' needs. Whether you need a 'pick me up' gift to boost your mood,
//              a gift that will aid you during your sickness or a product that will promote recovery, we have it all.            </p>
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeAbout;




import React, { useEffect } from 'react';
import { FaPlay, FaAngleRight } from 'react-icons/fa'; // Import necessary icons
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

function HomeAbout() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Animation should happen every time the element scrolls into view
    });
  }, []);

  return (
    <div className="about-area bg-gray relative default-padding container">
      <div className="container px-4 py-8 md:py-20">
        <div className="row flex flex-wrap justify-center items-center">
          {/* Image Column */}
          <div className="col-lg-6 thumb mb-8 lg:mb-0" data-aos="fade-right">
            <div className="thumb-box w-full lg:w-4/5 mx-auto">
              <img
                src="/aboutdill.png"
                alt="Thumb"
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Text Column */}
          <div className="col-lg-6 info text-left lg:text-left" data-aos="fade-left">
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>
              A Place where Healthcare feels at home
            </h1>
            <p className="mb-4 text-justify md:text-lg ">
              Welcome to our unique website designed and developed by a highly skilled team of professionals. Everyone gets sick at some time and requires appropriate support to aid their recovery. Our products are carefully reviewed and recommended with sensitivity to the patients' needs. Whether you need a 'pick me up' gift to boost your mood, a gift that will aid you during your sickness or a product that will promote recovery, we have it all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
