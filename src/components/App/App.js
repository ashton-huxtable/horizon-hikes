import Home from '../Home/Home';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <div>
    <nav>
      <Link to='/'>
        <h1>Horizon Hikes</h1>
      </Link>
      <NavLink to='/futureVisits'>
        Future Visits
      </NavLink>
    </nav>
    <Home />
  </div>
   
  );
}

export default App;
