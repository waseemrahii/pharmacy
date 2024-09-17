// import React from 'react';
// import './Team.css'; // Import your CSS file for styles

// const LeadershipTeam = () => {
//   return (
//     <section
//       className="dist_marketing-container__H_Hue dist_paddingTop__tfW4m dist_paddingBtm__WQaL9 dist_marketing-media__VBwmP snipcss-DMh9X"
//       aria-labelledby="our-leadership-team"
//       role="region"
//       tabIndex="0"
//     >
//       <section className="dist_marketing-media__body__KhiUY">
//         <h2
//           className="marketing-heading-5 dist_brevo-heading__utk3d"
//           id="our-leadership-team"
//         >
//           Our leadership team
//         </h2>
//         <span className="marketing-typo_text-inter-3-regular">
//           Meet our executive team steering our course with strategic precision
//           and discover the driving force shaping our corporate ethos.
//         </span>
//         {/* <section className="dist_marketing-media__button__XrwMT">
//           <button
//             type="button"
//             data-testid="marketing-btn"
//             className="marketing-typo_text-inter-4-medium dist_marketing-btn__T7nAD dist_marketing-btn--md__DSDPH dist_marketing-btn-light__QOvFK dist_marketing-btn-light--mint-green__EUo3x"
//             aria-disabled="false"
//           >
//             <span className="dist_marketing-btn-label__Qr6VO">
//               Meet our leaders
//             </span>
//           </button>
//         </section> */}
//       </section>
//       <img
//         alt="Our leadership team"
//         aria-label="image"
//         height="250"
//         loading="lazy"
//         // src="https://corp-backend.brevo.com/wp-content/uploads/2024/05/c_level_.webp"
//         src="/group-doctor-smile.avif"
//         width="250"
//         className="dist_marketing-media__graphic__iUmlw dist_marketing-media__graphic--medium__GQe5f style-owS8f"
//         id="style-owS8f"
//       />
//     </section>
//   );
// };

// export default LeadershipTeam;




import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import './Team.css'; // Import your CSS file for styles

const LeadershipTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Animation should happen every time the element scrolls into view
    });
  }, []);

  return (
    <section
      className="dist_marketing-container__H_Hue dist_paddingTop__tfW4m dist_paddingBtm__WQaL9 dist_marketing-media__VBwmP snipcss-DMh9X"
      aria-labelledby="our-leadership-team"
      role="region"
      tabIndex="0"
    >
      <section className="dist_marketing-media__body__KhiUY" data-aos="fade-up" data-aos-duration="1000">
        <h2
          className="marketing-heading-5 dist_brevo-heading__utk3d"
          id="our-leadership-team"
        >
          Solutions for a Healthy Life.
        </h2>
        <span className="marketing-typo_text-inter-3-regular">
        Our team comprises, physicians, pharmacists, clinical scientists and healthcare professionals to provide up to date, information
         for the benefit of people seeking good health and improved lifestyles.
        </span>
        {/* <section className="dist_marketing-media__button__XrwMT">
          <button
            type="button"
            data-testid="marketing-btn"
            className="marketing-typo_text-inter-4-medium dist_marketing-btn__T7nAD dist_marketing-btn--md__DSDPH dist_marketing-btn-light__QOvFK dist_marketing-btn-light--mint-green__EUo3x"
            aria-disabled="false"
          >
            <span className="dist_marketing-btn-label__Qr6VO">
              Meet our leaders
            </span>
          </button>
        </section> */}
      </section>
      <img
        alt="Our leadership team"
        aria-label="image"
        height="150" // Adjusted height to make image smaller
        loading="lazy"
        src="/group-doctor-smile.avif"
        width="150" // Adjusted width to make image smaller
        className="dist_marketing-media__graphic__iUmlw dist_marketing-media__graphic--medium__GQe5f style-owS8f"
        id="style-owS8f"
        data-aos="zoom-in" // Added AOS animation
        data-aos-duration="1500" // Animation duration
      />
    </section>
  );
};

export default LeadershipTeam;
