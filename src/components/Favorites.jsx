import React from 'react';

function Favorites({ favoritos, onSelect, nombrePaciente }) {
  if (favoritos.length === 0) return null;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 16px 10px 16px' }}>
      <h3 style={{ color: '#888', fontSize: '16px', marginBottom: '10px' }}>Mas usados</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {favoritos.map(emotion => (
          <button
            key={emotion.id}
            onClick={() => onSelect(emotion, nombrePaciente)}
            style={{
              backgroundColor: emotion.color,
              border: 'none',
              borderRadius: '14px',
              padding: '10px 18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
              boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
            }}
          >
            <span style={{ fontSize: '24px' }}>{emotion.emoji}</span>
            {emotion.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
