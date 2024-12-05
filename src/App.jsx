import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignupPage from './components/signup';
import LoginPage from './components/login';
import Home from './pages/Home';
import Product from './pages/Product';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute component
import './App.css'

function App() {


  return (
    <Router>
      <div className='nav'>
        <ul>
          <li><Link to ="/home">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </div>

      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<PrivateRoute element={<Product />} />} />
      </Routes>
    </Router>
  );
}

export default App;
