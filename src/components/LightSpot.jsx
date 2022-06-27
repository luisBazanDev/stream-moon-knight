import { useEffect, useContext } from "react";
import AppContext from "../AppContext";
import "../styles/LightSpot.css";

function LightSpot() {
  const { person, inTransition } = useContext(AppContext);
  const values = {
    left: "15vw",
    right: "15vw",
    rotate: true,
  };

  useEffect(() => {
    const element = document.getElementById("light-spot");
    const id = person % 2;
    if (!inTransition) return;
    element.animate(
      [
        {
          left: id === 0 ? element.offsetLeft + "px" : values.left,
          right: values.right,
        },
        {
          left:
            id === 0
              ? values.left
              : (window.innerWidth / 100) *
                  (100 - Number.parseFloat(values.right.replace("vw", ""))) -
                element.offsetWidth +
                "px",
          right: values.right,
        },
      ],
      {
        duration: 2300,
      }
    );
    if (id === 0) {
      element.style.left = values.left;
      element.style.right = "auto";
      if (values.rotate) element.style.transform = "scaleX(1)";
    } else {
      element.style.left = "auto";
      element.style.right = values.right;
      if (values.rotate) element.style.transform = "scaleX(-1)";
    }
  }, [values, person, inTransition]);

  return <img id="light-spot" src="/light-spot.png" alt="light-spot" />;
}

export default LightSpot;
