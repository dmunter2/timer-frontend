import React, {useState} from 'react';
import './App.css';
import Timer from './components/Timer';


function App() {

  const [times, setTimes] = useState([])

  const addnewTime = time => {
    setTimes([...times, time ])
  }




  return (
    <div className="App">
      <Timer times={times} addnewTime={addnewTime}/>
      



    </div>
  );
}

export default App;
