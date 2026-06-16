import React from 'react';

function EmotionChart({ conteo, historial }) {
  if (Object.keys(conteo).length === 0) return null;

  const datos = Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([id, cantidad]) => {
      const emotion = historial.find(e => String(e.id) === String(id));
      return { ...emotion, cantidad };
    })
    .filter(Boolean);

  const maximo = Math.max(...datos.map(d => d.cantidad));

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px', margin: '20px auto', maxWidth: '600px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ textAlign: 'center', color: '#444', marginBottom: '20px' }}>Emociones mas frecuentes</h3>
      {datos.map((item, index) => (
        <div key={index} style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <span style={{ fontSize: '24px' }}>{item.emoji}</span>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#444', width: '100px' }}>{item.label}</span>
            <div style={{ flex: 1, backgroundColor: '#f0f0f0', borderRadius: '10px', height: '28px', overflow: 'hidden' }}>
              <div style={{
                width: ((item.cantidad / maximo) * 100) + '%',
                backgroundColor: item.color,
                height: '100%',
                borderRadius: '10px',
                transition: 'width 0.5s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '8px',
              }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{item.cantidad}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmotionChart;
