import React, { useState } from 'react';

/**
 * Компонент поисковой строки.
 */
export const Search: React.FC<{ sections: string[]; onSelect: (section: string) => void }> = ({ sections, onSelect }) => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSelect(selectedSection);
    console.log(`Поиск по разделу: ${selectedSection}, Запрос: ${query}`);
  };

  return (
    <div>
      <div>
        {sections.map((section, index) => (
          <button key={index} onClick={() => setSelectedSection(section)}>
            {section}
          </button>
        ))}
      </div>
      <input
        type="text"
        // placeholder="Поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Найти</button>
    </div>
  );
};
