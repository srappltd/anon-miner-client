import React from 'react';
import './OurTopIntegration.css';

import b1 from "../../assets/home/b1.png";
import b2 from "../../assets/home/b2.png";
import b2a from "../../assets/home/b4a.png";
import b3 from "../../assets/home/bb3.png";
import b4 from "../../assets/home/b4.png";
import b5a from "../../assets/home/b5.png";
import b5 from "../../assets/home/b7.png";
import b6 from "../../assets/home/b6.png";

const OurTopIntegration = () => {
  return (
    <div className="integration-wrapper">
      <div className="integration-text">
        <h2 className="integration-title">Our Top Integration</h2>
        <p className="integration-subtitle">Cloud mining is the easiest and most</p>
      </div>

      <div className="integration-logos">
        {[b1, b2, b3, b4, b5, b5a, b6, b2a].map((logo, index) => (
          <img src={logo} alt={`logo-${index}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurTopIntegration;
