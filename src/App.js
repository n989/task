import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Discount from "./components/Discount";
import Popup from "./components/Popup";
function App() {
  const [popup, Setpopup] = useState(false);
  const [discount, SetDiscount] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      Setpopup(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Popup trigger={popup} setTrigger={Setpopup} setDisc={SetDiscount} />
      <Discount trigger={discount} setTrigger={SetDiscount} />
    </div>
  );
}

export default App;
