import React from 'react';
import UnderConstruction from '../../assets/images/under-construction.png';

import './style.scss';

const Maintainence = () => (
  <div class="maintainance-wrapper">
    <img className="maintainance" src={UnderConstruction} />
  </div>
);

export default Maintainence;