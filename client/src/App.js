import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Auth from './components/Auth';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div>
      <h1>Aidiii</h1>
<NavBar></NavBar>
<Routes>
  <Route path="/auth/*" element={<Auth />}>
  </Route>
</Routes>

<Link to="/auth">Auth</Link>
    </div>
  );
}

export default App;
