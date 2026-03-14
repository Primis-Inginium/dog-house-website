import React, { useState } from 'react';
import styles from './DogHouseCatalog.module.css';
import { HouseVisual } from '@core/ui/HouseVisual';
import { DogHouse, DogHouseStyle } from '@core/types/dog-house';

const MOCK_DOG_HOUSES: DogHouse[] = [
  {
    id: '1',
    name: 'The Classic Cabin',
    description: 'Traditional wooden dog house with a slanted roof.',
    price: 150,
    style: 'Classic',
    colors: { primary: '#a0522d', secondary: '#8b4513', roof: '#4a2c2a' }
  },
  {
    id: '2',
    name: 'Modern Loft',
    description: 'Minimalist design with large window and flat roof.',
    price: 250,
    style: 'Modern',
    colors: { primary: '#2d3748', secondary: '#1a202c', roof: '#4a5568' }
  },
  {
    id: '3',
    name: 'Eco Retreat',
    description: 'Eco-friendly materials with a living garden roof.',
    price: 320,
    style: 'Eco',
    colors: { primary: '#f6e05e', secondary: '#ecc94b', roof: '#38a169' }
  },
  {
    id: '4',
    name: 'Nordic Shelter',
    description: 'Clean lines and light wood for the modern canine.',
    price: 190,
    style: 'Classic',
    colors: { primary: '#e2e8f0', secondary: '#cbd5e0', roof: '#718096' }
  }
];

export const DogHouseCatalog: React.FC = () => {
  const [filter, setFilter] = useState<DogHouseStyle | 'All'>('All');

  const filteredHouses = filter === 'All' 
    ? MOCK_DOG_HOUSES 
    : MOCK_DOG_HOUSES.filter(h => h.style === filter);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dog House Catalog</h1>
        <div className={styles.filters}>
          {(['All', 'Classic', 'Modern', 'Eco'] as const).map(f => (
            <button 
              key={f} 
              className={`${styles.filterButton} ${filter === f ? styles.active : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.grid}>
        {filteredHouses.map(house => (
          <div key={house.id} className={styles.card}>
            <div className={styles.visualWrapper}>
              <HouseVisual style={house.style} colors={house.colors} size={200} />
            </div>
            <div className={styles.details}>
              <h2 className={styles.name}>{house.name}</h2>
              <p className={styles.description}>{house.description}</p>
              <div className={styles.footer}>
                <span className={styles.price}>${house.price}</span>
                <button className={styles.selectButton}>Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
