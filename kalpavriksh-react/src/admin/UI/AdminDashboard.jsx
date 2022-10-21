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
            <main>
                <div className="dashboard__Content">
                    {/* Replace with your content */}
                    <div className="dashboard__Content--Box">
                        <div className="dashboard__Content--Border" />
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
        {/* Dashboard Container Ends Here */}
    </>
  )
}

export default AdminDashboard;