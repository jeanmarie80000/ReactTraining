import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './countryList/Home';
import Country from './data/dataCountry';
import './styles.css';

const App = () => {
  
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country' element={<Country />} />

        {/* All falses path guide to home */}
        <Route path='*' element={<Home />} />
      </Routes>
  )
}

export default App;

