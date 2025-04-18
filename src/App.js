import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import PreguntasTeoricas from './components/PreguntasTeoricas';


function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/img/fondo-neomorfismo.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Capa con efecto blur */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(3px)',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          zIndex: 0,
        }}
      ></div>

      {/* App content encima del fondo */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Router>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/usuario/:id" element={<UserDetail />} />
            <Route path="/preguntas" element={<PreguntasTeoricas />} />

          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
