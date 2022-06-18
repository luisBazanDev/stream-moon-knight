import "./App.css";
import { useContext } from "react";
import AppContext from "./AppContext";
import Person from "./components/Person";

function App() {
  const { isDownUmbral } = useContext(AppContext);

  return (
    <div>
      <Person
        person={0}
        staticImg="/person-0-static.png"
        talkingImg="/person-0-talking.png"
      />
      <Person />
      <span>{isDownUmbral ? "mute" : "unmute"}</span>
    </div>
  );
}

export default App;
