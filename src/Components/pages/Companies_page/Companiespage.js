import React from 'react';
import companies from '../../../Data/Companies_data'; // Import the data from data.js
import './companies.css';
const Companies = () => {
  return (
    <div className='company'>
      {companies.map((company, index) => (
  <div key={index} className="company-card">
    <h2>{company.name}</h2>
    <p>{company.details}</p>
    <a href={company.link} target="_blank" rel="noopener noreferrer">
      Visit Website
    </a>
  </div>
      ))}
    </div>
  );
};

export default Companies;
