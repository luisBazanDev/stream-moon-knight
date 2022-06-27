import "./App.css";
import { useContext, useEffect } from "react";
import AppContext from "./AppContext";
import Person from "./components/Person";
import ToggleBtn from "./components/ToggleBtn";
import LightSpot from "./components/LightSpot";

function App() {
  const { inTransition, setInTransition } = useContext(AppContext);

  useEffect(() => {
    if (inTransition) {
      setTimeout(() => {
        setInTransition(false);
      }, 3000);
      document.getElementById("audio-transition").currentTime = 0;
      document.getElementById("audio-transition").play();
    }
  });

  return (
    <div className="app">
      <img className="background" src="/background.jpg" alt="background" />
      <Person
        person={0}
        staticImg="/sint_cast_static.gif"
        talkingImg="/sint_cast_talking.gif"
      />
      <Person
        person={1}
        staticImg="/sint_cast_chullo_static.gif"
        talkingImg="/sint_cast_chullo_talking.gif"
      />
      <LightSpot />
      <ToggleBtn />
      <audio src="/transition.m4a" id="audio-transition"></audio>
    </div>
  );
}

export default App;
