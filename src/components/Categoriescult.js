import React from 'react';
import { NavLink } from "react-router-dom";
import cat1 from './Images/cat1.png';
import cultcat3 from './Images/cultcat3.jpg';
import cat4 from './Images/cat4.png';
import cat6 from './Images/cat6.png';
import cultcat1 from './Images/cultcat1.png';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import FashionT from "./FashionT";
import DecorativesT from "./DecorativesT";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Header.css';
import returnbut from "./Images/Icons/returnbut.png";

function Categories(){
	return(
      <div style={{display:'flex',justifyContent:'center'}}>
      <NavLink to="/">
      <button style={{allignItems:"center",border:"none",background:"white"}}>
        <p style={{paddingRight:"50px"}}>
          <div  style={{textAlign:'center',justifyContent:'center',paddingTop:'20px',margin:'0px'}}><img id='culture' alt='' src={returnbut} width='45px' height='45px' /></div>
          <div  
             style={{textAlign:'center',justifyContent:'center',paddingTop:'10px'}}>Back to home</div> 
        </p>
      </button>
      </NavLink>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
        <p style={{paddingRight:"50px"}}>
          <div  style={{textAlign:'center',justifyContent:'center',padding:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cat1} width='50px' height='50px' /></div>
          <div  style={{textAlign:'center',justifyContent:'center',padding:'0px'}}>Top Offers</div> 
        </p>
      </button>

      <button style={{allignItems:"center",border:"none",background:"white"}}>
       <Tippy content={<FashionT/>} interactive={true} offset={[5, 20]} theme="light" placement="bottom"  animation="scale">
        <p style={{paddingRight:"50px"}}>
          <div  style={{textAlign:'center',justifyContent:'center',padding:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cat4} width='50px' height='50px' /></div>
          <div  style={{textAlign:'center',justifyContent:'center',padding:'0px'}}>Clothings<ExpandMoreIcon /></div> 
        </p>
      </Tippy>
      </button>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
       <Tippy content={<DecorativesT/>} interactive={true} offset={[5, 20]} theme="light" placement="bottom" animation="scale">
        <p style={{paddingRight:"50px"}}>
          <div  style={{textAlign:'center',justifyContent:'center',paddingTop:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cultcat3} width='50px' height='50px' /></div>
          <div  style={{textAlign:'center',justifyContent:'center',paddingTop:'10px'}}>Decoratives<ExpandMoreIcon /></div> 
        </p>
       </Tippy>
      </button>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
          <p style={{paddingRight:"50px"}}>
            <div  style={{textAlign:'center',justifyContent:'center',padding:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cat6} width='50px' height='50px' /></div>
            <div  style={{textAlign:'center',justifyContent:'center',padding:'0px'}}>Furnitures</div> 
         </p>
      </button>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
          <p style={{paddingRight:"50px"}}>
            <div  style={{textAlign:'center',justifyContent:'center',padding:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cultcat1} width='50px' height='50px' /></div>
            <div  style={{textAlign:'center',justifyContent:'center',padding:'0px'}}>Paintings</div> 
         </p>
      </button>
      </div>
	);
}

export default Categories;