import React from 'react';

import classesflightP from './flightP.module.css'

import img from '../../img/AviaTrails/Bus.jpg'
import arrow from '../../img/AviaTrails/Arrow.png'

function About() {
    const goBack = () => {
    window.history.back();
    };

    return (
        <div className={classesflightP.allContainer}>
            <div>
                <h1>Преміум - економ</h1>
            </div>
            <div className={classesflightP.mainContainer}>
                <img className={classesflightP.mainImg} src={img} alt="" />
            <div className={classesflightP.mainText}>
                <p>Преміум-економічний клас (W) забезпечує підвищений комфорт.</p>
                <br/>
                <p>Реєстрація пасажирів цього класу здійснюється в аеропорту на стійках PRIORITY в пріоритетному порядку.</p>
                <br/>
                <p>Місця преміум-економічного класу розташовані у носовій частині літака в окремому салоні.</p>
                <br/>
                <p>Під час польоту пасажири отримують гаряче або холодне харчування, відповідно до класу обслуговування, а також можуть вибрати напої (чай, кава, негазована вода, сік).</p>
                <br/>
                <p>Висадка пасажирів також здійснюється в пріоритетному порядку. Норма безкоштовного провозу багажу становить 30 кг</p>
            </div>
            </div>
            <img className={classesflightP.arrow} src={arrow} onClick={goBack} alt="" />
        </div>
    )
}

export default About;