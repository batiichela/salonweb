import React from 'react';
import Registro from './Componentes/Registro';

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <h1 className="text-center">Registro de Nuevos Usuarios</h1>
        <hr/><br/>
        <Registro/>
      </div>
    </div>
  );
}

export default App;
