import React from 'react';
// import people from '../../assets/people.png';
// import ai from '/bg-logo.svg';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">CYBER SECURITY ASSOCIATION</h1>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started </button>
      </div> 

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>12 people requested access a visit in last 24 hours</p>
      </div>
      */}
    </div>

    <div className="gpt3__header-image">
      <img src='/bg-logo.svg' />
    </div>
  </div>
);

export default Header;
