import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import About from "../../components/About Us/about";
import Cakes from "../../components/Cakes/cakes";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Cakes />
    </div>
  );
}

export default Home;
