import Home from '../Home/Home';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <div>
    <nav>
      <Link to='/'>
        <h1 className='heading'>Horizon Hikes</h1>
      </Link>
    </nav>
    <Home />
  </div>
   
  );
}

export default App;
