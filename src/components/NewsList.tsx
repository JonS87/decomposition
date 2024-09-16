import React from 'react';
import { NewsItem } from './NewsItem';
import { NewsItemProps } from '../types';

/**
 * Компонент списка новостей.
 */
export const NewsList: React.FC<{ news: NewsItemProps[] }> = ({ news }) => {
  return (
    <div>
      {news.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
    </div>
  );
};
