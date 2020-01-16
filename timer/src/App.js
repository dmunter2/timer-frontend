import React, {useState} from 'react';
import './App.css';
import Timer from './components/Timer-Holders/Timer';
import Style from 'styled-components';
import Header from './components/Header'




const DIV = Style.div`
// background-color: #000052;
height: 100%;

height: 1000px;
`

function App() {

  const [times, setTimes] = useState([])

  const addnewTime = time => {
    setTimes([...times, time ])
  }




  return (


    <DIV>
      <Header />


      <Timer times={times} addnewTime={addnewTime}/>
      



    </DIV>
  );
}

export default App;
