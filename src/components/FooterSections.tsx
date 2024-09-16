import React from 'react';
// import { FooterSection } from './FooterSection';
import { SectionProps, WeatherItem, VisitItem, ProgramItem, AirItem } from '../types';

/**
 * Компонент для отображения всех разделов подвала.
 */
interface FooterSectionsProps {
  sections: SectionProps[];
}

export const FooterSections: React.FC<FooterSectionsProps> = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          {section.title === 'Погода' && section.items.map((item, idx) => (
            <div key={idx}>
              <img src={(item as WeatherItem).image} alt="Погода" />
              <div>{'+'+(item as WeatherItem).currentWeather}</div>
              <div>{`Утром: +${(item as WeatherItem).morningWeather}`}</div>
              <div>{`Днем: +${(item as WeatherItem).dayWeather}`}</div>
            </div>
          ))}
          {section.title === 'Посещаемое' && section.items.map((item, idx) => (
            <div key={idx}>
              {`${(item as VisitItem).item} - ${(item as VisitItem).detail}`}
            </div>
          ))}
          {section.title === 'Телепрограмма' && section.items.map((item, idx) => (
            <div key={idx}>
              <div>{`${(item as ProgramItem).time} - ${(item as ProgramItem).name} (${(item as ProgramItem).channel})`}</div>
            </div>
          ))}
          {section.title === 'Эфир' && section.items.map((item, idx) => (
            <div key={idx}>
              <button>{(item as AirItem).startButton}</button>
              <div>{(item as AirItem).name}</div>
              <div>{(item as AirItem).wave}</div>
            </div>
          ))}
          {section.title !== 'Погода' && section.title !== 'Посещаемое' && section.title !== 'Телепрограмма' && section.title !== 'Эфир' && 
            section.items.map((item, idx) => (
              <div key={idx}>{item as string}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
