
import './App.css';
import Header from "./Component/header/Header"
import WhiteShadowTop from './Component/topShadow/WhiteShadowTop';
// import PricingContent from './Component/pricingContent/PricingContent';
// import Section from './Component/Section/Section';


function App() {
  return (
    <div className="App">
      <WhiteShadowTop/>
      <Header/>
      {/* <Section/>
      <PricingContent/> */}
    </div>
  );
}

export default App;
