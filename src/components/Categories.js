import React from 'react';
import { NavLink } from "react-router-dom";
import cat1 from './Images/cat1.png';
import cat3 from './Images/cat3.png';
import cat4 from './Images/cat4.png';
import cat5 from './Images/cat5.png';
import cat6 from './Images/cat6.png';
import culture from "./Images/Icons/culture.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import ElectronicsT from "./ElectronicsT";
import CulturalT from './CulturalT';
import FashionT from "./FashionT";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Header.css';

function Categories(){
	return(
      <div style={{display:'flex',justifyContent:'center'}}>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
        <p style={{paddingRight:"50px"}}>
          <div  style={{textAlign:'center',justifyContent:'center',padding:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cat1} width='50px' height='50px' /></div>
          <div  style={{textAlign:'center',justifyContent:'center',padding:'0px'}}>Top Offers</div> 
        </p>
      </button>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
         <p style={{paddingRight:"50px"}}>
           <div  style={{textAlign:'center',justifyContent:'center',padding:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cat3} width='50px' height='50px' /></div>
           <div  style={{textAlign:'center',justifyContent:'center',padding:'0px'}}>Mobiles</div> 
         </p>
      </button>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
       <Tippy content={<FashionT/>} interactive={true} offset={[5, 20]} placement="bottom" theme="light" animation="scale">
        <p style={{paddingRight:"50px"}}>
          <div  style={{textAlign:'center',justifyContent:'center',padding:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cat4} width='50px' height='50px' /></div>
          <div  style={{textAlign:'center',justifyContent:'center',padding:'0px'}}>Fashion<ExpandMoreIcon /></div> 
        </p>
      </Tippy>
      </button>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
       <Tippy content={<ElectronicsT/>} interactive={true} offset={[5, 20]} placement="bottom"  theme="light" animation="scale">
        <p style={{paddingRight:"50px"}}>
          <div  style={{textAlign:'center',justifyContent:'center',paddingTop:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cat5} width='50px' height='50px' /></div>
          <div  style={{textAlign:'center',justifyContent:'center',paddingTop:'10px'}}>Electronics<ExpandMoreIcon /></div> 
        </p>
       </Tippy>
      </button>
      <button style={{allignItems:"center",border:"none",background:"white"}}>
          <p style={{paddingRight:"50px"}}>
            <div  style={{textAlign:'center',justifyContent:'center',padding:'10px',margin:'0px'}}><img id='profileimage' alt='' src={cat6} width='50px' height='50px' /></div>
            <div  style={{textAlign:'center',justifyContent:'center',padding:'0px'}}>Home</div> 
         </p>
      </button>

      <NavLink to="/culture">
      <button style={{allignItems:"center",border:"none",background:"white"}}>
       <Tippy content={<CulturalT/>} interactive={true} offset={[5, 20]} theme="light" placement="bottom"  animation="perspective">
        <p style={{paddingRight:"50px"}}>
          <div  style={{textAlign:'center',justifyContent:'center',paddingTop:'20px',margin:'0px'}}><img id='culture' alt='' src={culture} width='50px' height='50px' /></div>
          <div  
             style={{textAlign:'center',justifyContent:'center',paddingTop:'10px'}}>Cultural Heritage<ExpandMoreIcon /></div> 
        </p>
      </Tippy>
      </button>
      </NavLink>
      
      </div>
	);
}

export default Categories;