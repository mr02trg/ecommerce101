import React from 'react';
import './style.scss';

const Homepage = props => {
  return (
    <div className="homepage">
      <div className="category buy-dog">
        <button type="button" className="btn btn-lg btn-dark">Woof</button>
      </div>
      <div className="category buy-cat">
        <button type="button" className="btn btn-lg btn-dark">Meow</button>
      </div>
    </div>
  );
};

export default Homepage;