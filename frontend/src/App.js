import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainScreen from './pages/homePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
