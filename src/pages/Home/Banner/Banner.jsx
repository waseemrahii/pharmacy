// import React from 'react';
// import './Banner.css'
// import { FaArrowRight } from 'react-icons/fa';

// function Banner() {
//   return (
//     <div style={{    background: "#1ebeb6cf", height: "100vh", overflow:"hidden"}}>

  
//     <div className="banner-area p-10 auto-height  fixed-thumb text-default" >
//       <div className="fixed-shape-left-top">
//         <img src="https://validthemes.net/site-template/healdi/assets/img/shape/1.png" alt="Shape" />
//       </div>
//       <div className="container px-10">
//         <div className="double-items">
//           <div className="row align-center">
//             <div className="col-lg-6 info">
//               <h2 className="wow fadeInDown text-white font-bold font-serif" data-wow-duration="1s" id="style-CwGsQ">
//                 {/* We are providing <strong>Best Medical Services</strong> */}
//                 Health Gifts & Pharmacy Services
//               </h2>
//               <p className="wow fadeInLeft text-white" data-wow-duration="1.5s" id="style-lDMPo">
//               Select a gift for your loved one that will bolster them during their illness. Choose from a huge selection of carefully selected gifts designed to suit the patient’s needs and encourage recovery to health.              </p>
//               <a
//                 href=""
//                 className="popup-youtube theme video-play-button relative video-inline"
//               >
//                 {/* <i className="fa fa-play"></i> */}
//                 <FaArrowRight className="ml-2 animate-bounce-horizontal" />

//               </a>
//             </div>
//             <div className="col-lg-6 thumb">
//               <img
//                 src="/doctor.png"
//                 alt="Thumb"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
 
//     </div>
//     </div>
//   );
// }

// export default Banner;



import React from 'react';
import './Banner.css'
import { FaArrowRight } from 'react-icons/fa';

function Banner() {
  return (
    <div className="banner-container" style={{    background: "#1ebeb6cf"}}
    >
      <div className="banner-area auto-height fixed-thumb text-default">
        <div className="fixed-shape-left-top">
          <img src="https://validthemes.net/site-template/healdi/assets/img/shape/1.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="double-items">
            <div className="row align-center">
              <div className="col-lg-6 info">
                <h2 className="wow fadeInDown text-white" id="style-CwGsQ">
                  Health Gifts & Pharmacy Services
                </h2>
                <p className="wow fadeInLeft text-white" id="style-lDMPo">
                  Select a gift for your loved one that will bolster them during their illness. Choose from a huge selection of carefully selected gifts designed to suit the patient’s needs and encourage recovery to health.
                </p>
                <a href="" className="theme video-play-button relative video-inline">
                  <FaArrowRight className="ml-2 animate-bounce-horizontal" />
                </a>
              </div>
              <div className="col-lg-6 thumb">
                <img src="/doctor.png" alt="Thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
