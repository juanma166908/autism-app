import React, { useState } from 'react';

function PatientName({ nombre, genero, onSave, modoOscuro }) {
  const [editando, setEditando] = useState(false);
  const [tempNombre, setTempNombre] = useState(nombre);
  const [tempGenero, setTempGenero] = useState(genero || 'nino');

  const handleSave = () => {
    onSave(tempNombre, tempGenero);
    setEditando(false);
  };

  const fondo = modoOscuro ? '#16213e' : 'white';
  const textoColor = modoOscuro ? 'white' : '#444';

  return (
    <div style={{ textAlign: 'center', padding: '10px 30px' }}>
      {editando ? (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            value={tempNombre}
            onChange={e => setTempNombre(e.target.value)}
            placeholder="Nombre del paciente"
            style={{ padding: '10px', fontSize: '18px', borderRadius: '10px', border: '2px solid #0984E3', outline: 'none', backgroundColor: fondo, color: textoColor }}
          />
          <select
            value={tempGenero}
            onChange={e => setTempGenero(e.target.value)}
            style={{ padding: '10px', fontSize: '18px', borderRadius: '10px', border: '2px solid #0984E3', outline: 'none', backgroundColor: fondo, color: textoColor }}
          >
            <option value="nino">Niño</option>
            <option value="nina">Niña</option>
          </select>
          <button onClick={handleSave} style={{ padding: '10px 20px', backgroundColor: '#0984E3', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
            Guardar
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '20px', color: textoColor }}>
            Paciente: <strong>{nombre || 'Sin nombre'}</strong> {genero === 'nina' ? 'Niña' : 'Niño'}
          </span>
          <button onClick={() => setEditando(true)} style={{ padding: '6px 14px', backgroundColor: '#55EFC4', color: '#333', border: 'none', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold' }}>
            Cambiar
          </button>
        </div>
      )}
    </div>
  );
}

export default PatientName;
