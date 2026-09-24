import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <BookingModal />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </Router>
  );
}

export default App;
