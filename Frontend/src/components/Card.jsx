import React from "react";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();
  function addToCart(){
  
    //Add to Collection named Cart in MongoDB using Nodejs API and page should refresh on Cart Page;
    // const obj=props;
   // console.log(JSON.stringify(props.card));
    fetch("https://cafe-webapp1.onrender.com/cartItem",{
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(props.card),
          }).then(res=>res.json()).then(data=>{
            // console.log(data.requrl);
            if(data.requrl)
            navigate("/Login");
          }).catch((err)=>{
            console.log(err);
            
          })
  }

 
  return (
 
      <div className="card-container" >
        <div className="card ">
          <div className="card-body">
            <span className="card-number card-circle subtle">{props.card.pid}</span>
            <span className="card-author subtle"> {props.card.category}</span>
            <h2 className="card-title"> {props.card.name} </h2>
            <span className="card-description subtle">{props.card.description}</span>
            <div className="card-read">Read</div>
          </div>
          <img src={props.card.image} alt="images" className="card-media" />

          <button className="card-tag  subtle" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
  
  );
};

export default Card;
