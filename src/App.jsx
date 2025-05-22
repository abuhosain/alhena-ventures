import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextMarquee from "./components/TextMarquee";
import About from "./components/About";
import AboutCardSection from "./components/ui/AboutSection";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <TextMarquee />
      <div className="pt-[450px] md:pt-48 lg:pt-0 mb-44 md:mb-0">
        {" "}
        <About />
      </div>
      <AboutCardSection  />
    </>
  );
};

export default App;
