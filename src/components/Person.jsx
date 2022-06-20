import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import "../styles/Person.css";

function Person({ person, staticImg, talkingImg }) {
  const context = useContext(AppContext);

  const active = context.person === person && !context.inTransition;

  useEffect(() => {
    if (!context.inTransition) return;
    var multiplicador = 0;
    const element = document.getElementById(`person-${person}`);
    var duration = 300;
    var beforeAnimation = Date.now();
    const timer = setInterval(function () {
      if (Date.now() - beforeAnimation <= duration) return;
      duration = 300 - 300 * multiplicador;
      if (duration <= 60) {
        return clearInterval(timer);
      }
      beforeAnimation = Date.now();
      element.animate(
        [
          {
            filter: "drop-shadow(0 0 0px #fff)",
          },
          {
            filter: "drop-shadow(0 0 6px #fff) saturate(200%)",
          },
          {
            filter: "drop-shadow(0 0 0px #fff)",
          },
        ],
        {
          delay: ((person % 2) * duration) / 2,
          duration,
        }
      );
      multiplicador += 0.08;
    }, 120);
  });

  return (
    <div
      className={
        "person" +
        (context.isDownUmbral ? "" : " mute") +
        (active ? " active" : "")
      }
      id={`person-${person}`}
    >
      <img
        id={`person-img-${person}`}
        src={
          context.isDownUmbral || !active || context.inTransition
            ? staticImg
            : talkingImg
        }
        alt={`person-img-${person}`}
      />
    </div>
  );
}

export default Person;
