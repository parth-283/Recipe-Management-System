import React from "react";
import HomeCard from "./HomeCard";
import HomeSlide from './HomeSlide';
import HeaderBottom from './../Header&Footer/HeaderBottom';

function Home() {
  return (
    <div>
      <HomeSlide/>
      <HeaderBottom/>
      <HomeCard/>
      
    </div>
  );
}

export default Home;
