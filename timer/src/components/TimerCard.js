import React from 'react';
import Style from 'styled-components';
import TimerFunctionality from './TimerFunctionality';


const DIV1 = Style.div`

`

const TimerCard = (props) => {


    return(
        
        <div>
            {props.times.map((time, index) => {
                return(
                    <div key={index}>
                        <TimerFunctionality day={time.day} month={time.month} year={time.year}/>
                        <DIV1>{time.description}</DIV1>
                   </div>
                )
            })}

        </div>
    )
}



export default TimerCard; 



