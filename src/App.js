import { Route, Routes } from 'react-router-dom';
import './App.css';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import FoodDetails from './components/FoodDetails/FoodDetails'
import Chicken from './components/Chicken/Chicken';
import Search from './components/Search/Search';
import Home from './components/Home/Home';
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path={'/foods'} element={<Foods></Foods>}></Route>
        <Route path='food-details/:idMeal' element={<FoodDetails></FoodDetails>}></Route>
        <Route path='chicken' element={<Chicken></Chicken>}></Route>
        <Route path='search' element={<Search></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;
