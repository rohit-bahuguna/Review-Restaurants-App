import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RestaurantDetail from './components/RestaurantDetail';

function App() {
  return (
    
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:restaurantName/:restaurantId' element={<RestaurantDetail />} />

      </Routes>

      
  );
}

export default App;
