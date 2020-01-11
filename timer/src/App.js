import React, {useState} from 'react';

import './App.css';
import Timer from './components/Timer';


function App() {

  // const [time, setTime] = useState({
  //   seconds: '00',
  //   minutes: ''

  // })


  return (
    <div className="App">
      {/* <TimerInput  /> */}
      <Timer  />

      {/* <StartButton /> */}


    </div>
  );
}

export default App;
