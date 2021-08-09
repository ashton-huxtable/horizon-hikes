import Home from '../Home/Home';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <div>
    <nav>
      <Link className='title' to='/'>
        <h1 className='heading'>Horizon Hikes</h1>
      </Link>
      <NavLink className='future-trip-nav' to='/futureVisits'>Future Trips</NavLink>
    </nav>
    <Home />
  </div>
   
  );
}

export default App;
