import i18n from 'i18next';
import {  useTranslation, initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutUs: {
        title: "About Us",
        description: `"Trip All In One" was launched with the goal of revolutionizing the travel planning experience. Our concept is to create a one-stop solution for all travel needs, providing customers with a seamless and convenient process from travel arrangements to returning home. We aim to become your reliable partner in the world of travel, offering a wide range of services and personalized solutions`,
        button: "Learn More"
      },
      aboutUsPage: {
        title: "About Us",
        description: `"Trip All in One" — is a leading travel company that specializes in creating unique and unforgettable journeys for each client. Our mission is to turn your dreams of a perfect vacation into reality, offering a wide range of travel services and an individual approach to each order.`,
        titleAdvantages: "Our advantages:",
        advantages1:"Our team consists of experienced specialists in the field of tourism, who constantly monitor new trends and the best offers on the market.",
        titleAdvantages1: "Professionalism:",
        advantages2:"We understand that every trip is unique, so we create offers that meet your specific needs and desires.",
        titleAdvantages2: "Individual approach:",
        advantages3:"Our goal is to provide impeccable service at all stages of your trip so you can enjoy every minute.",
        titleAdvantages3: "High quality service:",
        addInfo:`"Trip All in One" — is not just a travel company, but your reliable partner in the world of travel. We strive not only to meet your expectations, but to exceed them, giving you the opportunity to create the best memories to last a lifetime. All in One: One Klick - One - Tripp!`
      },
      contactsPage: {
        title: "Our contacts",
        titleSub: "You can find out the details by calling:",
        titleEnd: "We work around the clock.",
        titleForm: "Feedback",
        formButton: "Send",
        nameLable: "Name",
        subjectLable: "Topic",
        messageLable: "Message"
      },
      header: {
        contacts: "Contacts",
        about: "About Us",
        login: "Login",
        register: "Register",
        flights: "Flights",
        accommodation: "Accommodation",
        leisure: "Leisure",
        airport_taxi: "Airport Taxi",
        personal_page: "Personal Page",
        logout: "Logout"
      },
      CardListAll: {
        France: "France",
        DetailsFrance: "France is known for its rich history, art, and cuisine. Explore the Eiffel Tower, Louvre Museum, and the beautiful French countryside.",
        Turkey: "Turkey",
        DetailsTurkey: "Turkey offers a unique blend of Eastern and Western cultures. Discover Istanbul’s historic mosques, bazaars, and beautiful coastlines.",
        Japan: "Japan",
        DetailsJapan: "Japan is a land of contrasts, where ancient traditions meet modern technology. Visit Tokyo, Kyoto, and enjoy stunning cherry blossoms in spring.",
        Dubai: "Dubai",
        DetailsDubai: "Dubai is famous for its luxury shopping, ultramodern architecture, and vibrant nightlife scene, including the iconic Burj Khalifa.",
        Korea: "Korea",
        DetailsKorea: "South Korea is a dynamic country with a rich cultural heritage. Explore Seoul’s palaces, K-pop culture, and traditional Korean cuisine.",
      },
      ImageGalleryLesure: {
        jungleTitle: "5 places you must not miss in the Jungle",
        africaTitle: "5 best things to do around Africa",
        chinaTitle: "5 best places to visit in China",
      },
      flightSearch: {
        searсh: "Search",
        cityArrival: "City of arrival",
        cityDeparture: "City of departure"
      },
      cardList:{
        title: 'Popular tours',
      },
      POCC: {
        title: 'Promotional offers',
      },
      Footer: {
        AboutUs: "About Us",
        Contacts: "Contacts",
        Flights: "Flights",
        About: "About Us",
        Accommodation: "Accommodation",
        Leisure: "Leisure",
        AirportTaxi: "Airport Taxi",
        OtherServices: "Other Services",
        EventPlanning: "Event planning and execution for clients and partners",
        CustomerSupport: "Customer support before and after the trip",
        Consultation: "Consultation and information on travel services",
        PaymentMethods: "Payment Methods",
        Support: "Support",
        CustomerSupportService: "Customer Support Service",
        ServiceGuarantee: "Service Guarantee"
      },
      offers: [
        {
          imgUrl: 'myImage1',
          discount: 39,
          oldPrice: '400$',
          newPrice: '302$',
          title: 'Flight tour to Prague',
          description: 'This is the largest castle complex in the world, a symbol of the Czech state for over a thousand years. It is included in the UNESCO World Heritage list and the Guinness Book of Records...',
        },
        {
          imgUrl: 'myImage2',
          discount: 55,
          oldPrice: '400$',
          newPrice: '190$',
          title: 'Two Capitals: Yerevan and Tbilisi',
          description: 'Discover the charm and rich cultural traditions of Yerevan and Tbilisi in one unforgettable journey!',
        },
        {
          imgUrl: 'myImage3',
          discount: 12,
          oldPrice: '400$',
          newPrice: '372$',
          title: 'Lavender in Provence',
          description: 'Immerse yourself in the atmosphere of Provence, where luxurious lavender fields stretch to the horizon, creating incredible landscapes that enchant with their purple glow.',
        },
        {
          imgUrl: 'myImage4',
          discount: 29,
          oldPrice: '558$',
          newPrice: '396$',
          title: 'Tour to Cyprus',
          description: 'Welcome to Cyprus, the island that is the birthplace of the goddess of love, Aphrodite. Here, out of 365 days a year, 300 are sunny! Dive into the warm and sunny spring, enjoying...',
        },
        {
          imgUrl: 'myImage5',
          discount: 50,
          oldPrice: '408$',
          newPrice: '204$',
          title: 'Tulip Festival in Istanbul',
          description: 'We invite you to enjoy the bright colors and aromas at the Tulip Festival in Istanbul, where this beautiful floral event...',
        },
        {
          imgUrl: 'myImage6',
          discount: 60,
          oldPrice: '491$',
          newPrice: '196$',
          title: 'Roman Weekend',
          description: 'Set off on an exciting journey to Rome for a wonderful weekend where history, culture, and gastronomy blend in perfect harmony.',
        }
      ]
    }
  },
  uk: {
    translation: {
      aboutUs: {
        title: "Про нас",
        description: `"Trip All in One" — це передова туристична компанія, яка спеціалізується на створенні унікальних і незабутніх подорожей для кожного клієнта. Наша місія — перетворити ваші мрії про ідеальний відпочинок на реальність, пропонуючи широкий спектр туристичних послуг та індивідуальний підхід до кожного замовлення.`,
        button: "Переглянути"
      },
      aboutUsPage: {
        title: "Про нас",
        description: `"Trip All in One" — це передова туристична компанія, яка спеціалізується на створенні унікальних і незабутніх подорожей для кожного клієнта. Наша місія — перетворити ваші мрії про ідеальний відпочинок на реальність, пропонуючи широкий спектр туристичних послуг та індивідуальний підхід до кожного замовлення.`,
        titleAdvantages: "Наші переваги:",
        advantages1:"Наша команда складається з досвідчених фахівців у сфері туризму, які постійно відстежують нові тренди і найкращі пропозиції на ринку.",
        titleAdvantages1:"Професіоналізм:",
        advantages2:"Ми розуміємо, що кожна подорож унікальна, тому створюємо пропозиції, що відповідають вашим конкретним потребам і бажанням",
        titleAdvantages2:"Індивідуальний підхід:",
        advantages3:"Наша мета — забезпечити бездоганний сервіс на всіх етапах вашої подорожі, щоб ви могли насолоджуватися кожною хвилиною.",
        titleAdvantages3:"Висока якість обслуговування:",
        addInfo:`"Trip All in One" — це не просто туристична компанія, а ваш надійний партнер у світі подорожей. Ми прагнемо не тільки виконати ваші очікування, а й перевершити їх, надаючи вам можливість створити найкращі спогади на все життя. All in One: One Klick - One - Tripp!`
      },
      contactsPage: {
        title: "Наші контакти",
        titleSub: "Дізнатися за подробностями можна за телефонами:",
        titleEnd: "Працюємо круглосуточно.",
        titleForm: "Зворотній зв’язок",
        formButton: "Надіслати",
        nameLable: "Ім'я",
        subjectLable: "Тема",
        messageLable: "Повідомлення"
      },
      header: {
        contacts: "Контакти",
        about: "Про нас",
        login: "Увійти",
        register: "Реєстрація",
        flights: "Авіарейси",
        accommodation: "Помешкання",
        leisure: "Дозвілля",
        airport_taxi: "Таксі з/до аеропорту",
        personal_page: "Особистий кабінет",
        logout: "Вийти"
      },
      CardListAll: {
        France: "Франція",
        DetailsFrance: "Франція відома своєю багатою історією, мистецтвом і кухнею. Відвідайте Ейфелеву вежу, Лувр і мальовничу французьку провінцію.",
        Turkey: "Туреччина",
        DetailsTurkey: "Туреччина поєднує східні та західні культури. Відкрийте для себе історичні мечеті, базари Стамбула і красиві узбережжя.",
        Japan: "Японія",
        DetailsJapan: "Японія – це країна контрастів, де древні традиції поєднуються з сучасними технологіями. Відвідайте Токіо, Кіото, насолодіться сакурою навесні.",
        Dubai: "Дубай",
        DetailsDubai: "Дубай відомий розкішними магазинами, ультрасучасною архітектурою та нічним життям, включаючи знаковий Бурдж Халіфа.",
        Korea: "Корея",
        DetailsKorea: "Південна Корея – це динамічна країна з багатою культурною спадщиною. Досліджуйте палаци Сеула, культуру K-pop і традиційну кухню.",
      },
      ImageGalleryLesure: {
        jungleTitle: "5 місць які ви не повинні пропустити в Джунглях",
        africaTitle: "5 найкращих речей, якими можна зайнятися в околицях Африки",
        chinaTitle: "5 найкращих місць, які тільки можна відвідати в Китаї",
      },
      flightSearch: {
        searсh: "Пошук",
        cityArrival: "Місто прибуття",
        cityDeparture: "Місто вильоту"
      },
      cardList: {
        title: 'Популярні тури',
      },
      POCC: {
        title: 'Акційні пропозиції',
      },
      Footer: {
        AboutUs: "Про нас",
        Contacts: "Контакти",
        Flights: "Авіарейси",
        About: "Про нас",
        Accommodation: "Помешкання",
        Leisure: "Дозвілля",
        AirportTaxi: "Таксі з/до аеропорту",
        OtherServices: "Інші послуги",
        EventPlanning: "Планування та проведення заходів для клієнтів та партнерів",
        CustomerSupport: "Підтримка клієнтів до та після подорожі",
        Consultation: "Консультації та надання інформації про туристичні послуги",
        PaymentMethods: "Способи оплати",
        Support: "Підтримка",
        CustomerSupportService: "Служба підтримки клієнтів",
        ServiceGuarantee: "Гарантія обслуговування"
      },
      offers: [
        {
          imgUrl: 'myImage1',
          discount: 39,
          oldPrice: '20498',
          newPrice: '12481 UAH',
          title: 'Авіатур до Праги',
          description: 'Це найбільший замковий комплекс у світі, символ чеської держави вже понад тисячу років. Він включений до списку Всесвітньої спадщини ЮНЕСКО та книги рекордів Гіннеса...',
        },
        {
          imgUrl: 'myImage2',
          discount: 55,
          oldPrice: '20829',
          newPrice: '12481 UAH',
          title: 'Дві столиці: Єреван та Тбілісі',
          description: 'Відкрийте для себе чарівність і багатство культурних традицій Єревану і Тбілісі в одному незабутньому подорожі!',
        },
        {
          imgUrl: 'myImage3',
          discount: 12,
          oldPrice: '6281',
          newPrice: '4835 UAH',
          title: 'Лаванда в Прованс',
          description: 'Зануртеся в атмосферу Провансу, де розкішні поля лаванди розстилаються до горизонту, створюючи неймовірні пейзажі, що зачаровують своїм фіолетовим сяйвом.',
        },
        {
          imgUrl: 'myImage4',
          discount: 29,
          oldPrice: '23061',
          newPrice: '16365 UAH',
          title: 'Тур на Кіпр',
          description: 'Вас вітає Кіпр, острів, що є батьківщиною богині кохання Афродіти. Тут з 365 днів на рік 300 – це сонячні дні! Пориньте в теплу та сонячну весну, відпочиваючи...',
        },
        {
          imgUrl: 'myImage5',
          discount: 50,
          oldPrice: '16861',
          newPrice: '8430 UAH',
          title: 'Фестиваль тюльпанів в Стамбулі',
          description: 'Запрошуємо вас насолодитися яскравими кольорами та ароматами на Фестивалі тюльпанів у Стамбулі, де цей чудовий квітковий захід...',
        },
        {
          imgUrl: 'myImage6',
          discount: 60,
          oldPrice: '20292',
          newPrice: '8100 UAH',
          title: 'Римський вікенд',
          description: 'Вирушайте в захоплюючу подорож до Риму на чудовий вікенд, де історія, культура та гастрономія зливаються в ідеальному поєднанні.',
        }
      ],
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk', 
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;