import React from 'react';
import { NewsItemProps } from '../types';

/**
 * Компонент элемента новости.
 */
export const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => {
  return (
    <div>
      <img src={icon} alt={text} />
      <a href={link}>{text}</a>
    </div>
  );
};
