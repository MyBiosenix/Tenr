import React from 'react'
import '../styles/reviews.css'
import '../props/ReviewProp'
import { FaStar } from 'react-icons/fa';
import google from '../assets/google.png';
import ReviewProp from '../props/ReviewProp';
import anuj from '../assets/anuj.jpg'
import raju from '../assets/raju.jpg'
import review6 from '../assets/review6.jpg'
import review11 from '../assets/review11.webp'

function Reviews() {
  return (
    <div className='reviewdiv'>
      <h2><u>Reviews</u></h2>
      <div className='grow'>
        <ReviewProp icon={google}
        content="It's best for the people who want to work from Home.It's very Supporting.I am really happy for believing in this and getting paid for the work"
        ratings={<FaStar/>}
        image={anuj}
        name="Anuj Mota"/>

        <ReviewProp icon={google}
        content="Great experience so far! Completed 3 projects and got paid on time each time. Totally legit."
        ratings={<FaStar/>}
        image={raju}
        name="Raju Karira"/>

        <ReviewProp icon={google}
        content="This isn’t just a platform—it’s a supportive community for remote job seekers. I highly appreciate that."
        ratings={<FaStar/>}
        image={review6}
        name="Kajal Kamra"/>

        <ReviewProp icon={google}
        content="From registration to payment, everything is smooth. It’s rare to find such transparent online job providers."
        ratings={<FaStar/>}
        image={review11}
        name="Vaishali Shellar"/>

      </div>

    </div>
  )
}

export default Reviews