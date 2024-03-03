import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employee />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
