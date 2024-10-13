import React from 'react';
import RegistrationForm from '../components/UI/RegistrationForm/RegistrationForm'; 

function register() {
    const apiUrl = 'http://localhost:3000/'; 

    return (
        <div>
            <h1>Реєстрація користувача</h1>
            <RegistrationForm connection={apiUrl} />
        </div>
    );
}

export default register;