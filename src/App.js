import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Beneficiaries from "./components/Beneficiaries";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <About />
      {/* <Beneficiaries /> */}
    </div>
  );
}

export default App;
