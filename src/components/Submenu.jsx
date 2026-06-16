import React from 'react';

function Submenu({ emotion, opciones, onSelect, onClose, nombrePaciente, generoPaciente }) {
  const hablar = (opcion) => {
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const voces = window.speechSynthesis.getVoices();
      const voz = generoPaciente === 'nina'
        ? voces.find(v => v.name.includes('Sabina')) || voces.find(v => v.lang.startsWith('es'))
        : voces.find(v => v.name.includes('Pablo')) || voces.find(v => v.lang.startsWith('es'));

      const nombre = nombrePaciente ? nombrePaciente + ' ' : '';
      const frase = nombre + opcion.frase;
      const mensaje = new SpeechSynthesisUtterance(frase);
      mensaje.lang = 'es-ES';
      mensaje.rate = 0.85;
      mensaje.pitch = generoPaciente === 'nina' ? 1.4 : 0.7;
      if (voz) mensaje.voice = voz;
      window.speechSynthesis.speak(mensaje);
      onSelect(opcion);
    }, 200);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: 'white', borderRadius: '30px', padding: '30px', maxWidth: '700px', width: '95%', maxHeight: '85vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#444', margin: 0, fontSize: '24px' }}>
            {emotion.emoji} {opciones.titulo}
          </h2>
          <button onClick={onClose} style={{ backgroundColor: '#FF6B6B', color: 'white', border: 'none', borderRadius: '10px', padding: '8px 16px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
            X Cerrar
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {opciones.opciones.map(opcion => (
            <button
              key={opcion.id}
              onClick={() => hablar(opcion)}
              style={{
                backgroundColor: emotion.color,
                border: 'none',
                borderRadius: '16px',
                padding: '16px 10px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                transition: 'transform 0.1s',
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.93)'; }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <span style={{ fontSize: '45px' }}>{opcion.emoji}</span>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>{opcion.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Submenu;
