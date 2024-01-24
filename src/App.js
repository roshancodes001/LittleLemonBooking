import Header from './components/Header';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from "./components/ConfirmedBooking";
import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
          <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
        </Routes>

        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
