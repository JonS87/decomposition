import React from 'react';
import { Header } from './components/Header';
import { NewsList } from './components/NewsList';
import { CurrencyRates } from './components/CurrencyRates';
import { Advertisement } from './components/Advertisement';
import { Search } from './components/Search';
import { Banner } from './components/Banner';
import { FooterSections } from './components/FooterSections';
import { NewsItemProps, CurrencyRateProps, SectionProps, WeatherItem, VisitItem, ProgramItem, AirItem } from './types';

const newsData: NewsItemProps[] = [
  { icon: 'icon1.png', text: 'Путин упростил получение автомобильных номеров', link: '#' },
  { icon: 'icon1.png', text: 'В команде Зеленского раскрыли план реформ на Украине', link: '#' },
  { icon: 'icon1.png', text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье', link: '#' },
  { icon: 'icon1.png', text: 'Суд закрыл дело Демпартии США проив России', link: '#' },
  { icon: 'icon1.png', text: 'На Украине призвали создавать ракеты для ударов по Москве', link: '#' },
];

const currencyRates: CurrencyRateProps[] = [
  { currency: 'USD MOEX', rate: 63.52, change: +0.09 },
  { currency: 'EUR MOEX', rate: 70.86, change: +0.14 },
  { currency: 'Нефть', rate: 64.90, change: +1.63 },
];

const sectionsData: SectionProps[] = [
  { title: 'Видео', items: ['Видео 1', 'Видео 2'], selected: false },
  { title: 'Картинки', items: ['Картинка 1', 'Картинка 2'], selected: false },
  { title: 'Новости', items: ['Новость 1', 'Новость 2'], selected: false },
  { title: 'Карты', items: ['Карта 1', 'Карта 2'], selected: false },
  { title: 'Маркет', items: ['Товар 1', 'Товар 2'], selected: false },
  { title: 'Переводчик', items: ['Перевод 1', 'Перевод 2'], selected: false },
  { title: 'Эфир', items: ['Эфир 1', 'Эфир 2'], selected: false },
  { title: 'Ещё', items: ['Ещё 1', 'Ещё 2'], selected: false },
];

const sectionsFooter: SectionProps[] = [
  { title: 'Погода', items: [
      {
        image: 'weather_icon.png',
        currentWeather: '20°C',
        morningWeather: '15°C',
        dayWeather: '25°C',
      } as WeatherItem,
    ]
  },
  { title: 'Посещаемое', items: [
      { item: 'Недвижимость', detail: 'о сталинках' } as VisitItem,
      { item: 'Маркет', detail: 'люстры и светильники' } as VisitItem,
      { item: 'Авто.ру', detail: 'привод 4х4 до 500 000' } as VisitItem,
    ]
  },
  { title: 'Карта Германии', items: ['Расписание'] },
  { title: 'Телепрограмма', items: [
      { time: '02:00', name: 'ТНТ. Best', channel: 'ТНТ International' } as ProgramItem,
      { time: '02:15', name: 'Джинглики', channel: 'Карусель INT' } as ProgramItem,
      { time: '02:25', name: 'Наедине со всеми', channel: 'Первый' } as ProgramItem,
    ]
  },
  { title: 'Эфир', items: [
    { startButton: 'Запустить эфир', name: 'Управление как искусство', wave: 'Успех' } as AirItem,
    { startButton: 'Запустить эфир', name: 'Ночь. Мир в это время', wave: 'earth TV' } as AirItem,
    { startButton: 'Запустить эфир', name: 'Андрей Возн...', wave: 'Совершенно секретно' } as AirItem,
    ]
  },
];

const App: React.FC = () => {
  const handleSectionSelect = (section: string) => {
    console.log(`Выбран раздел для поиска: ${section}`);
  };
  
  return (
    <>
      <Header />
      <NewsList news={newsData} />
      <CurrencyRates rates={currencyRates} />
      <Advertisement 
        image="advertisement.jpg" 
        title="Работа над ошибками" 
        description="Смотрите на Яндексе и запоминайте" 
      />
      <Search sections={sectionsData.map(section => section.title)} onSelect={handleSectionSelect} />
      <Banner 
        imageUrl="banner.jpg" 
        linkUrl="https://example.com" 
        altText="Описание баннера" 
      />
      <FooterSections sections={sectionsFooter} />
    </>
  );
};

export default App;
