import React from "react";
import "./home.css";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import About from "../../components/About Us/about";
import Cakes from "../../components/Cakes/cakes";
import PopularRecal from "../../components/PopularRecal/popularRecal";
import WeWork from "../../components/weWork/weWork";
import OutAbout from "../../components/OutAbout/OutAbout";
import CakesDetals from "../../components/cakeDetals/cakesDetals";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <hr />
      <Cakes />
      <hr />
      <WeWork />
      <hr />
      <OutAbout />
      <hr />
      <PopularRecal />
      {/* <CakesDetals /> */}
    </div>
  );
}

export default Home;
