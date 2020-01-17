import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Style from 'styled-components';
import TimeCard from './TimerCard'
import TimerForm from './TimerForm'




const DIV = Style.div`
display: flex;
justify-content: space-around;
flex-direction: row;
flex-wrap:wrap;




`

const DIV1 = Style.div`
margin: 1%;

margin-top: -80px;

@media(max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
}


`

const DIV2 = Style.div`
overflow-y: scroll
width: 450px;
height: 700px;
border: 2px solid #E4E4E2;
margin: 1%;

margin-top: -80px;
background-color: #E4E4E2;

display: flex;
justify-content: center;

@media(max-width: 500px) {
overflow-y: hidden;
margin-left: 0;
margin-right: 0;
width: 100%;

}


`




const Timer = (props) => {

    // console.log(props.times[0])
    

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
