import React from 'react';
import Style from 'styled-components';
import TimerFunctionality from './TimerFunctionality';

const DIV = Style.div`

`
const DIV1 = Style.div``

const DIV3 = Style.div`
border: 1px solid black;
width: 400px;
`

const TimerCard = (props) => {


    return(
        
        <DIV>
            {props.times.map((time, index) => {
                return(
                    <DIV3 key={index}>
                        <TimerFunctionality day={time.day} month={time.month} year={time.year}/>
                        <DIV1>{time.description}</DIV1>
                    </DIV3>
                )
            })}

        </DIV>
    )
}



export default TimerCard; 



