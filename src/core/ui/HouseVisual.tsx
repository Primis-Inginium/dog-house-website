import React from 'react';
import styles from './HouseVisual.module.css';
import { DogHouseStyle } from '@core/types/dog-house';

interface HouseVisualProps {
  style: DogHouseStyle;
  colors: {
    primary: string;
    secondary: string;
    roof: string;
  };
  size?: number;
}

export const HouseVisual: React.FC<HouseVisualProps> = ({ style, colors, size = 150 }) => {
  const containerStyle = {
    '--primary-color': colors.primary,
    '--secondary-color': colors.secondary,
    '--roof-color': colors.roof,
    width: `${size}px`,
    height: `${size}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={containerStyle}>
      {style === 'Classic' && (
        <div className={styles.classic}>
          <div className={styles.roof} />
          <div className={styles.base} />
          <div className={styles.door} />
        </div>
      )}
      {style === 'Modern' && (
        <div className={styles.modern}>
          <div className={styles.roof} />
          <div className={styles.base} />
          <div className={styles.window} />
          <div className={styles.door} />
        </div>
      )}
      {style === 'Eco' && (
        <div className={styles.eco}>
          <div className={styles.garden} />
          <div className={styles.roof} />
          <div className={styles.base} />
          <div className={styles.door} />
        </div>
      )}
    </div>
  );
};
