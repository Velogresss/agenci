import React from 'react';
import RegistrationForm from '../components/UI/RegistrationForm/RegistrationForm'; 
import classes from './register.module.css'

function register() {
    return (
        <div className={classes.registerConatainer}>
            <h1>Реєстрація</h1>
            <RegistrationForm/>
        </div>
    );
}

export default register;