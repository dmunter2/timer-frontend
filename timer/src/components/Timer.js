import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TimerForm from './TimerForm';
import TimeCard from './TimerCard';




const Timer = (props) => {


return (

    <div>
        <TimerForm addnewTime={props.addnewTime}/>
        <TimeCard times={props.times}/>
    </div>



)}

export default Timer;
