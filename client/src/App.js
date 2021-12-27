import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Auth from './components/Auth';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes/Recipes';

function App() {
  return (
    
    <div>
      { /* <h1>Aidiii</h1>
<NavBar></NavBar> */ }
<Routes>
  <Route path="/recipe/*" element={ <Recipes />} />
  <Route path="/auth/*" element={ <Auth />} />
</Routes>

<Link to="/auth">Auth</Link>
    </div>
  );
}

export default App;
