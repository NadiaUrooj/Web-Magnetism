import React from "react";
import "./App.css";
import navbar from "./images/nav-bar.png";
import Background from "./components/Background";
import Section1 from "./components/Section1.js";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import OurwebsiteSection from "./components/OurwebsiteSection";
import Services from "./components/Services";
import Logo from "./images/logo2.png";
import PortfolioSection from "./components/PortfolioSection.js";
import InsightsSection from "./components/Insights.js";
import FormSection from "./components/FormSection.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="App" style={{ fontFamily: "sans-serif" }}>
      <div>
        <Background>
          <nav className="mb-8">
            <img src={navbar} alt="Navbar" />
          </nav>
          <Section1 />
        </Background>
        <Section2 />
        <Section3 />
        <Background>
          <WhyChooseUsSection />
          <OurwebsiteSection />
        </Background>
        <Services />
        <div className="w-full">
          <img className="w-full" src={Logo} alt="Logo" />
        </div>
        <PortfolioSection />
        <InsightsSection />
        <FormSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
