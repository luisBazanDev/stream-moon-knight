import { useContext } from "react";
import AppContext from "../AppContext";
import "../styles/Person.css";

function Person({ person, staticImg, talkingImg }) {
  const { isDownUmbral } = useContext(AppContext);
  return (
    <div className="person" id={`person-${person}`}>
      <img
        id={`person-img-${person}`}
        src={isDownUmbral ? staticImg : talkingImg}
        alt={`person-img-${person}`}
      />
    </div>
  );
}

export default Person;
