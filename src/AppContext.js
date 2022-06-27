import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function ArrayAvg(myArray) {
  var i = 0,
    summ = 0,
    ArrayLen = myArray.length;
  while (i < ArrayLen) {
    summ = summ + myArray[i++];
  }
  return summ / ArrayLen;
}

function AppProvider(props) {
  const [person, setPerson] = useState(0);
  const [inTransition, setInTransition] = useState(false);
  const [isDownUmbral, setIsDownUmbral] = useState(true);
  const value = {
    person,
    setPerson,
    isDownUmbral,
    setIsDownUmbral,
    inTransition,
    setInTransition,
  };

  useEffect(() => {
    var source, context, analyser;
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        context = new AudioContext();
        analyser = context.createAnalyser();
        source = context.createMediaStreamSource(stream);
        analyser.fftSize = 128;
        source.connect(analyser);
      })
      .catch((err) => {
        console.log("u got an error:" + err);
      });
    var i = 0;
    setInterval(() => {
      if (!analyser || !analyser.frequencyBinCount) return;
      const fbc_array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(fbc_array);
      const volume = ArrayAvg(fbc_array);
      //console.log(volume);
      if (volume > 36) {
        setIsDownUmbral(false);
        i = 0;
      } else if (i > 10) {
        setIsDownUmbral(true);
      }
      i++;
    }, 100);
  }, [setIsDownUmbral]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
export { AppProvider };
