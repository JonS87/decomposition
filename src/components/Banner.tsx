import React from 'react';
import { BannerProps } from '../types';

/**
 * Компонент рекламного баннера с изображением и ссылкой.
 */
export const Banner: React.FC<BannerProps> = ({ imageUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={altText} style={{ width: '100%', height: 'auto' }} />
    </a>
  );
};
