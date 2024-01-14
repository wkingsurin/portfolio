import { useState, useEffect } from "react";
import "./App.css";
import "normalize.css";

import Header from "./Components/Header/Header";
import MyMain from "./Components/MyMain/MyMain";

export default function App() {
  const [tabName, setTabName] = useState("works");

  const onClick = (e) => {
    setTabName(() => e.target.getAttribute("name"));
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <MyMain tabName={tabName} onClick={onClick} />
        <div className="overlay"></div>
      </div>
    </>
  );
}
