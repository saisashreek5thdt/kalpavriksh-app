import React, {useEffect} from "react";
import { useHistory } from 'react-router-dom';

const UserDashboard = () => {

    const history = useHistory();

        const role = JSON.parse(localStorage.getItem('kalpavriksh')).role
    const logoutHandler = (event) => {
        event.preventDefault();
        history.push('/');
    };

    return (
        <>
            <div>
                <h2>User Dashboard - {role}</h2>
                <button type="submit" onClick={logoutHandler}>Logout</button>
            </div>
        </>
    );
};

export default UserDashboard;