import './App.css';
import cadastro from './components/pages/cadastro.js';
import React from 'react';
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import home from './components/pages/home.js'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/cadastro" element={root.render(<cadastro/>)} />
          <Route path = "/" element={<home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
