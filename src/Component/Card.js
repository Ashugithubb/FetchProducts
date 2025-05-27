import React from "react";
import '../Style/ecard.css';
const Card = (props)=>{

return(
<>
<div className="container">
    <div id="img">
    <img style= {{width:"360px",height:"300px"}}src={props.image} alt="productimage"/>
  </div>
    <div className="detail">
        <h5>{props.title}</h5>
        <h5>{props.price}<i className="fa-solid fa-indian-rupee-sign"></i></h5>
        <h6>{props.rating}/5</h6>
    </div>
    
</div>
</>);
}
export default Card;