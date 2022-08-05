import React from "react";
import { useHistory } from 'react-router-dom';

const UserDashboard = () => {

    const history = useHistory();

    const logoutHandler = (event) => {
        event.preventDefault();
        history.push('/');
    };

    return (
        <>
            <div>
                <h2>User Dashboard</h2>
                <button type="submit" onClick={logoutHandler}>Logout</button>
            </div>
        </>
    );
};

export default UserDashboard;