import React from 'react';

function pronunciar(nombre) {
  const correcciones = {
    'matias': 'matías',
    'sofia': 'sofía',
    'maria': 'maría',
    'jose': 'josé',
    'sebastian': 'sebastián',
    'julian': 'julián',
    'andres': 'andrés',
    'nicolas': 'nicolás',
    'tomas': 'tomás',
    'valeria': 'valéria',
    'evelyn': 'evelin',
  };
  const lower = nombre.toLowerCase();
  return correcciones[lower] || nombre;
}

function ResponseMessage({ emotion, onClose, nombrePaciente, generoPaciente }) {
  if (!emotion) return null;

  let frase;
  if (nombrePaciente) {
    const fraseGenero = generoPaciente === 'nina' ? emotion.fraseNina : emotion.fraseNino;
    frase = pronunciar(nombrePaciente) + ' ' + fraseGenero;
  } else {
    frase = emotion.fraseYo;
  }

  const repetir = () => {
    const mensaje = new SpeechSynthesisUtterance(frase);
    mensaje.lang = 'es-ES';
    mensaje.rate = 0.9;
    mensaje.pitch = 1.1;
    window.speechSynthesis.speak(mensaje);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: emotion.color, borderRadius: '30px', padding: '50px 40px', textAlign: 'center', maxWidth: '400px', width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <div style={{ fontSize: '120px', lineHeight: 1, marginBottom: '20px' }}>{emotion.emoji}</div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '30px', textTransform: 'capitalize' }}>{frase}</div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={repetir} style={{ backgroundColor: '#0984E3', border: 'none', borderRadius: '20px', padding: '16px 30px', fontSize: '20px', cursor: 'pointer', fontWeight: 'bold', color: 'white' }}>
            Repetir
          </button>
          <button onClick={onClose} style={{ backgroundColor: 'white', border: 'none', borderRadius: '20px', padding: '16px 30px', fontSize: '20px', cursor: 'pointer', fontWeight: 'bold', color: '#333' }}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResponseMessage;
