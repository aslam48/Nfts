
import './App.css';
import NavBar from "./Component/Pages/navbar/NavBar"
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import  About from './Component/Pages/about/About'
import  Pricing from './Component/Pages/pricing/Pricing'
import HomePage from './Component/Pages/HomePage/HomePage'



function App() {
  return (
    <div className="App">
       <Router>
        <>
          <NavBar />
        </>
    


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>

       </Router>
     
    </div>
  );
}

export default App;
