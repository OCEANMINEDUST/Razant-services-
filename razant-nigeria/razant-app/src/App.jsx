import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import GetAQuote from './pages/GetAQuote';
import OilfieldServices from './pages/OilfieldServices';
import OurServices from './pages/OurServices';
import PipelineIntegrity from './pages/PipelineIntegrity';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
        <Route path="/oilfield-services" element={<OilfieldServices />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/pipeline-integrity" element={<PipelineIntegrity />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
