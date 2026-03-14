import React from 'react';
import { DogHouseCatalog } from '@features/catalog/DogHouseCatalog';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7fafc' }}>
      <DogHouseCatalog />
    </main>
  );
}
