// App.jsx

import React, { useState } from 'react';
import RegionSelector from './RegionSelector';
import NavigationLink from './NavigationLink';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="app-container">
      <header>
        <h1>DevOps Dashboard</h1>
      </header>

      <RegionSelector onSelectRegion={handleRegionChange} />

      {selectedRegion ? (
        <div className="navigation-links">
          <NavigationLink
            label="CF Logs Dashboard"
            url={`https://logs.cf.${selectedRegion}.hana.ondemand.com/app/dashboards#/view/Overview`}
          />
          <NavigationLink
            label="PAPM Application"
            url={`https://papm-cloud-operations-${selectedRegion}.${selectedRegion}.papm.cloud.sap/`}
          />
          <NavigationLink
            label="Feature Flags Dashboard"
            url={`https://papmcloud-prod.feature-flags-dashboard.cfapps.${selectedRegion}.hana.ondemand.com/index.html`}
          />
          <NavigationLink
            label="Subscription Management"
            url={`https://papmcloud-prod.subscription-management-dashboard.cfapps.${selectedRegion}.hana.ondemand.com/`}
          />
          <NavigationLink
            label="UM Application"
            url={`https://papm-cloud-operations-${selectedRegion}.${selectedRegion}.papm.cloud.sap/ace/cp.portal/site#Shell-home`}
          />
        </div>
      ) : (
        <div className="alert">
          Please select a region.
        </div>
      )}
    </div>
  );
};

export default App;
