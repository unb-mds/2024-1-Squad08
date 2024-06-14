import './App.css';
import cadastro from './components/pages/cadastro.js';
import React from 'react';
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<cadastro/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
