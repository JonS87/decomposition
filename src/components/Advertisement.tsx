import React from 'react';

/**
 * Компонент рекламы с изображением, заголовком и описанием.
 */
export const Advertisement: React.FC<{ image: string; title: string; description: string }> = ({ image, title, description }) => {
  return (
    <div>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
