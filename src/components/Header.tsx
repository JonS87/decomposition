import React from 'react';
import { Tabs } from './Tabs';

/**
 * Компонент заголовка страницы.
 */
export const Header: React.FC = () => {
  return (
    <header>
      <Tabs />
      <div>{new Date().toLocaleString()}</div>
    </header>
  );
};
