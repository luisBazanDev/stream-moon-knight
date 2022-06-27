import { useContext } from "react";
import AppContext from "../AppContext";
import "../styles/ToggleBtn.css";

function ToggleBtn() {
  const context = useContext(AppContext);

  return (
    <div
      className="togle-btn"
      onClick={() => {
        if (context.inTransition) return;
        context.setPerson(context.person === 1 ? 0 : 1);
        context.setInTransition(true);
      }}
    >
      <div className={`icon p${context.person % 2}`}>{context.person + 1}</div>
    </div>
  );
}

export default ToggleBtn;
