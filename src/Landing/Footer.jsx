import React from 'react';
import './Footer.css';

import { IoCallSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

import Contacts from './Contact.json';

const Footer = () => {
  const icons = {
    IoCallSharp: <IoCallSharp />,
    FaLocationDot: <FaLocationDot />,
    IoMail: <IoMail />
  };

  return (
    <div className="footer-container">
      {Contacts.map((curr, idx) => {
        const {icon,title,details} = curr;
        return <div className="footer-item" key={idx}>
          <div className="footer-icon">
            <p>{icons[icon]}</p>
          </div>
          <div className="footer-text">
            <h5>{title}</h5>
            <p>{details}</p>
          </div>
        </div>
      })}
    </div>
  );
};

export default Footer;
