
import './App.css';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

function App() {
  return (
  <div>
    <Link to='/'>
      <h1>Horizon Hikes</h1>
    </Link>
    <Home />
  </div>
   
  );
}

export default App;
