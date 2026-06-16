import React from 'react';

function PsychologistPanel({ historial, onClear, nombrePaciente, letraGrande }) {
  const fontSize = letraGrande ? '18px' : '14px';

  const exportar = () => {
    const fecha = new Date().toLocaleDateString('es-ES');
    let texto = 'Historial de ' + (nombrePaciente || 'Paciente') + '\n';
    texto += 'Fecha de exportacion: ' + fecha + '\n\n';
    historial.forEach((item, i) => {
      texto += (i + 1) + '. ' + item.emoji + ' ' + item.fraseNino + ' - ' + item.fecha + ' ' + item.hora + '\n';
    });
    const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'historial-' + (nombrePaciente || 'paciente') + '.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const imprimir = () => {
    const fecha = new Date().toLocaleDateString('es-ES');
    const contenido = historial.map((item, i) =>
      '<tr><td>' + (i + 1) + '</td><td>' + item.emoji + '</td><td>' + item.label + '</td><td>' + item.fecha + '</td><td>' + item.hora + '</td></tr>'
    ).join('');
    const ventana = window.open('', '_blank');
    ventana.document.write('<html><head><title>Historial</title><style>body{font-family:Arial;padding:20px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#0984E3;color:white}h2{color:#444}</style></head><body>');
    ventana.document.write('<h2>Historial de ' + (nombrePaciente || 'Paciente') + '</h2>');
    ventana.document.write('<p>Psicologa: Isabel Cristina Salazar Bedoya - ' + fecha + '</p>');
    ventana.document.write('<table><tr><th>#</th><th>Emoji</th><th>Emocion</th><th>Fecha</th><th>Hora</th></tr>' + contenido + '</table>');
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.print();
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px', margin: '20px auto', maxWidth: '600px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#444', marginBottom: '5px', fontSize: letraGrande ? '26px' : '20px' }}>
        Panel de la Psicologa
      </h2>
      {nombrePaciente && (
        <p style={{ textAlign: 'center', color: '#0984E3', fontWeight: 'bold', marginBottom: '15px', fontSize: letraGrande ? '20px' : '16px' }}>
          Paciente: {nombrePaciente}
        </p>
      )}

      {historial.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999', fontSize: fontSize }}>Aun no hay registros</p>
      ) : (
        <div>
          {historial.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', marginBottom: '8px', backgroundColor: item.color, borderRadius: '10px' }}>
              <span style={{ fontSize: '30px' }}>{item.emoji}</span>
              <div>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: fontSize }}>{item.label}</div>
                <div style={{ fontSize: '12px', color: '#555' }}>{item.fecha} - {item.hora}</div>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
            <button onClick={exportar} style={{ flex: 1, padding: '10px', backgroundColor: '#00B894', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
              Exportar
            </button>
            <button onClick={imprimir} style={{ flex: 1, padding: '10px', backgroundColor: '#6C5CE7', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
              Imprimir
            </button>
            <button onClick={onClear} style={{ flex: 1, padding: '10px', backgroundColor: '#FF6B6B', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
              Limpiar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PsychologistPanel;
