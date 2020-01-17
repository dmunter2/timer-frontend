import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
background-color: #E53238;
height: 250px;
@media(max-width: 500px) {
padding-top: 2%;
display: flex;
justify-content: center;

}
`


const H1 = Style.h1`
font-size: 4rem;
margin: 0;
margin-left: 6%;
padding-top: .5%;
color: white;

@media(max-width: 500px) {
margin: 0;

}


`





const Header = () => {


    return (
        <DIV>
            <H1>Countdown</H1>


        </DIV>
    )
}


export default Header;

