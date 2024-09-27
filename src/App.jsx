import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import ProtectedRoute from './protectRoute/ProtectedRoute';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import ProductList from './pages/ProductList';
import MyState from './context/data/myState'; // Adjust path to your MyState provider

const App = () => {
  return (
    <MyState> {/* Wrap your Router with MyState */}
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Navigate to='/login' replace />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/add' element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          } />
          <Route path='/update' element={
            <ProtectedRoute>
              <UpdateProduct />
            </ProtectedRoute>
          } />
          <Route path='/list' element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </MyState>
  );
};

export default App;
