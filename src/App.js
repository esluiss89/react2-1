import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Contacto from './views/Contacto';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
