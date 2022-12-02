import React from "react";
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
