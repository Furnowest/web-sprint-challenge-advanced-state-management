import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AddSmurf from "./AddSmurf";
import SmrfContx from "../contexts/SmrfContx";
import Smurfs from "./Smurfs"

export default function App() {
  const [smurfs, setSmurfs] = useState([]);
 
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.error("server error", err);
      });
  }, []);
 
  const addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log('post res', res);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
 
  console.log("smurfs", smurfs);
  return (
    <div className="App">
      <SmrfContx.Provider value={{ smurfs }}>
        <Smurfs />
        <AddSmurf addSmurf={addSmurf} />
      </SmrfContx.Provider>
    </div>
  );
 }
 
