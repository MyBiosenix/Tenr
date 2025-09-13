import React,{useState} from 'react'
import '../Styles/project.css'
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
          discount="50% Off"
          title="Gold"
          price="₹ 1,999/-"
          access="Buy Now!"
          description={[
            "Captcha Count: 16000",
            "Contact Duration : 06 Month",
            "Skip Accuracy: 0%",
            "Freelancer Fee: Rs.1,999/-",
            "Per Captcha Amount: Rs 1/-",
            "Work Duration: 1 Month",
            "Payment : Rs. 16,000/-",
            "System: Smart Phone Or Pc"
          ]}
          onAccessClick={handleAccessClick}
        />


        <ProjectProp
          proj="Bank Captcha Verifier"
          discount="50% Off"
          title="Platinum"
          price="₹ 3,999/-"
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
          discount="50% Off"
          title="VIP"
          price="₹ 2,999/-"
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