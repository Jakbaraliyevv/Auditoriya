import React from "react";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import Novinki from "../../components/novinki";
import Uzb from "../../components/ommalashgan";
import Rus from "../../components/rusKitoblar";
import Footer from "../../components/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Novinki />
      <Uzb />
      <Rus />
      <Footer />
    </div>
  );
}

export default Home;
