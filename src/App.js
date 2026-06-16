import React, { useState } from 'react';
import EmotionGrid from './components/EmotionGrid';
import ResponseMessage from './components/ResponseMessage';
import PsychologistPanel from './components/PsychologistPanel';
import PasswordModal from './components/PasswordModal';
import PatientName from './components/PatientName';
import Favorites from './components/Favorites';
import EmotionChart from './components/EmotionChart';
import Submenu from './components/Submenu';
import submenus from './data/submenus';
import './App.css';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [conteo, setConteo] = useState({});
  const [mostrarPanel, setMostrarPanel] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);
  const [nombrePaciente, setNombrePaciente] = useState('');
  const [generoPaciente, setGeneroPaciente] = useState('nino');
  const [letraGrande, setLetraGrande] = useState(false);
  const [submenuActivo, setSubmenuActivo] = useState(null);

  const handleSelect = (emotion) => {
    if (submenus[emotion.id]) {
      setSubmenuActivo(emotion);
    } else {
      setSelectedEmotion(emotion);
      const hora = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
      const fecha = new Date().toLocaleDateString('es-ES');
      setHistorial(prev => [...prev, { ...emotion, hora, fecha }]);
      setConteo(prev => ({ ...prev, [emotion.id]: (prev[emotion.id] || 0) + 1 }));
    }
  };

  const handleSubmenuSelect = (opcion) => {
    const hora = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    const fecha = new Date().toLocaleDateString('es-ES');
    setHistorial(prev => [...prev, { ...submenuActivo, label: opcion.label, emoji: opcion.emoji, frase: opcion.frase, hora, fecha }]);
    setConteo(prev => ({ ...prev, [submenuActivo.id]: (prev[submenuActivo.id] || 0) + 1 }));
    setSubmenuActivo(null);
  };

  const handleClose = () => setSelectedEmotion(null);
  const handleClear = () => { setHistorial([]); setConteo({}); };

  const handlePanelClick = () => {
    if (mostrarPanel) {
      setMostrarPanel(false);
    } else {
      setMostrarPassword(true);
    }
  };

  const handleSavePaciente = (nombre, genero) => {
    setNombrePaciente(nombre);
    setGeneroPaciente(genero);
  };

  const fondo = modoOscuro ? '#1a1a2e' : '#f9f9f9';
  const textoColor = modoOscuro ? 'white' : '#444';
  const subtextoColor = modoOscuro ? '#aaa' : '#555';

  const favoritos = Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id]) => historial.find(e => String(e.id) === String(id)))
    .filter(Boolean)
    .filter((e, i, arr) => arr.findIndex(x => x.id === e.id) === i);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: fondo, transition: 'background 0.3s', fontSize: letraGrande ? '120%' : '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h1 style={{ fontSize: letraGrande ? '52px' : '42px', color: textoColor, margin: 0, fontWeight: 'bold' }}>
            Como te sientes?
          </h1>
          <p style={{ fontSize: letraGrande ? '26px' : '22px', color: subtextoColor, margin: '6px 0 0 0', fontWeight: '500' }}>
            Psicologa: Isabel Cristina Salazar Bedoya
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={() => setLetraGrande(!letraGrande)} style={{ backgroundColor: '#6C5CE7', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
            {letraGrande ? 'Letra normal' : 'Letra grande'}
          </button>
          <button onClick={() => setModoOscuro(!modoOscuro)} style={{ backgroundColor: modoOscuro ? '#FFD93D' : '#444', color: modoOscuro ? '#333' : 'white', border: 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
            {modoOscuro ? 'Modo claro' : 'Modo oscuro'}
          </button>
          <button onClick={handlePanelClick} style={{ backgroundColor: '#0984E3', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
            {mostrarPanel ? 'Ocultar panel' : 'Panel psicologa'}
          </button>
        </div>
      </div>

      <PatientName nombre={nombrePaciente} genero={generoPaciente} onSave={handleSavePaciente} modoOscuro={modoOscuro} />

      <Favorites favoritos={favoritos} onSelect={handleSelect} nombrePaciente={nombrePaciente} generoPaciente={generoPaciente} />

      {mostrarPassword && (
        <PasswordModal
          onSuccess={() => { setMostrarPassword(false); setMostrarPanel(true); }}
          onCancel={() => setMostrarPassword(false)}
        />
      )}

      {mostrarPanel && (
        <PsychologistPanel historial={historial} onClear={handleClear} nombrePaciente={nombrePaciente} letraGrande={letraGrande} />
      )}

      {mostrarPanel && (
        <EmotionChart conteo={conteo} historial={historial} />
      )}

      <EmotionGrid onSelect={handleSelect} nombrePaciente={nombrePaciente} generoPaciente={generoPaciente} letraGrande={letraGrande} />

      {submenuActivo && (
        <Submenu
          emotion={submenuActivo}
          opciones={submenus[submenuActivo.id]}
          onSelect={handleSubmenuSelect}
          onClose={() => setSubmenuActivo(null)}
          nombrePaciente={nombrePaciente}
          generoPaciente={generoPaciente}
        />
      )}

      <ResponseMessage emotion={selectedEmotion} onClose={handleClose} nombrePaciente={nombrePaciente} generoPaciente={generoPaciente} />
    </div>
  );
}

export default App;
