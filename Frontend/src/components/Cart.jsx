import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './CartItem.css'
let cartList = [{}];
 
const Cart = () => {
  const [cartItems, setCartItems] = useState(cartList);
  const [cost, setCart] = useState(0);
  const [order,bookOrder]=useState(0);
  const navigate = useNavigate();
  let flag2=0;
  let flag=0;
  useEffect(() => {
    fetch("https://cafe-webapp1.onrender.com/cartItems")
      .then((res) => res.json())
      .then((data) => {
        cartList = data;
        // console.log(cartList);
        let currentCost=0;
        data.map((element)=>{
          currentCost+=+(element.price);
        })
        setCart(0);
        setCart((cost)=>cost+currentCost);
        setCartItems(data);
      })
      .catch((err) => {
        console.log("Some error");
      });
      flag2=0;
  },[]);
  //Add css for this file
  // console.log(props.card);
  async function removeFromCart(element) {
    // console.log(props.card);
    flag2=0;
    element.minus = 1;
    if (element.quantity <= 1 || flag==1) {
      element.minus = 0;
    }
    // console.log(JSON.stringify(props.card));

    fetch("https://cafe-webapp1.onrender.com/cartItem", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(element),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        let currentCost=0;
        data.map((element)=>{
          currentCost+=+(element.price);
        })
        setCart(0);
        setCart((cost)=>cost+currentCost);
        cartList=data;
        setCartItems((cartItems)=>cartList);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function addToOrder() {
    fetch("https://cafe-webapp1.onrender.com/orderItem",{
            method:"POST"
          }).then(res=>res.json()).then(data=>{
            // console.log(data.requrl);
            if(data.requrl) 
            navigate("/Login");
            

          }).catch((err)=>{
            console.log(err);
            
          })
       
      bookOrder((order)=>1)
      alert("Order Booked Successfully");
      cartList=[];
      setCartItems((cartItems)=>cartList);
      setCart(0);
      flag2=1;

  }


  return <>
    <div style={{backgroundColor:"lightgreen"}} className="routes">
    <h1 style={{textAlign:"center"}}>Cart Page</h1>
    {cartList.map((element) => {
        return (
          <div className="product-item">
            <div>
              {element.name} ({element.quantity})
            </div>
            <div className="cost" style={{ color: "white" }}>
              {element.price}Rs
            </div>

            <button
              type="submit"
              style={{ cursor: "pointer", fontSize: "30px", padding: "10px" }}
              onClick={() => {flag=0; return removeFromCart(element)}}
            >
              -
            </button>
            <button
              type="submit"
              style={{ cursor: "pointer", adding: "5px" }}
              onClick={() =>{flag=1; return removeFromCart(element)}}>
              Remove
            </button>
          </div>

          
        );
      })}

{/* {(flag2>0) && <div>Order Placed Successfully</div>} */}

{(cost>0) && 
      <div>
       <div style={{ color: 'green', textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem', paddingRight: '1rem', marginTop: '1rem' }}>
  Total Cost: <span style={{ marginLeft: '1rem' }}>{cost.toFixed(2)}</span>
</div>

<div className="btn" style={{ textAlign: 'right' }}>
  <button style={{ 
    backgroundColor: 'green', 
    color: 'white', 
    padding: '10px 20px', 
    borderRadius: '5px', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 'bold', 
    fontSize: '16px' 
  }} onClick={addToOrder}>Place Order</button>
</div>

      </div>
     }
    </div>
  </>
};
export default Cart;
