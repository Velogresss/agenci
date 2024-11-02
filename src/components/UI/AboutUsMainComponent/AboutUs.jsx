import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './AboutUs.module.css';
import ImageAbout from '../../../img/ImageForAboutMainComponent.png';
import ImageAbout1024 from '../../../img/ImageForAboutMainComponent1024.png';

import { Link } from 'react-router-dom';

function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className={classes.aboutUsContainer}>
            <div className={classes.aboutUsH1Container}>
                <h1 className={classes.aboutUsH1}>{t('aboutUs.title')}</h1>
            </div>
            <div className={classes.AboutUsContainerForAll}>
                <div className={classes.imageSection}>
                    <picture>
                        <source srcSet={ImageAbout} media="(min-width: 1601px)" />
                        <source srcSet={ImageAbout1024} media="(min-width: 900px) and (max-width: 1600px)" />
                        <source srcSet={ImageAbout} media="(max-width: 360px)" />
                        <img src={ImageAbout1024} alt={t('aboutUs.title')} className={classes.aboutUsImage} />
                    </picture>
                </div>
                <div className={classes.textSection}>
                    <p className={classes.textSectionP}>{t('aboutUs.description')}</p>
                    <Link to='/about'>
                        <button className={classes.learnMoreButton}>
                            {t('aboutUs.button')}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;