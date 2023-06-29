import 'bootstrap/dist/css/bootstrap.min.css'


import React from 'react'

const HomeHeader = ({filterItem,menuList}) => {
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
     
        { 
            menuList.map((currCategory)=>
             <button className='btn-group__item'  onClick={()=>{return filterItem(currCategory)}}>{currCategory}</button>
           )
        }
      </div>
    </nav> 
 
    </>
  )
}

export default HomeHeader;