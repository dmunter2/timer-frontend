import React, {useState} from 'react';
import Style from 'styled-components';

const DIV = Style.div`
display: flex;
flex-direction: row;
margin-top: 10px;
color: white;
justify-content: space-around;


@media(max-width: 500px) {
// border: 1px solid blue;

}



`
const DIVSECONDS = Style.div`
display: flex;
flex-direction: row;


align-items: center;
justify-content: space-between;



background-color: #0064D2;

width: 100px;

display: flex;
justify-content: center
`

const DIV1YEAR = Style.div`
display: flex;
flex-direction: row;


align-items: center;
justify-content: space-between;
background-color: #0064D2;

width: 130px;
display: flex;
justify-content: center

`
const DIV1DAYS = Style.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;


background-color: #0064D2;
width: 170px;
display: flex;
justify-content: center

`
const DIV1HOURS = Style.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;



background-color: #0064D2;

width: 70px;

display: flex;
justify-content: center

`
const DIVMINUTES = Style.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;


width: 90px;
background-color: #222;




display: flex;
justify-content: center
`





const H1 = Style.h3`
color: white;
font-size: 1rem;

`
const NEW = Style.h4`
font-size: 1rem;
margin-right: 10px;
color: white;
font-size: .5 rem;


`

const H8 = Style.h5`
font-size: .5 rem;
color: white;
`


const NEWDIV = Style.div`


display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 7px;
`
const STACKDIV = Style.div`

`

const CalculateTimeLeft = (props) => {


    const [display, setDisplay] = useState('showYear')

    const difference = +new Date(`${props.year}-${props.month}-${props.day}`) - +new Date();

    // console.log(difference);
    // console.log(+new Date(`${props.year}-${props.month}-${props.day}`))
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
            days: Math.floor(difference / (1000 * 60 * 60 * 24) % 365),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }




    return (
        <DIV>

            <DIV1YEAR className={display}>
                {timeLeft.years}
                <H1>Years</H1>
            </DIV1YEAR>

            <STACKDIV>
                <DIV1DAYS>
                    <NEW>{timeLeft.days}</NEW>
                    <H1>Days</H1>
                </DIV1DAYS>


                <NEWDIV>

                    <DIV1HOURS>
                        <NEW>
                            {timeLeft.hours}
                        </NEW>
                        <H8>Hours</H8>
                    </DIV1HOURS>

                    <DIVMINUTES>
                        <NEW>
                            {timeLeft.minutes}
                        </NEW>
                        <H8>Minutes</H8>

                    </DIVMINUTES>
                </NEWDIV>
            </STACKDIV>


   
         

            <DIVSECONDS>
                <NEW>
                    {timeLeft.seconds}
                </NEW>
                <H1>Seconds</H1>

            </DIVSECONDS>




        </DIV>
    );
};

export default CalculateTimeLeft;


