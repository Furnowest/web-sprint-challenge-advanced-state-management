import React, { useState } from "react";



export default function AddSmurf(props) {
 const [newSmurf, setNewSmurf] = useState({
   name: "",
   age: "",
   height: ""
 });

 const handleChanges = e => {
   setNewSmurf({
     ...newSmurf,
     [e.target.name]: e.target.value
   });
 };

 const handleSubmit = e => {
   e.preventDefault();

   props.addSmurf(newSmurf);
   setNewSmurf({
     name: "",
     age: "",
     height: ""
   });
 };

 return (
   <div className="Input">
     <h2> Add a Smurf!</h2>
     <input
       type="text"
       name="name"
       value={newSmurf.name}
       onChange={handleChanges}
       
     />
     <input
       type="text"
       name="age"
       value={newSmurf.age}
       onChange={handleChanges}
      
     />
     <input
       type="text"
       name="height"
       value={newSmurf.height}
       onChange={handleChanges}
       
     />
     <button className="button" onClick={handleSubmit}>
       New Smurf
     </button>
   </ div>
 );
} 
