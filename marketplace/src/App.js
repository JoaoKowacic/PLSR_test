import React from 'react';
import ProductsPage from './pages/ProductsPage';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/products" Component={ProductsPage} />   
        <Route path='/' Component={ProductsPage}/>
        <Route path='/home' Component={ProductsPage}/>
        <Route path='/login' Component={LoginPage}/>
      </Routes>
    </Router>
  );
}

export default App;