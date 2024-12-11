import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Main Pages
import Home from './pages/Home';
import Policies from './pages/Policies';
import Funds from './pages/Funds';
import Investment from './pages/Investment';
import Calculate from './pages/Calculate';

// Insurance Pages
import HealthInsurance from './pages/insurance/HealthInsurance';
import TermLifeInsurance from './pages/insurance/TermLifeInsurance';
import CarInsurance from './pages/insurance/CarInsurance';
import BikeInsurance from './pages/insurance/BikeInsurance';
import HomeInsurance from './pages/insurance/HomeInsurance';
import LifeInsurance from './pages/insurance/LifeInsurance';

// Fund Pages
import MutualFunds from './pages/funds/MutualFunds';
import EquityFunds from './pages/funds/EquityFunds';
import DebtFunds from './pages/funds/DebtFunds';
import HybridFunds from './pages/funds/HybridFunds';

// Company Pages
import About from './pages/company/About';
import Contact from './pages/company/Contact';
import Careers from './pages/company/Careers';
import Blog from './pages/company/Blog';

// Legal Pages
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Disclaimer from './pages/legal/Disclaimer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/invest" element={<Investment />} />
            <Route path="/calculate" element={<Calculate />} />

            {/* Insurance Pages */}
            <Route path="/policies/health" element={<HealthInsurance />} />
            <Route path="/policies/term-life" element={<TermLifeInsurance />} />
            <Route path="/policies/car" element={<CarInsurance />} />
            <Route path="/policies/bike" element={<BikeInsurance />} />
            <Route path="/policies/home" element={<HomeInsurance />} />
            <Route path="/policies/life" element={<LifeInsurance />} />

            {/* Fund Pages */}
            <Route path="/funds/mutual" element={<MutualFunds />} />
            <Route path="/funds/equity" element={<EquityFunds />} />
            <Route path="/funds/debt" element={<DebtFunds />} />
            <Route path="/funds/hybrid" element={<HybridFunds />} />

            {/* Company Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />

            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;