import React, { useState } from 'react';
import '../styles/faq.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Where is TENR Global Solution Located?',
      answer:
        'TENR Global Solutions is located in Bangalore, India. Their office is in the Koramangala area, with the specific address listed as 1st Floor, 4th B Main, OMBR Layout, Banaswadi, BANGALORE, Karnataka, India - 560043.',
    },
    {
      question: 'What services does TENR Global Solution provide?',
      answer:
        'We help people find genuine online jobs by identifying the real 25% among the 75% of scams. Our team researches, verifies, and shares only trusted opportunities. Thousands have earned real income through our guidance—saving time, avoiding fraud, and building a better financial future.',
    },
    {
      question: 'What do candidates say about TENR Global Solution?',
      answer:
        'Public reviews for our job platform are largely positive, with users appreciating the genuine job listings, transparent guidance, and timely support. Many have found real income opportunities through our verified programs and praise the ease of use and trustworthiness of our services. While a few negative reviews mention skepticism due to the rise of online scams, most are outdated or based on misunderstandings—our current platform maintains a strong reputation for credibility and consistent results.',
    },
  ];

  return (
    <div className='myfaqs'>
      <h2>Frequently Asked Questions</h2>
      <div className='faqs'>
        {faqData.map((faq, index) => (
          <div className='in-faq' key={index}>
            <p className='faq-question' onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}>&#9662;</span>
            </p>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
