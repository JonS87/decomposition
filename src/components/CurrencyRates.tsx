import React from 'react';
import { CurrencyRateProps } from '../types';

/**
 * Компонент курсов валют.
 */
export const CurrencyRates: React.FC<{ rates: CurrencyRateProps[] }> = ({ rates }) => {
  return (
    <div>
      {rates.map((rate, index) => (
        <div key={index}>
          {rate.currency}: {rate.rate} {rate.change>0 ? '+'+rate.change : '-'+rate.change}
        </div>
      ))}
    </div>
  );
};
