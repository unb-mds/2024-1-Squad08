import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/home'
import Cadastro from './components/pages/cadastro'
import Login from './components/pages/login'
import NotFound from './components/pages/notFound'
import Perfil from './components/pages/perfil'
import Republica from './components/pages/republica'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} /> { /*equivalente a -> app.get()*/}
          <Route path='/' element={<Home/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/republica' element={<Republica />} />
          { /*<Route path='/republica/*' element={<Republica id="checkurl"/>}>*/}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
