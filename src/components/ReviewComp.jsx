import React, { useState } from 'react';
import '../styles/reviewcomp.css';
import ReviewPageProp from '../props/ReviewPageProp';
import { FaStar, FaPhone } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import mymap from '../assets/mymap.png';
import locimg from '../assets/locimg.png';
import office3 from '../assets/office3.jpg';
import world from '../assets/world.png';
import raju from '../assets/raju.jpg';
import { useNavigate } from 'react-router-dom';
import ReviewModal from '../Modals/ReviewModals';
import anuj from '../assets/anuj.jpg'
import review11 from '../assets/review11.webp'
import review6 from '../assets/review6.jpg'
import review5 from '../assets/review5.jpg'
import review8 from '../assets/review8.jpg'
import review3 from '../assets/review3.jpg'
import review7 from '../assets/review7.jpg'
import review4 from '../assets/review4.jpg'
import review9 from '../assets/review9.jpg'
import vishal from '../assets/vishal.jpg'
import sakshi from '../assets/sakshi.jpg'
import vaishnavi from '../assets/vaishnavi.jpg'
import sahil from '../assets/sahil.jpeg'
import sonali from '../assets/sonali.jpg'
import kunal from '../assets/kunal.avif'
import aakash from '../assets/aakash.jpg'


function ReviewComp() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const allReviews = [
    {
      name: "Raju Karira",
      icon: raju,
      review: "Great experience so far! Completed 3 projects and got paid on time each time. Totally legit.",
      time: "2 days ago",
      reply: "Thank you, Raju! Glad to know you had a great experience."
    },
    {
      name: "Anuj Mota",
      icon: anuj,
      review: "It's best for the people who want to work from Home.It's very Supporting.I am really happy for believing in this and getting paid for the work",
      time: "3 days ago"
    },
    {
      name: "Vaishali Shellar",
      icon: review11,
      review: "Really happy for believing in this and getting paid",
      time: "1 Week ago",
      reply: "Thank you Vaishali! Happy to have you onboard."
    },
    {
      name: "Kajal Kamra",
      icon: review6,
      review: "This isn’t just a platform—it’s a supportive community for remote job seekers. I highly appreciate that.",
      time: "12 days ago",
      reply: "Thank You"
    },
    {
      name: "Vivek Sharma",
      icon: review5,
      review: "Super easy to use. Good for beginners.",
      time: "13 days ago"
    },
    {
      name: "Neha Gupta",
      icon: review8,
      review: "Excellent experience with this freelancing service.",
      time: "17 days ago"
    },
    {
      name: "Amit Roy",
      icon: review3,
      review: "This is a legitimate work-from-home opportunity.",
      time: "18 days ago"
    },
    {
      name: "Divya Mehta",
      icon: review7,
      review: "Reliable platform for remote work. Payments are always on time, and support is responsive.",
      time: "22 days ago"
    },
    {
      name: "Rohan Desai",
      icon: review4,
      review: "Genuine payment and real work.",
      time: "27 day ago"
    },
    {
      name: "Preeti Singh",
      icon: review9,
      review: "Supportive team and smooth onboarding.",
      time: "1 Month ago"
    },
    {
      name: "Vishal Yadav",
      icon: vishal,
      review: "A trustworthy platform—easy onboarding and genuine work opportunities.",
      time: "1 Month ago",
      reply: "ThankYou for that"
    },
    {
      name: "Sakshi Ghorpade",
      icon: sakshi,
      review: "I appreciate how smooth and transparent the entire process is, from applying to getting paid.",
      time: "1 Month ago"
    },
    {
      name: "Vaishnavi Chouhan",
      icon: vaishnavi,
      review: "The support team is quick to respond and the projects are legit. Great experience so far.",
      time: "1 Month ago"
    },
    {
      name: "Sahil Malik",
      icon: sahil,
      review: "One of the few freelancing sites that actually delivers on its promises. Highly recommended.",
      time: "1 Month ago"
    },
    {
      name: "Sonali Samane",
      icon: sonali,
      review: "Great experience! I've completed multiple tasks and every payment came through without delay.",
      time: "1 Month ago"
    },
    {
      name: "Kunal Vishwakama",
      icon: kunal,
      review: "A fantastic platform for anyone starting out in remote work. Clear instructions and helpful team.",
      time: "1 Month ago"
    },
    {
      name: "Aakash Kushwaha",
      icon: aakash,
      review: "Simple, efficient, and trustworthy. Finally found a freelancing space that respects time and skill.",
      time: "1 Month ago"
    },
  ];

  const handleReviewSubmit = (data) => {
    console.log("Review Submitted:", data);
  };

  const loadMoreReviews = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const getOrderedWeekDays = () => {
    const hoursMap = {
      Monday: '10 am – 7 pm',
      Tuesday: '10 am – 7 pm',
      Wednesday: '10 am – 7 pm',
      Thursday: '10 am – 7 pm',
      Friday: '10 am – 7 pm',
      Saturday: '10 am – 7 pm',
      Sunday: 'Closed'
    };

    const weekDays = Object.keys(hoursMap);
    const todayIndex = new Date().getDay(); 
    const jsToCustomIndex = [6, 0, 1, 2, 3, 4, 5];
    const todayCustomIndex = jsToCustomIndex[todayIndex];

    const ordered = [
      {
        day: weekDays[todayCustomIndex],
        time: hoursMap[weekDays[todayCustomIndex]],
        isToday: true
      }
    ];

    for (let i = 1; i < 7; i++) {
      const nextIndex = (todayCustomIndex + i) % 7;
      ordered.push({
        day: weekDays[nextIndex],
        time: hoursMap[weekDays[nextIndex]],
        isToday: false
      });
    }

    return ordered;
  };

  return (
    <div className='getit'>
      <div className='reviewpage'>
        <h2 className='myh2'>Reviews</h2>
        <div className='in-re'>
          {allReviews.slice(0, visibleCount).map((item, index) => (
            <ReviewPageProp
              key={index}
              icon={item.icon}
              name={item.name}
              rate={<FaStar />}
              review={item.review}
              time={item.time}
              reply={item.reply}

            />
          ))}
          {visibleCount < allReviews.length && (
            <button className='load-more-btn' onClick={loadMoreReviews}>
              Load More...
            </button>
          )}
        </div>
      </div>

      <div className='rightcont'>
        <div className='myimgs12'>
          <img src={locimg} alt='office2' className='byy' />
          <div className='in-myimgs12'>
            <img src={mymap} alt='mymap' className='hyy' />
            <img src={office3} alt='office3' className='hyy' />
          </div>
        </div>

        <div className='names'>
          <h3>TENR Global Solution</h3>
          <div className='starts'>
            <label style={{ color: 'black' }}>4.2</label>
            <div className='rateicon1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='empty' /></div>
            <label><u>376 Reviews</u></label>
          </div>
        </div>

        <div className='mynavs'>
          <div className='in-mynavs' onClick={() => navigate('/')}>
            <img src={world} className='reviewpicon3' alt="Website" />
            <p>Website</p>
          </div>
          <div className='in-mynavs'>
            <FaPhone className='reviewpicon1' />
            <p>Phone</p>
          </div>
          <div className='in-mynavs' onClick={() => setShowModal(true)}>
            <MdReviews className='reviewpicon' />
            <p>Reviews!</p>
          </div>
        </div>

        <div className='add'>
          <p><span style={{ fontWeight: 'bold' }}>Address:</span> 1st Floor, 4th B Main, OMBR Layout, Banaswadi, , BANGALORE, Karnataka, India - 560043.</p>

          <div className='hours'>
            <details>
              <summary>
                <strong>Hours: {getOrderedWeekDays()[0].day} {getOrderedWeekDays()[0].time}</strong>
              </summary>
              <ul className='hours-list'>
                {getOrderedWeekDays().slice(1).map(({ day, time }, index) => (
                  <li key={index}>
                    {day}: <span>{time}</span>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>

      <ReviewModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleReviewSubmit}
      />
    </div>
  );
}

export default ReviewComp;