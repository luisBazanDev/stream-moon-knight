import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    var source, context, analyser, fbc_array;
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        context = new AudioContext();
        analyser = context.createAnalyser();
        source = context.createMediaStreamSource(stream);
        analyser.fftSize = 128;
        source.connect(analyser);
        analyser.connect(context.destination);
      })
      .catch((err) => {
        console.log("u got an error:" + err);
      });
    setInterval(() => {
      fbc_array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(fbc_array);
      console.log(ArrayAvg(fbc_array));
    }, 100);
  });

  return <div className="App"></div>;
}

function ArrayAvg(myArray) {
  var i = 0,
    summ = 0,
    ArrayLen = myArray.length;
  while (i < ArrayLen) {
    summ = summ + myArray[i++];
  }
  return summ / ArrayLen;
}

export default App;
