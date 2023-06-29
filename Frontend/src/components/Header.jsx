import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import './Header.css'

const Header = () => {

  const [login,setLogin]=useState(0);

  async function loggingOut() {
    fetch('https://cafe-webapp1.onrender.com/Logout').then((res)=>{return res.json()}).then((data)=>{if(data.email===null){
      console.log(data);
      setLogin((login)=>login=0);
      // console.log("i am out ",login);
    }
    else {
      console.log(data);
      setLogin((login)=>1);
      // console.log("i am in ",login);
    }
  })
  }

  useEffect(()=>{
  
      fetch('https://cafe-webapp1.onrender.com/currentUser').then((res)=>{return res.json()}).then((data)=>{if(data.email===null){
        setLogin((login)=>0);
        // console.log("CurrentUser Absent",login);
      }
      else {
        setLogin((login)=>1);
        // console.log("CurrentUser Present",login);
      }
    })
  })


  return (
    <>
    <header>
    <Link to="/"><img src="/logo.png" alt="Logo" /></Link>
      <nav>
        <ul>
          <li>
            <Link to="/Order">Orders</Link>
          </li>
          <li>
            <Link to="/Cart" >Cart</Link>
          </li>
          <li>
            {login===0 && <Link to="/Login" >Login</Link>}
            {login===1 && <Button onClick={loggingOut}>Logout</Button>}
          </li>
        </ul>
      </nav>
    </header>
    
    </>
  );
};

export default Header;