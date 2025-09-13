import React from 'react';
import DataProp from '../props/DataProp';
import '../styles/type.css';

function Type() {
  return (
    <div className='type'>
      <h2><u>Project Details</u></h2>
      <div className='demo-data'>
        <DataProp 
          title="DATA CONVERSION PROJECTS" 
          description={[
            "Perfect for individuals seeking remote work.",
            "High-income potential from the comfort of your home.",
            "Ideal for candidates with minimal qualifications.",
            "Work remotely with flexible hours."
          ]}
        />

        <DataProp 
          title="DATA SEGREGATION PROJECT"
          description={[
            "Offered by TENR Global Solution, a reputed freelancing platform.",
            "Online Form Filling jobs reduce office workload.",
            "Help expedite customer/client tasks efficiently.",
            "1 billion+ forms need to be completed globally every day."
          ]}
        />

        <DataProp
          title="Bank Captcha Verifier"
          description={[
            "CAPTCHA protects websites from bots and spam.",
            "Provides simple tests easily passed by humans.",
            "Prevents automated data abuse like mass messaging.",
            "Advanced CAPTCHAs track user behavior for better accuracy."
          ]}
        />
      </div>
    </div>
  );
}

export default Type;
