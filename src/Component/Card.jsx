// Card.jsx
import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="card bg-base-100  shadow-sm mx-2">
      <figure>
        <img className='p-4' src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
