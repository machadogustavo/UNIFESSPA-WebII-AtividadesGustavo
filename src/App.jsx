import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import Galeria from "./components/Galeria/galeria";
import Home from "./components/Home/home";
import Albums from "./components/Albums/albums";
import Photo from "./components/Photo/photo";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/UNIFESSPA-WebII-AtividadesGustavo/" element={<Home/>} />
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/albums/:idAlbum" Component={Albums} />
        <Route path="/albums/:idAlbum/photos/:idPhoto" Component={Photo} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
