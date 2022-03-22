import React from "react";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

function Home() {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;
