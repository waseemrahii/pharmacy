


import React from 'react';
import './SlidingText.css';

const SlidingText = () => {
  return (
    <div className="sliding-text-container flex items-center w-full overflow-hidden bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 py-2 sm:py-3">
      <h3 className="static-text bg-red-400 text-white z-10 p-2 sm:p-3 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-l-lg whitespace-nowrap">
        News Update
      </h3>
      <div className="sliding-text-wrapper py-2 sm:py-3 px-3 sm:px-6 flex-1 rounded-r-lg overflow-hidden relative">
        <div className="sliding-text text-white text-center text-xs sm:text-sm md:text-base lg:text-lg">
          Whether Thanksgiving or Xmas..... A gift for every occasion..... send a gift to your loved
          one to show how much you care. Whether Thanksgiving or Xmas..... A gift for every
          occasion..... send a gift to your loved one to show how much you care.
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
