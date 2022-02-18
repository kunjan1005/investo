import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Sidebar from './sidebar/Sidebar';
import Topnav from './navbar/Topnav';

function App() {
  return (
    <div className='row'>
        <Sidebar/>
        <Topnav/>
    </div>
  );
}

export default App;
