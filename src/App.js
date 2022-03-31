import { Route, Routes } from 'react-router-dom';
import './App.css';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path={'/foods'} element={<Foods></Foods>}></Route>
      </Routes>
    </div>
  );
}

export default App;
