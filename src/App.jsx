import { useState, useEffect } from "react";
import "./App.css";
import "normalize.css";

import Header from "./Components/Header/Header";
import MyMain from "./Components/MyMain/MyMain";

function setScrollWidth() {
  const outer = document.createElement("div");

  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";

  document.body.append(outer);

  const inner = document.createElement("div");
  outer.append(inner);

  const scrollWidth = outer.offsetWidth - inner.offsetWidth;

  document.documentElement.style.setProperty(
    "--scroll-width",
    `${scrollWidth}`
  );

  outer.remove();
}

export default function App() {
  const [tabName, setTabName] = useState("works");
  useEffect(() => {
    setScrollWidth();
    document.body.style.width = window.innerWidth + "px";
  }, []);

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
