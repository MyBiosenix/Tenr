import React,{useState} from 'react'
import '../Styles/project.css'
import ProjectProp from '../props/ProjectProp'
import EnquiryModal2 from '../Modals/EnquiryModal2'

function Project2() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  
  const handleAccessClick = (plan, project) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className='inclusive1'>
      <h3 id='vip'>Data Segregation</h3>
      <div className='pricingdiv1'>
        <ProjectProp
          proj="Data Segregation"
          discount="50% Off"
          title="Gold"
          price="₹ 1999/-"
          access="Buy Now!"
          description={[
            "Total Forms: 2000",
            "Accuracy Required: 85.00%",
            "Max Errors Accepted: 15.00%",
            "Earning Per Form: Rs. 8.00/-",
            "Contract Duration: 06 Month",
            "Freelancer Fee: Rs. 1,999/-",
            "Minimum Submission: 1500 Forms",
            "Work Duration: 15 Days",
            "Payment : Rs. 16,000/-",
          ]}
          onAccessClick={handleAccessClick}
        />
 

        <ProjectProp
          proj="Data Segregation"
          discount="50% Off"
          title="Diamond"
          price="₹ 3,999/-"
          access="Buy Now"
          className="highlight"
          description={[
            "Total Forms: 3000",
            "Accuracy Required 50.00%",
            "Max Errors Accepted: 50.00%",
            "Earning Per Form: Rs. 16.00/-",
            "Contract Duration: 33 Months",
            "Freelancer Fee: Rs. 3,999/-",
            "Minimum Submission: 2000 Forms",
            "Work Duration: 30 Days",
            "Payment: Rs. 48,000/-"
          ]}
          onAccessClick={handleAccessClick}
        />


        <ProjectProp
          proj="Data Segregation"
          discount="50% Off"
          title="VIP"
          price="₹ 2999/-"
          access="Buy Now!"
          description={[
            "Total Forms: 3000",
            "Accuracy Required: 60.00%",
            "Max Errors Accepted: 40.00%",
            "Earning Per Form: Rs. 10.00/-",
            "Contract Duration: 12 Months",
            "Freelancer Fee: Rs. 2,999/-",
            "Minimum Submission: 2000 Forms",
            "Work Duration: 30 Days",
            "Payment: Rs. 30,000/-"
          ]}
          onAccessClick={handleAccessClick}
        />

      </div>
      {showModal && (
        <EnquiryModal2
          show={showModal}
          selectedPlan={selectedPlan}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default Project2