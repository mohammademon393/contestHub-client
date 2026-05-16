import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivetRoute = () => {
    const {user, loading} = useAuth();

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }

    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;