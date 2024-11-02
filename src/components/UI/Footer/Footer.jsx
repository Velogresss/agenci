import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Footer.module.css';
import LinksFooter from '../LinksFooter/LinksFooter';

import imgMC from '../../../img/footer/imageMasterCard.png';
import imgUATP from '../../../img/footer/imageUATP.png';
import imgVisa from '../../../img/footer/imageVisa.png';

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { t } = useTranslation();

  const isActive = (path) => currentPath === path ? classes.active : '';

  return (
    <footer className={classes.footer}>
      <div className={classes.section}>
        <h3>{t('Footer.AboutUs')}</h3>
        <ul>
          <li className={isActive('/contacts')}>
            <Link to="/contacts" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>{t('Footer.Contacts')}</p>
            </Link>
          </li>
          <li className={isActive('/flights')}>
            <Link to="/flights" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>{t('Footer.Flights')}</p>
            </Link>
          </li>
          <li className={isActive('/about')}>
            <Link to="/about" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>{t('Footer.About')}</p>
            </Link>
          </li>
          <li className={isActive('/accommodation')}>
            <Link to="/accommodation" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>{t('Footer.Accommodation')}</p>
            </Link>
          </li>
          <li className={isActive('/leisure')}>
            <Link to="/leisure" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>{t('Footer.Leisure')}</p>
            </Link>
          </li>
          <li className={isActive('/airport-taxi')}>
            <Link to="/airport-taxi" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>{t('Footer.AirportTaxi')}</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3>{t('Footer.OtherServices')}</h3>
        <ul>
          <li>
            <Link to="/all" className={isActive('/about')}>
              <p className={classes.LinkP}>{t('Footer.EventPlanning')}</p>
            </Link>            
          </li>
          <li>
            <Link to="/all" className={isActive('/about')}>
              <p className={classes.LinkP}>{t('Footer.CustomerSupport')}</p>
            </Link> 
          </li>
          <li>
            <Link to="/all" className={isActive('/about')}>
              <p className={classes.LinkP}>{t('Footer.Consultation')}</p>
            </Link>
          </li>
        </ul>

        <div className={classes.paymentSection}>
          <h3>{t('Footer.PaymentMethods')}</h3>
          <div className={classes.paymentIcons}>
            <img src={imgMC} alt="Mastercard" />
            <img src={imgUATP} alt="UATP" />
            <img src={imgVisa} alt="Visa" />
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h3>{t('Footer.Support')}</h3>
        <ul>
          <li className={isActive('/support')}>
            <Link to="/support" >
              <p className={classes.LinkP}>{t('Footer.CustomerSupportService')}</p>
            </Link>
          </li>
          <li className={isActive('/guarantee')}>
            <Link to="/guarantee">
              <p className={classes.LinkP}>{t('Footer.ServiceGuarantee')}</p>
            </Link>
          </li>
        </ul>
        <LinksFooter />
      </div>
    </footer>
  );
};

export default Footer;