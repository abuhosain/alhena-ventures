import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextMarquee from "./components/TextMarquee";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <TextMarquee />
      <div className="pt-[450px] md:pt-48 lg:pt-0">
        {" "}
        <About />
      </div>
    </>
  );
};

export default App;
