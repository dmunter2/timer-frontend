import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TimerForm from './TimerForm';
import TimeCard from './TimerCard';
import Style from 'styled-components';




const DIV = Style.div`
display: flex;
justify-content: space-around;
flex-direction: row;
`

const DIV1 = Style.div``

const DIV2 = Style.div`
`


const Timer = (props) => {


return (

    <DIV>

        <DIV1>
            <TimerForm addnewTime={props.addnewTime}/>
        </DIV1>

        <DIV2>
            <TimeCard times={props.times}/>
        </DIV2>

    </DIV>



)}

export default Timer;
