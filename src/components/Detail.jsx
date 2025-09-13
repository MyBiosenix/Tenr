import React, { useEffect, useState } from 'react';
import '../styles/detail.css';
import menimg from '../assets/men.jpg';
import new1 from '../assets/new1-D2ZCefqd.jpg'
import new2 from '../assets/new2-BIRbaKMX.jpg'
import abimg from '../assets/abimg-db2x_AQD.jpg';
import { Typewriter } from 'react-simple-typewriter';

const images = [new1, new2, menimg, abimg];

function Detail() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="detail">
      <div className="slider">
        <img src={images[currentImage]} alt="sliding" className="slider-img" />
      </div>

      <div className="content">
        <h2>
          <Typewriter
            words={['Trusted experts in real and legitimate online home jobs.']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={20}
            deleteSpeed={20}
            delaySpeed={1000}
          />
        </h2>
        <p>
          Our team develops effective job programs based on thorough research and analysis. In today’s digital world,
          75% of online job offers are scams that waste people’s time and money. Our mission is to guide users toward
          the genuine 25% that truly deliver results. We provide up-to-date, verified job listings to help individuals
          avoid online fraud. Thousands of online workers have found real income sources through our assistance. We
          carefully sort and recommend only companies that actually pay. Whether part-time or full-time, you can earn
          from anywhere in your spare time. Our goal is to save your time, protect your effort, and support a better
          financial future.
        </p>
      </div>
    </div>
  );
}

export default Detail;
