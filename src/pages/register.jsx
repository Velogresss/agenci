import React from 'react';
import RegistrationForm from '../components/UI/RegistrationForm/RegistrationForm'; 
import classes from './register.module.css'
import GetToken from '../components/UI/GetToken/GetToken' 

function register() {
    return (
        <div className={classes.registerConatainer}>
            <GetToken/>
            <h1>Реєстрація</h1>
            <RegistrationForm/>
        </div>
    );
}

export default register;