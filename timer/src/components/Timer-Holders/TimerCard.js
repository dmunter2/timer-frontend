import React from 'react';
import Style from 'styled-components';
import TimerFunctionality from './TimerFunctionality';

const DIV = Style.div`



`
const DIV1 = Style.div`
font-size: 2rem;
color: #0064D2;

font-weight: 700;

`

const DIV3 = Style.div`
width: 420px;
margin-bottom: 15px;
padding-bottom: 2%;
border-bottom: 2px solid black;
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



