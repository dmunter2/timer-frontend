import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
background-color: #E53238;
height: 250px;
`


const H1 = Style.h1`
font-size: 4rem;
margin: 0;
margin-left: 6%;
padding-top: .5%;
color: white;

`





const Header = () => {


    return (
        <DIV>
            <H1>Countdown</H1>


        </DIV>
    )
}


export default Header;

