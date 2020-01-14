import React, {useState} from 'react';
import './App.css';
import Timer from './components/Timer';
import Style from 'styled-components';

const DIV = Style.div`
background-color: #000052;
height: 100%;

height: 1000px;
padding: 1%;
`

function App() {

  const [times, setTimes] = useState([])

  const addnewTime = time => {
    setTimes([...times, time ])
  }




  return (
    <DIV className="App">
      <Timer times={times} addnewTime={addnewTime}/>
      



    </DIV>
  );
}

export default App;
