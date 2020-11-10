import React,{useState, useEffect} from 'react';
import DisplayComponent from './DisplayComponent';

//in use state we specify the state value
//in the function component we will be able to maintain the state


const url = "https://developerfunnel.herokuapp.com/location"

function HooksComponent(){
    const [title] = useState('Hooks App');
    const [count,myCount] = useState(0)
    const [count1,myCount1] = useState(0);
    const [city,setCity] = useState()

        useEffect(()=>{
            fetch(url)
            .then((res) => res.json())
            .then((data) =>{
                setCity(data)
            })
        })


    return(
        <div>
            <center>
                <h2>{title}</h2>
                <h2>{count}</h2>
                <button onClick={()=>{myCount(count+1)}}>Counter</button>
                <h2>{count1}</h2>
                <button onClick={()=>{myCount(count1+1)}}>Counter1</button>
                <DisplayComponent myCity={city}/>
            </center>
        </div>
    )
}

export default HooksComponent;

//you can't have same statevariable or same setvariable.. so they use two different count statevariables