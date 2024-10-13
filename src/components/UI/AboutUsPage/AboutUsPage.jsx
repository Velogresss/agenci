import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageAbout1 from '../../../img/AboutUs/travel-2650303_1280.png';
import ImageAbout2 from '../../../img/AboutUs/hallstatt-3609863_1280.png';
import classes from './AboutUsPage.module.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className={classes.about_us_container}>
      <h1>{t('aboutUsPage.title')}</h1>

      <p>
        {t('aboutUsPage.description')}
      </p>

      <div className={classes.about_us_features}>
        <div className={classes.about_us_text}>
          <h2>{t('aboutUsPage.titleAdvantages')}</h2>
          <ul>
            <li>
              <strong>{t('aboutUsPage.titleAdvantages1')}</strong>{t('aboutUsPage.advantages1')}
            </li>
            <li>
              <strong>{t('aboutUsPage.titleAdvantages2')}</strong>{t('aboutUsPage.advantages2')}
            </li>
            <li>
              <strong>{t('aboutUsPage.titleAdvantages3')}</strong>{t('aboutUsPage.advantages3')}
            </li>
          </ul>
        </div>
        <div>
          <img 
            src={ImageAbout1}
            alt="Pin on map"
            className={classes.img}
          />
        </div>
      </div>

      <p>
        {t('aboutUsPage.addInfo')}
      </p>

      <div>
        <img 
          src={ImageAbout2} 
          alt="Beautiful landscape"
          className={classes.about_us_landscape}
        />
      </div>
    </div>
  );
}

export default About;