import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './LanguageSwitcher.module.css'; 
import uaIcon from '../../../img/switchLanguage/switchLanguageUA.png'; 
import enIcon from '../../../img/switchLanguage/switchLanguageUSA.png'; 

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('UA');

    const changeLanguage = (event) => {
        const language = event.target.value;
        setCurrentLanguage(language);
        i18n.changeLanguage(language === 'UA' ? 'uk' : 'en');
    };

    const languageIcon = currentLanguage === 'UA' ? uaIcon : enIcon;

    return (
        <div className={classes.language}>
            <img src={languageIcon} alt="Language" className={classes.languageIcon} />
            <select value={currentLanguage} onChange={changeLanguage}>
                <option value="UA">UA</option>
                <option value="EN">EN</option>
            </select>
        </div>
    );
}

export default LanguageSwitcher;