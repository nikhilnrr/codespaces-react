// NavigationLink.jsx

import React from 'react';

const NavigationLink = ({ label, url }) => {
  return (
    <div className="navigation-link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </div>
  );
};

export default NavigationLink;