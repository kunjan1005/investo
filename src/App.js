
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Constant from './components/Constant';
import Login from './components/Login';


function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<Constant />} />
    </Routes>
  );
}

export default App;
