import React from 'react';




const TimerInput = ({minutes, seconds}) => {


    return (

        <div>
            <h2>Input your desired Time</h2>
            <input type='number' required />
            {minutes} : {seconds}



        </div>
    )
}


export default TimerInput;


