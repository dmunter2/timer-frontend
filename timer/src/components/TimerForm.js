import React, {useState} from 'react';
import Style from 'styled-components';



const DIV = Style.div`
background-color: #0b0f54;
`

const DIV2 = Style.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;`

const H1 = Style.h4`
margin-left: 1%;
margin-right: 1%;
color: white;
`
const DIV3 = Style.div``

const CREATE = Style.div``

const FORM = Style.form`
display: flex;
flex-direction: row;
justify-content: space-around;
height: 100px;

`

const INPUT = Style.input`
width: 50px;
border: 1px solid white;
border-radius: 5px;
`


const DIV1 = Style.div``

const HEADER = Style.div`
display: flex;
font - family: 'Source Sans Pro', sans - serif;
font-size: 2rem;
font-weight: 700;
color: #009a9a;

`

const BUTTON1 = Style.button``

const INPUT2 = Style.input`
width: 150px;
`

//fonts 
//

// font - family: 'Poppins', sans - serif;---- regular fonts

// font - family: 'Source Sans Pro', sans - serif;




const CreateTimer = (props) => {

    const [time, setTime] = useState({
        year: '',
        month: '',
        day: '',
        description: ''
    })


    const submitHandler = e => {
        e.preventDefault()
        let newTime = {
            ...time, 
            id: Date.now()
        }
        props.addnewTime(newTime)

    }

    const changeHandler = e => {
        e.preventDefault();
        return setTime({
            ...time,
            [e.target.name] : e.target.value
        })

        
    }




    return (

        <DIV>

            <HEADER>
                <DIV1>Countdown</DIV1>
            </HEADER>




            <CREATE>
                <FORM onSubmit={submitHandler}>

                        <DIV2>

                            <INPUT type='text' placeholder='month' onChange={changeHandler} name='month'/>
                            <H1>/</H1>
                            <INPUT type='text' placeholder='day' onChange={changeHandler} name='day'/>
                            <H1>/</H1>
                            <INPUT type='text' placeholder='year' onChange={changeHandler} name='year'/>

                           

                        </DIV2>

                        <DIV3>
                            <INPUT2 className='text-area' type='text' placeholder='Event' onChange={changeHandler} name='description' />
                        </DIV3>

                 
                        <BUTTON1 type='submit'>Create Event</BUTTON1>


                </FORM>

            </CREATE>


        </DIV>
    )
}



export default CreateTimer;
