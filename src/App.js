import React from "react";
import MenuBar from "./components/common/MenuBar";
import Spacer from "./components/common/Spacer";
import TopBar from "./components/common/TopBar";
import Slider from "./components/home/Slider";
import CustomerServices from "./components/services/CustomerServices";
import Vehicles from "./components/services/Vehicles";

const App = () => {
  return (
    <div>
      <TopBar />
      <MenuBar />
      <Slider />
      <Spacer />
      <CustomerServices />
      <Spacer />
      <Vehicles />
      <Spacer />
    </div>
  );
};

export default App;
