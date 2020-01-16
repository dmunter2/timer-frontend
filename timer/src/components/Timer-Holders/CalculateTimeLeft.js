import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
display: flex;
flex-direction: row;
// width: 400px;
color: white;
justify-content: space-around;
`
const DIV1 = Style.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`


const H1 = Style.h3`
color: black;
`
const NEW = Style.h4`
font-size: 1.3rem;
margin-right: 10px;
color: black;
`

const CalculateTimeLeft = (props) => {
    const difference = +new Date(`${props.year}-${props.month}-${props.day}`) - +new Date();

    // console.log(difference);
    // console.log(+new Date(`${props.year}-${props.month}-${props.day}`))
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            // years: Math.floor((difference / 1000 * 60 * 60 * 365))
            days: Math.floor(difference / (1000 * 60 * 60 * 24) % 365),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }




    return (
        <DIV>


            <DIV1>
                <NEW>{timeLeft.days}</NEW>
                <H1>Days</H1>
            </DIV1>
        
            <DIV1>
                <NEW>
                    {timeLeft.hours}
                </NEW>
                <H1>Hours</H1>

            </DIV1>

            <DIV1>
                <NEW>
                    {timeLeft.minutes}
                </NEW>
                <H1>Minutes</H1>

            </DIV1>

            <DIV1>
                <NEW>
                    {timeLeft.seconds}
                </NEW>
                <H1>Seconds</H1>

            </DIV1>




        </DIV>
    );
};

export default CalculateTimeLeft;


