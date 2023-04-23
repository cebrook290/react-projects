import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Reviews from "./Pages/Reviews";
import { Route, Routes } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import ContentCreatorContact from "./Pages/ContentCreatorContact";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/content_creator_contact" element={<ContentCreatorContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
