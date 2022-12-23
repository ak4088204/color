
import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';



function App() {
  let colors = [
    {
      value:1,
      label:"lime"
    },
    {
      value:2,
      label:"lavender"
    },
    {
      value:3,
      label:"crimson"
    },
    {
      value:4,
      label:"darkblue"
    },
    {
      value:5,
      label:"teal"
    },
    {
      value:6,
      label:"ghostwhite"
    },
    {
      value:7,
      label:"aquamarine"
    },
    {
      value:8,
      label:"aliceblue"
    }

  ];

  const[data,setdata]=useState(colors.label)
  function change(e){
    setdata(e.label)
   
  }
  return (
    <div className="dropdownbar">
          <Select options={colors} onChange={change} className="option"></Select>
          
          <center><button style={{backgroundColor:`${data}`}}></button></center>
        
    </div>
  );
}

export default App;
