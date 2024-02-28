// src/components/AwardSection.js
import React from 'react';
import award from '../assets/1.png';


const AwardSection = () => {
  return (
    <div className="award-section">
      <img src={award} alt="Award Trophy" />
      <div className='content'>
        <div className='win'>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 FOR THE 4th time.
        </div>
        <div className="textt">
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various Government
              Institutions, as trustworthy products for various projects across the globe to
              save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects of ESSL (Energy
              Efficiency Services Limited) to replace the old in inefficient pumps with 5 star
              rated energy efficient smart pumps with IOT enabled control panel.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
