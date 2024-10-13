import React from 'react';
// import { useTranslation } from 'react-i18next';
// import ImageAbout1 from '../img/AboutUs/travel-2650303_1280.png' 
// import ImageAbout2 from '../img/AboutUs/hallstatt-3609863_1280.png'

import AboutUsPage from '../components/UI/AboutUsPage/AboutUsPage'

function About() {
    // const { t } = useTranslation();

     return (

<AboutUsPage/>

// <div>
//       <h1>{t('aboutUsPage.title')}</h1>

//       <p>
//         {t('aboutUsPage.description')}
//       </p>

//       <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//         <div>
//           <h2>{t('aboutUsPage.titleAdvantages')}</h2>
//           <ul>
//             <li>
//               <strong>{t('aboutUsPage.titleAdvantages1')}</strong>{t('aboutUsPage.advantages1')}
//             </li>
//             <li>
//               <strong>{t('aboutUsPage.titleAdvantages2')}</strong>{t('aboutUsPage.advantages2')}
//             </li>
//             <li>
//               <strong>{t('aboutUsPage.titleAdvantages3')}</strong>{t('aboutUsPage.advantages3')}
//             </li>
//           </ul>
//         </div>
//         <div>
//           <img 
//             src={ImageAbout1}
//             alt="Pin on map"
//             style={{ width: '300px', borderRadius: '8px' }}
//           />
//         </div>
//       </div>

//       <p>
//         {t('aboutUsPage.addInfo')}
//       </p>

//       <div>
//         <img 
//           src={ImageAbout2} 
//           alt="Beautiful landscape"
//           style={{ width: '100%', borderRadius: '8px', marginTop: '20px' }}
//         />
//       </div>
//     </div>
    )
}

export default About;