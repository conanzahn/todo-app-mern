import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to="/register">Register</Link>
            <br />
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Dashboard;