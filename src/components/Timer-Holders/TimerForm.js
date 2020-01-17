import React, {useState} from 'react';
import Style from 'styled-components';
import xout from './xout.png'



const DIV = Style.div`
width: 450px;
height: 400px;
padding: .5%;
background-color: #E4E4E2;
margin-bottom: 150px;

@media(max-width: 500px) {
height: 340px;

}


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
font-size: 1.5rem;
`
const H4 = Style.h4`
color: black;
margin: 0;
font-weight: 400;
margin-left: 10px;



`
const DIV4 = Style.div`

`





const DIV3 = Style.div`

`

const CREATE = Style.div`
// margin-top: 40px;
display: flex;
justify-content: center;


`

const RANDOM = Style.div`
height: 20px;
position: relative;

`


const FORM = Style.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 45px;


`


const INPUT = Style.input`
width: 70px;
border: 1px solid white;
border-radius: 5px;
height: 25px;

@media screen and (-webkit-min-device-pixel-ratio:0) { 
  select,
  textarea,
  input {
    font-size: 16px;
  }
}


`


const DIV1 = Style.div`
`


const BUTTON1 = Style.button`
width: 300px;
height: 50px;
font-size: 1rem;

background-color: #0064D2;
border: none;
color: white;
border-radius: 7px;
margin-bottom:15px;
border: 2px solid #0064D2;
// margin-left: 4px;
`

const INPUT2 = Style.input`
width: 300px;
height: 50px;
border-radius: 7px;
border: none;
padding: 0;

@media screen and (-webkit-min-device-pixel-ratio:0) { 
  select,
  textarea,
  input {
    font-size: 16px;
  }
}


`

const POPUP = Style.div`
margin-top: 15px;

`
const H5 = Style.h5``




const CreateTimer = (props) => {

    const [time, setTime] = useState({
        year: '',
        month: '',
        day: '',
        description: ''
    })

    const [display, setDisplay] = useState('no-display')

    const [popup, setPopup] = useState('no-show')

    const submitHandler = e => {
        e.preventDefault()

        //defining the date the user entered
        let day = Number(time.day)
        let month = Number(time.month)
        let year = Number(time.year)

        let customerDate = +new Date(`${year}-${month}-${day}`)
        let myCurrentDate = Date.now()

        if (customerDate > myCurrentDate) {
            let newTime = {
                ...time,
                id: Date.now()
            }

            props.addnewTime(newTime)

            setPopup('show')
            setTimeout(function(){
                setPopup('no-show')
            }, 1000)


        } else {
            setDisplay('display')
        }
    }





    const changeHandler = e => {
        e.preventDefault();
        return setTime({
            ...time,
            [e.target.name] : e.target.value
        })

        
    }

    const hideDisplay = e => {
        e.preventDefault();
        setDisplay('no-display')
    }



    return (

        <DIV>

         





            <CREATE>
                <FORM onSubmit={submitHandler}>


                  

                        <DIV3>
                            <INPUT2 className='text-area' type='text' placeholder='Event' onChange={changeHandler} name='description' />
                        </DIV3>



                        <DIV2>

                            <INPUT type='text' placeholder='month' onChange={changeHandler} name='month'/>
                            <H1>/</H1>
                            <INPUT type='text' placeholder='day' onChange={changeHandler} name='day'/>
                            <H1>/</H1>
                            <INPUT type='text' placeholder='year' onChange={changeHandler} name='year'/>

                           

                        </DIV2>

                       


                 
                        <BUTTON1 type='submit'>Create Event</BUTTON1>

                        <DIV4 className={display}>
                            <H4>Please Enter a future date</H4>
                            <img alt='x' src={xout} onClick={hideDisplay} className='delete-photo' />

                        </DIV4>

                    <POPUP className={popup}>
                        <H5>EventAdded</H5>
                    </POPUP>


                </FORM>

            </CREATE>


        </DIV>
    )
}



export default CreateTimer;
