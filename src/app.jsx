import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div id="page-container">
          <Navbar />
            <Outlet />
          <Footer />
    </div>
  )
}

export default App