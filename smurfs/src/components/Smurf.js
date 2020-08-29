import React from "react";

export default function Smurf(props) {
    console.log('smurf', props)
    return(
        <div>
            <h4>Name: {props.smurf.name}</h4>
    <h4>Age: {props.smurf.age}</h4>
        </div>
    )
    
}