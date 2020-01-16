import React, {useState, useEffect} from 'react';
import CalculateTimeLeft from './CalculateTimeLeft';

const TimerFunctionality = ({year, month, day}) => {


    
    const [timeLeft, setTimeLeft] = useState(<CalculateTimeLeft year={year} month={month} day={day}/>)


    useEffect(() => {
        setTimeout(() => {
            setTimeLeft (<CalculateTimeLeft year={year} month={month} day={day}/>);
        }, 1000);
    });





        return(

            <div>
                <CalculateTimeLeft year={year} month={month} day={day}/>
            </div>
        )




}

export default TimerFunctionality;

