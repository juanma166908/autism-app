import React, { useState } from 'react';

function PasswordModal({ onSuccess, onCancel }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (password === '198529') {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '40px', textAlign: 'center', maxWidth: '350px', width: '90%' }}>
        <h2 style={{ color: '#444', marginBottom: '10px' }}>Panel Psicologa</h2>
        <p style={{ color: '#0984E3', fontWeight: 'bold', marginBottom: '20px' }}>Isabel Cristina Salazar Bedoya</p>
        <p style={{ color: '#666', marginBottom: '20px' }}>Ingresa la contrasena para continuar</p>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          placeholder="Contrasena"
          style={{ width: '100%', padding: '12px', fontSize: '18px', borderRadius: '10px', border: '2px solid #ddd', marginBottom: '10px', boxSizing: 'border-box', textAlign: 'center' }}
        />
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>Contrasena incorrecta</p>}
        <button onClick={handleSubmit} style={{ width: '100%', padding: '12px', backgroundColor: '#0984E3', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>Entrar</button>
        <button onClick={onCancel} style={{ width: '100%', padding: '12px', backgroundColor: '#ddd', color: '#444', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer' }}>Cancelar</button>
      </div>
    </div>
  );
}

export default PasswordModal;
