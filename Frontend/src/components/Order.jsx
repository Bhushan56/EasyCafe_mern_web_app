import React, { useState, useEffect } from "react";
import './CartItem.css'
let orderList = [{}];

const Order = () => {

  const [orderItems, setOrderItems] = useState(orderList);
  const [cost, setCost] = useState(0);
  let flag=0;
  useEffect(() => {
    console.log("Calling orderItems")
    fetch("https://cafe-webapp1.onrender.com/orderItems")
      .then((res) => res.json())
      .then((data) => {
        orderList = data;
        // console.log(cartList);
        let currentCost=0;
        data.map((element)=>{
          return currentCost+=+(element.price);
        })
        setCost(0);
        setCost((cost)=>cost+currentCost);
        setOrderItems(data);
      })
      .catch((err) => {
        console.log("Some error");
      });
  },[]);

  async function removeFromOrder() {

      fetch("https://cafe-webapp1.onrender.com/orderItem",{
        method:"DELETE"
      }).catch((err)=>{
        console.log(err);  
      })
      orderList=[];
      setOrderItems((orderItems)=>orderList);
      setCost(0);
  }


  return (
    <div style={{backgroundColor:"lightblue"}} className="routes">
    <h1 style={{textAlign:"center"}}>Order Page</h1>
    {orderList.map((element) => {
        return (
          <div className="product-item">
            <div>
              {element.name} ({element.quantity})
            </div>
            <div className="cost" style={{ color: "white" }}>
              {element.price}Rs
            </div>
              
          </div>
        );  
      })}
      {(cost>0) && 
      <div>
       {/* <div className="btn"><button onClick={removeFromOrder}>Cancel Order</button></div> */}
       <div className="btn" style={{ textAlign: 'right' }}>
  <button style={{ 
    backgroundColor: 'blue', 
    color: 'white', 
    padding: '10px 20px', 
    borderRadius: '5px', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 'bold', 
    fontSize: '16px' 
  }} onClick={removeFromOrder}>Cancel  Order</button>
</div>
       <div style={{ color: 'blue', textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem', paddingRight: '1rem', marginTop: '1rem' }}>
  Total Cost: <span style={{ marginLeft: '1rem' }}>{cost}</span>
</div>
      </div>
       }

      
    </div>
  )
}

export default Order