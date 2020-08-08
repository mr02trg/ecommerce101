import React from 'react';
import './style.scss';
import history from 'history.js';

const Homepage = () => (
    <div className="homepage">
      <div className="category buy-dog">
        <button type="button"
          className="btn btn-lg btn-dark"
          onClick={() => history.push('/shop')}>
          Woof
        </button>
      </div>
      <div className="category buy-cat">
        <button type="button" 
          className="btn btn-lg btn-dark"
          onClick={() => history.push('/shop')}>
          Meow
        </button>
      </div>
    </div>
);

export default Homepage;