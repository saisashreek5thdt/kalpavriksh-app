import React from 'react';
import Navbar from "../shared/Navbar";
import AdminTabs from '../shared/AdminTabs';

const AdminDashboard = () => {
  return (
    <>
        {/* Dashboard Container Starts Here */}
        <div className="dashboard__Container">
            <Navbar />
            <AdminTabs />
        </div>
        {/* Dashboard Container Ends Here */}
    </>
  )
}

export default AdminDashboard;