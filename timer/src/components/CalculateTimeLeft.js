import React from 'react';
import Style from 'styled-components';

const DIV = Style.div``
const DIV1 = Style.div``
const H1 = Style.h3``

const CalculateTimeLeft = (props) => {
    const difference = +new Date(`${props.year}-${props.month}-${props.day}`) - +new Date();

    
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24) % 365),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }




    return (
        <DIV>


            <DIV1>
                {timeLeft.days}
                <H1>Days</H1>
            </DIV1>
        
            <DIV1>
                {timeLeft.hours}
                <H1>Hours</H1>

            </DIV1>

            <DIV1>
                {timeLeft.minutes}
                <H1>Minutes</H1>

            </DIV1>

            <DIV1>
                {timeLeft.seconds}
                <H1>Seconds</H1>

            </DIV1>




        </DIV>
    );
};

export default CalculateTimeLeft;


