import React from 'react';
import product from '../assets/3.png'

const ProductSection = () => {
  return (
    <>
    <div className="product-section">
        <p>INSTALLED OVER 10 LAKHS RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
         <img src={product} alt="product" />
      
    </div>
    <div className='pdiscription'>
              <p>Valves - Pumps - Pipes - IOT Drivers & controllers - wires & Cables - Solar Systems-Motors</p> 
              </div>
    
   
            <hr></hr>
   <div className='bheader'>
   <strong>C.R.I. FLUID SYSTEMS PRODUCTS TO DIVERSE SEGMENTS</strong>
   </div>
   <div className='fsproducts'>
    <p>CHEMICALS & PROCESS<span class="pipe"></span>POWER<span class="pipe"></span>WATER & WASTE WATER<span class="pipe"></span>OILS & GAS<span class="pipe"></span>PHARMA<span class="pipe"></span>SUGARS & DISTILLERIES<span class="pipe"></span>PAPER & PULP<span class="pipe"></span>MARINE & DEFENCE<span class="pipe"></span>MENTAL & MINING<span class="pipe"></span>FOOD & BEVERAGE<span class="pipe"></span>PETROCHEMICALS & REFINERIES<span class="pipe"></span>SOLAR<span class="pipe"></span>BUILDING<span class="pipe"></span>HVAC<span class="pipe"></span>FIRE FIGHTING<span class="pipe"></span>AGRICULTURE & RESIDENTIAL</p>
</div>

   

   </>
  );
};

export default ProductSection;
