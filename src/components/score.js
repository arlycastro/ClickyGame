import React from "react";
import "./style.css"

function Score(props){
return (
    <span>{`${props.label} : ${props.value}`}</span>
    )
}
export default Score;