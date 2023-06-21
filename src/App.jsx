import { React, useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Banner from './shoppingCart/shoppingCart';
import ShoppingList from './shoppingCart/shoppingList';
import './styles.css';


function App() {
  
  return (
    <ShoppingList />
  );
}

export default App;

