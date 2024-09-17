// import React from 'react';

// const CardComponent = ({ imageSrc, title, description, buttonText }) => {
//   return (
//     <div className="card glass gap-1 " style={{width:"16rem"}}>
//       <figure>
//         <img
//           src={imageSrc}
//           alt={title}
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>
//         <p>{description}</p>
       
//       </div>
//     </div>
//   );
// };

// export default CardComponent;



import React from 'react';
import './Card.css'; // Import CSS file for additional styling

const CardComponent = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="card glass gap-1"  style={{width:"16rem"}}>
      <figure className="card-image">
        <img
          src={imageSrc}
          alt={title}
          className="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title} Gifts</h2>
        <p>{description}</p>
        {buttonText && (
          <button className="btn">{buttonText}</button>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
