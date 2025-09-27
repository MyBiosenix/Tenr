import React,{useState} from 'react'
import '../styles/project.css'
import ProjectProp from '../props/ProjectProp'
import EnquiryModal3 from '../Modals/EnquiryModal3'

function Project3() {
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
      <h3 id='vip'>Bank Captcha Verifier</h3>
      <div className='pricingdiv1'>
        <ProjectProp
          proj="Bank Captcha Verifier"
          title="Gold"
          price="₹ 1999/-"
          access="Buy Now!"
          description={[
            "Captcha Count: 16000",
            "Contact Duration : 06 Month",
            "Skip Accuracy: 0%",
            "Freelancer Fee: Rs.1999/-",
            "Per Captcha Amount: Rs 1/-",
            "Work Duration: 1 Month",
            "Payment : Rs. 16,000/-",
            "System: Smart Phone Or Pc"
          ]}
          onAccessClick={handleAccessClick}
        />


        <ProjectProp
          proj="Bank Captcha Verifier"
          discount="35% Off"
          title="Diamond"
          ip="₹ 6000"
          price="₹ 3999/-"
          access="Buy Now"
          className="highlight"
          description={[
            "Captcha Count: 16000",
            "Contract Duration: 33 Months",
            "Skip Accuracy: 0%",
            "Freelancer Fee: Rs.3,999/-",
            "Per Captcha Amount: Rs 3/-",
            "Work Duration: 1 Month",
            "Payment: Rs. 48,000/-",
            "System: Smart Phone Or Pc",
          ]}
          onAccessClick={handleAccessClick}
        />


        <ProjectProp
          proj="Bank Captcha Verifier"
          discount="25% Off"
          title="VIP"
          ip="₹ 4000"
          price="₹ 2999/-"
          access="Buy Now!"
          description={[
            "Captcha Count: 16000",
            "Contract Duration: 12 Months",
            "Skip Accuracy: 0%",
            "Freelancer Fee: Rs.2,999/-",
            "Per Captcha Amount: Rs 1.5/-",
            "Work Duration: 1 Month",
            "Payment: Rs. 24,000/-",
            "System: Smart Phone Or Pc",
          ]}
          onAccessClick={handleAccessClick}
        />

      </div>
      {showModal && (
        <EnquiryModal3
          show={showModal}
          selectedPlan={selectedPlan}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default Project3
