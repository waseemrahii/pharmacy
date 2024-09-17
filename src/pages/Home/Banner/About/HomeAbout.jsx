// import React from 'react';
// import { FaPlay, FaAngleRight } from 'react-icons/fa'; // Import necessary icons
// function HomeAbout() {
//   return (
//     <div className="about-area bg-gray relative default-padding container">
//       <div className="container p-24">
//         <div className="row flex justify-center items-center">
//           <div className="col-lg-6 thumb">
//             <div className="thumb-box " style={{width:"88%"}}>
//               <img
//                 src="/shaiplogo.jpeg"
//                 alt="Thumb"
//               />
           
//             </div>
//           </div>
//           <div className="col-lg-6 info ">
//             <h1 className='mb-4 font-bold '> Live well live long</h1>
//             {/* <h2>
//               A Great Place to Work. A Great Place to <strong>Receive Care</strong>. Leading Medicine.
//             </h2> */}
//             <p>
//             Welcome to our unique website that is designed and developed by a highly skilled team of medical professional with declared of experience. Our team comprises,  physician, pharmacist, clinical scientists and healthcare professionals to provide us to date, advice based information for the benefits of people seeking good health and improved lifestyles.             </p>
//             {/* <ul className="icon-less">
//               <li>
//                 <h5>More Experience</h5>
//               </li>
//               <li>
//                 <h5>The right answers?</h5>
//               </li>
//               <li>
//                 <h5>Seamless care</h5>
//               </li>
//               <li>
//                 <h5>Unparalleled expertise</h5>
//               </li>
//             </ul>
//             <a
//               className="btn btn-md btn-gradient"
//               href="#"
//             >
//               <FaAngleRight className="inline mr-2" />
//               Make Appointment
//             </a> */}
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
      <div className="container p-20">
        <div className="row flex justify-center items-center">
          <div className="col-lg-6 thumb" data-aos="fade-right" data-aos-duration="1000">
            <div className="thumb-box" style={{ width: "88%" }}>
              <img
                src="/aboutdill.png"
                alt="Thumb"
              />
            </div>
          </div>
          <div className="col-lg-6 info" data-aos="fade-left" data-aos-duration="1000">
            <h1 className='mb-4 font-bold'>
            A Place where Healthcare feels at home
            </h1>
            <p >
            Welcome to our unique website designed and developed by a highly skilled team of professionals. Everyone gets sick at some time and requires appropriate support to aid their recovery. Our products are carefully reviewed and recommended with sensitivity to the patients' needs. Whether you need a 'pick me up' gift to boost your mood,
             a gift that will aid you during your sickness or a product that will promote recovery, we have it all.            </p>
            {/* <ul className="icon-less">
              <li>
                <h5>More Experience</h5>
              </li>
              <li>
                <h5>The right answers?</h5>
              </li>
              <li>
                <h5>Seamless care</h5>
              </li>
              <li>
                <h5>Unparalleled expertise</h5>
              </li>
            </ul>
            <a
              className="btn btn-md btn-gradient"
              href="#"
            >
              <FaAngleRight className="inline mr-2" />
              Make Appointment
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
