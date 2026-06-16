import React, { useState, useEffect } from 'react';

const correcciones = {
  'matias': 'Matias',
  'evelyn': 'Evelyn',
};

function pronunciar(nombre) {
  const lower = nombre.toLowerCase();
  return correcciones[lower] || nombre;
}

function EmotionButton({ emotion, onClick, nombrePaciente, generoPaciente, letraGrande }) {
  const [fotoError, setFotoError] = useState(false);

  useEffect(() => {
    setFotoError(false);
  }, [emotion]);

  const hablar = () => {
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const voces = window.speechSynthesis.getVoices();
      const voz = generoPaciente === 'nina'
        ? voces.find(v => v.name.includes('Sabina')) || voces.find(v => v.lang.startsWith('es'))
        : voces.find(v => v.name.includes('Pablo')) || voces.find(v => v.lang.startsWith('es'));

      const nombrePronunciado = pronunciar(nombrePaciente || '');
      const fraseGenero = nombrePaciente
        ? nombrePronunciado + ' ' + (generoPaciente === 'nina' ? emotion.fraseNina : emotion.fraseNino)
        : emotion.fraseYo;

      const mensaje = new SpeechSynthesisUtterance(fraseGenero);
      mensaje.lang = 'es-ES';
      mensaje.rate = 0.85;
      mensaje.pitch = generoPaciente === 'nina' ? 1.4 : 0.7;
      if (voz) mensaje.voice = voz;
      window.speechSynthesis.speak(mensaje);
      onClick(emotion);
    }, 200);
  };

  const fotoSrc = emotion.fotoLocal ? '/images/' + emotion.fotoLocal : null;

  return (
    <button
      onClick={hablar}
      style={{
        backgroundColor: emotion.color,
        border: 'none',
        borderRadius: '24px',
        padding: '12px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
        transition: 'transform 0.15s',
        width: '100%',
        minHeight: '180px',
      }}
      onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.93)'; }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {fotoSrc && !fotoError ? (
        <img
          src={fotoSrc}
          alt={emotion.label}
          onError={() => setFotoError(true)}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        />
      ) : (
        <span style={{ fontSize: letraGrande ? '70px' : '60px', lineHeight: 1 }}>{emotion.emoji}</span>
      )}
      <span style={{ fontSize: letraGrande ? '20px' : '17px', fontWeight: 'bold', color: '#333', textAlign: 'center', lineHeight: 1.2 }}>
        {emotion.label}
      </span>
    </button>
  );
}

export default EmotionButton;
