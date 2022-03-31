import { Route, Routes } from 'react-router-dom';
import './App.css';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import FoodDetails from './components/FoodDetails/FoodDetails'
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path={'/foods'} element={<Foods></Foods>}></Route>
        <Route path='food-details/:idMeal' element={<FoodDetails></FoodDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
