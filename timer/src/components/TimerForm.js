import React, {useState} from 'react';
import Style from 'styled-components';



const DIV = Style.div``

const DIV2 = Style.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;`

const H1 = Style.h4`
margin-left: 1%;
margin-right: 1%;
`
const DIV3 = Style.div``

const CREATE = Style.div``

const FORM = Style.form`

`

const INPUT = Style.input`
width: 50px;
`


const DIV1 = Style.div``

const HEADER = Style.div``

const BUTTON1 = Style.button``




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
                            <textarea type='text' placeholder='description' onChange={changeHandler} name='description' />
                        </DIV3>

                 
                        <BUTTON1 type='submit'>Create Event</BUTTON1>


                </FORM>

            </CREATE>


        </DIV>
    )
}



export default CreateTimer;
