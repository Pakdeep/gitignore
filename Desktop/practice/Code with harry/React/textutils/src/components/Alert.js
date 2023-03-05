import React from "react";

const Alert = (props) => {
    const capitalize=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
    <div style={{height:"80px"}}>
    {props.alert &&<div className={`alert alert-${props.alert.type}`} role="alert" style={{height:"60px"}} >
      <p ><strong>{capitalize(props.alert.type)}: </strong>
      {props.alert.msg}</p>
    </div>}
    </div>
  );
};
export default Alert;
