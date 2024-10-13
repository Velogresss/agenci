import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './AboutUs.module.css';
import ImageAbout from '../../../img/ImageForAboutMainComponent.png'


function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className={classes.aboutUsContainer}>
            <div className={classes.aboutUsH1Container}>
                <h1 className={classes.aboutUsH1}>{t('aboutUs.title')}</h1>
            </div>
            <div className={classes.AboutUsContainerForAll}>
            <div className={classes.imageSection}>
                <img 
                    src={ImageAbout}
                    alt={t('aboutUs.title')}
                    className={classes.aboutUsImage}
                />
            </div>
            <div className={classes.textSection}>
                <p className={classes.textSectionP}>{t('aboutUs.description')}</p>
                <button className={classes.learnMoreButton}>{t('aboutUs.button')}</button>
            </div>
            </div>
        </div>
    );
}

export default AboutUs;