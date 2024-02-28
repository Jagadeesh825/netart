// src/components/PeopleIllustration.js
import React from 'react';
import awardpresenting from '../assets/2.png';

const PeopleIllustration = () => {
  return (
    <>
    <div className="people-illustration">
         <img src={awardpresenting} alt="Award Trophy" />
         </div>
         
        <div className='discription'>
        <p>Government of India awarded the <strong>"National Energy Conservation Award 2018"</strong>.Mr. G. Selvaraj, joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Raj Kumar Singh, Honarable Minister of State.</p>

        </div>
        

   
    </>
  );
};

export default PeopleIllustration;
