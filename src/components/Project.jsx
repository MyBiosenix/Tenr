import React, { useState } from 'react'
import '../Styles/project.css'
import ProjectProp from '../props/ProjectProp'
import EnquiryModal from '../Modals/EnquiryModal';


function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleAccessClick = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (

    <div className='inclusive1'>
      <h2><u>Plans & Pricing</u></h2>
      <h3 id='vip'>Data Conversion</h3>
      <div className='pricingdiv1'>
        <ProjectProp
          proj="Data Conversion"
          discount="50% Off"
          title="Gold"
          price="₹ 1999/-"
          access = "Buy Now!"
          description={[
            "Pages: 100 Pages",
            "Accuracy Required: 85.00%",
            "Max Errors Accepted: 15.00%",
            "Earning Per Page: Rs. 150.00/-",
            "Software validity: 06 Month",
            "Freelancer Fee: Rs. 1,999/-",
            "Minimum Submission: 75 Pages",
            "Work Duration: 15 Days",
            "Payment : Rs. 15,000/-"
          ]}
          onAccessClick={handleAccessClick}
        />
  
          <ProjectProp
          proj="Data Conversion"
          discount="50% Off"
          title="Diamond"
          price="₹ 3999/-"
          access="Buy Now!"
          description={[
            "Pages: 200 Pages",
            "Accuracy Required: 50.00%",
            "Max Errors Accepted: 50.00%",
            "Earning Per Page: Rs. 240.00/-",
            "Contract Duration: 33 Months",
            "Freelancer Fee: Rs. 3,999/-",
            "Minimum Submission: 150 Pages",
            "Work Duration: 30 Days",
            "Payment: Rs. 48,000/-"
          ]}
          className="highlight"
          onAccessClick={handleAccessClick}
        />
        

        <ProjectProp
          proj="Data Conversion"
          discount="50% Off"
          title="VIP"
          price="₹ 2999/-"
          access = "Buy Now!"
          description={[
            "Pages: 200 Pages",
            "Accuracy Required: 60.00%",
            "Max Errors Accepted: 40.00%",
            "Earning Per Page: Rs. 180.00/-",
            "Contract Duration: 12 Months",
            "Freelancer Fee: Rs. 2,999/-",
            "Minimum Submission: 150 Pages",
            "Work Duration: 30 Days",
            "Payment: Rs. 36,000/-"
          ]}
          onAccessClick={handleAccessClick}
        />

      </div>
      {showModal && (
      <EnquiryModal
        selectedPlan={selectedPlan}
        onClose={closeModal}
      />
      )}
    </div>
  )
}

export default Project
