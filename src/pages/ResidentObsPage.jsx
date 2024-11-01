import React, {useState} from 'react';
import HotelInfo from '../components/UI/ResidentObsComponents/HotelInfo/HotelInfo';
import PriceInfo from '../components/UI/ResidentObsComponents/PriceInfo/PriceInfo';
import GuestInfo from '../components/UI/ResidentObsComponents/GuestInfo/GuestInfo';
import SpecialRequests from '../components/UI/ResidentObsComponents/SpecialRequests/SpecialRequests';
import PromoCode from '../components/UI/ResidentObsComponents/PromoCode/PromoCode';
import styles from './ResidentObsPage.module.css';

import { useLocation } from 'react-router-dom'

const ResidentObsPage = () => {

const goBack = () => {
  window.history.back();
};

const location = useLocation();
const data = location.state?.data;

const [promoCode, setPromoCode] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.gridContainerMain}>
        <div className={styles.leftColumn}>
          <HotelInfo data={data}/>
          <GuestInfo />
          <SpecialRequests />
          <PromoCode promoCode={promoCode} setPromoCode={setPromoCode}/>
          <button onClick={goBack} className={styles.returnButton}>Відмінити</button>
        </div>
        <div className={styles.rightColumn}>
          <PriceInfo promoCode={promoCode} data={data}/>
        </div>
      </div>
    </div>
  );
}

export default ResidentObsPage;