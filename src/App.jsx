import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ColorSchemesExample from '../components1/NavBar';
import AboutCarousel from '../components1/Slideshow';
import ControlledTabsExample from '../components1/Switchtabs';
import ScanOptionCard from '../components1/Scan';
import UseCases from '../components1/Usecase';
import Footer from '../components1/Footer'; // ✅ Correct Footer import

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />

      <div>
        <AboutCarousel />
      </div>

      <div className="group-example-container">
        <ControlledTabsExample />

        <div>
          <UseCases />
        </div>

        <div className="scanda">
          <ScanOptionCard />
        </div>
      </div>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
