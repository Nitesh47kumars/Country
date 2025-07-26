import React from 'react';
import './Error.css';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Error = ({
  title = "Something went wrong",
  message = "An unexpected error has occurred. Please try again later."
}) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='error-container'>
        <div className="error-card">
        <div className="error-icon">
            <FaExclamationTriangle />
        </div>
        <div className="error-content">
            <h2 className="error-title">{title}</h2>
            <p className="error-message">{message}</p>
            <button className="error-button" onClick={handleGoHome}>
            Go to Home Page
            </button>
        </div>
        </div>
    </div>
  );
};

export default Error;
