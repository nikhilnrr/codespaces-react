// RegionSelector.jsx

import React from 'react';

const RegionSelector = ({ onSelectRegion }) => {
  const regions = [
    'br10',
    'ca10',
    'eu10',
    'us10',
    'ap12',
    'jp10',
    'ap10',
    'eu11',
    'eu20',
    'us21',
    'ap21',
    'ap20',
    'us20',
    'ch20',
    'eu30',
    'in30',
    'us30',
    'cn40',
    'us50',
  ];

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    onSelectRegion(selectedRegion);
  };

  return (
    <div className="region-selector-container"> {/* Updated class name for styling */}
    <select
      id="region"
      onChange={handleRegionChange}
      className="region-select"
      defaultValue="" // Set default value to the empty option
    >
      <option value="" disabled hidden>Select Region</option> {/* Updated for better UX */}
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  </div>

  );
};

export default RegionSelector;
