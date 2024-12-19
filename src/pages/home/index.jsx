import React from "react";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import Novinki from "../../components/novinki";
import Uzb from "../../components/ommalashgan";
import Rus from "../../components/rusKitoblar";

function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Novinki />
      <Uzb />
      <Rus />
    </div>
  );
}

export default Home;
