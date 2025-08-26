import React from 'react';
import '../styles/CyberpunkStickers.css';

const stickers = [
  { id: 1, name: 'Orangutan', image: '/assets/orangutan-sticker.png' },
  { id: 2, name: 'Mount Kinabalu', image: '/assets/kinabalu-sticker.png' },
  { id: 3, name: 'Rafflesia', image: '/assets/rafflesia-sticker.png' },
  { id: 4, name: 'Proboscis Monkey', image: '/assets/monkey-sticker.png' },
];

const CyberpunkStickers = () => {
  return (
    <div className="sticker-container">
      {stickers.map(sticker => (
        <div key={sticker.id} className="sticker">
          <img src={sticker.image} alt={sticker.name} />
        </div>
      ))}
    </div>
  );
};

export default CyberpunkStickers;
