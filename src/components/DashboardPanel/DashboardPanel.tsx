// import { useState } from 'react'

// function App() {
//   return (
//     <>
//       <div className="Dashboard_Panel">
//         <button className="dashboard">Dashboard</button>
//         <button className="setting">Setting</button>
//       </div>
//     </>
//   )
// }

// export default 

import React from 'react';
import './DashboardPanel.css';

const DashboardPanel: React.FC = () => {
  return (
    <>
      <div className="Dashboard_Panel">
        <button className="dashboard">Dashboard</button>
        <button className="setting">Settings</button>

        </div>
    </>
  );
};

export default DashboardPanel;