import "./App.css";
import { useContext, useEffect } from "react";
import AppContext from "./AppContext";
import Person from "./components/Person";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  const { isDownUmbral, inTransition, setInTransition } =
    useContext(AppContext);

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
    <div>
      <Person
        person={0}
        staticImg="/person-0-static.png"
        talkingImg="/person-0-talking.png"
      />
      <Person
        person={1}
        staticImg="/person-0-static.png"
        talkingImg="/person-0-talking.png"
      />
      <span>{isDownUmbral ? "mute" : "unmute"}</span>
      <ToggleBtn />
      <audio src="/transition.m4a" id="audio-transition"></audio>
    </div>
  );
}

export default App;
