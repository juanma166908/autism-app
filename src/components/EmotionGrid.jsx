import React, { useState } from 'react';
import EmotionButton from './EmotionButton';
import emotions from '../data/emotions';

const categorias = ['Todas', 'Emociones', 'Cuerpo', 'Necesidades', 'Actividades', 'Sensaciones'];

function EmotionGrid({ onSelect, nombrePaciente, generoPaciente, letraGrande }) {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');

  const emocionesFiltradas = categoriaActiva === 'Todas'
    ? emotions
    : emotions.filter(e => e.categoria === categoriaActiva);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px' }}>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px', justifyContent: 'center' }}>
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: letraGrande ? '18px' : '15px',
              backgroundColor: categoriaActiva === cat ? '#0984E3' : '#ddd',
              color: categoriaActiva === cat ? 'white' : '#444',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {emocionesFiltradas.map(emotion => (
          <EmotionButton
            key={emotion.id}
            emotion={emotion}
            onClick={onSelect}
            nombrePaciente={nombrePaciente}
            generoPaciente={generoPaciente}
            letraGrande={letraGrande}
          />
        ))}
      </div>
    </div>
  );
}

export default EmotionGrid;
