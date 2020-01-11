import React from 'react';


const StartButton = () => {

    const SubmitHandler = e => {
        e.preventDefault();

    }

    
    return (
        <div>
            <button onClick={SubmitHandler}>Start</button>


        </div>
    )
}


export default StartButton;

