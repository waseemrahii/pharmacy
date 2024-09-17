// import React from 'react';
// import './SlidingText.css';

// const SlidingText = () => {
//   return (
//     <div className="sliding-text-container flex">
//         <h3 className='bg-red-400 text-white btn z-10'>
//             News Update
//         </h3>
//       <div className="sliding-text bg-gray-400 ">
//         Whether Thanksgiving or Xmas..... A gift for every occasion.....send a gift to your loved one to show how much you care.
//       </div>
//     </div>
//   );
// };

// export default SlidingText;



// import React from 'react';
// import './SlidingText.css';

// const SlidingText = () => {
//   return (
//     <div className="sliding-text-container flex items-center">
//       <h3 className="static-text bg-red-400 text-white z-10 p-3 rounded-l-lg">
//         News Update
//       </h3>
//       <div className="sliding-text bg-gray-400 p-3 rounded-r-lg">
//         Whether Thanksgiving or Xmas..... A gift for every occasion.....send a gift to your loved one to show how much you care.
//       </div>
//     </div>
//   );
// };

// export default SlidingText;


import React from 'react';
import './SlidingText.css';

const SlidingText = () => {
  return (
    <div className="sliding-text-container flex items-center">
      <h3 className="static-text bg-red-400 text-white z-10 p-3 rounded-l-lg">
        News Update
      </h3>
      <div className="sliding-text-wrapper bg-blue-950 p-4 rounded-r-lg overflow-hidden">
        <div className="sliding-text">
          Whether Thanksgiving or Xmas..... A gift for every occasion.....send a gift to your loved one to show how much you care.           Whether Thanksgiving or Xmas..... A gift for every occasion.....send a gift to your loved one to show how much you care.

          {/* Whether Thanksgiving or Xmas..... A gift for every occasion.....send a gift to your loved one to show how much you care. */}
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
