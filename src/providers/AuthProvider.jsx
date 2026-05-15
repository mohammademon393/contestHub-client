import React from 'react';
import AuthContext from '../context/AuthContext';

const AuthProvider = () => {

    const authInfo = {
        
    }

    return (
        <AuthContext value={authInfo}>

        </AuthContext>
    );
};

export default AuthProvider;