import React from 'react';
import Style from 'styled-components';
import TimerFunctionality from './TimerFunctionality';

const DIV = Style.div`
`
const DIV1 = Style.div`
font-size: 1.5rem;
color: teal;
font-weight: 700;

`

const DIV3 = Style.div`
width: 460px;
border: 1px solid white;
margin-bottom: 15px;
`

const TimerCard = (props) => {


    return(
        
        <DIV>
            {props.times.map((time, index) => {
                return(
                    <DIV3 key={index}>
                        <DIV1>{time.description}</DIV1>

                        <TimerFunctionality day={time.day} month={time.month} year={time.year}/>
                    </DIV3>
                )
            })}

        </DIV>
    )
}



export default TimerCard; 



