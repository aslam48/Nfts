
import './App.css';
import NavBar from "./Component/Pages/navbar/NavBar"
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import  About from './Component/Pages/about/About'
import  Pricing from './Component/Pages/pricing/Pricing'



function App() {
  return (
    <div className="App">
       <Router>
        <>
          <NavBar />
        </>
    


      <Routes>
        <Route path="/" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>

       </Router>
     
    </div>
  );
}

export default App;
