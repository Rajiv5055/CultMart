import React from 'react';
import { NavLink } from "react-router-dom";
import "./style.css";
import gmail from "./Images/Icons/gmail.png";
import Facebook from "./Images/Icons/Facebook.jfif";
import Instagram from "./Images/Icons/Instagram.jpg";
import messenger from "./Images/Icons/messenger.png";
import Whatsapp from "./Images/Icons/Whatsapp.png";

function Footer(){
	return(
      <footer className="footer">
        <div style={{padding:"20px"}}className="container">
            <div className="row">             
                <div className="col-4 offset-1 col-sm-2">
                    <h4 style={{textDecoration:"underline",color:"white"}}>Links</h4>
                    <ul className="list-unstyled">
                        <li><a style={{textDecoration:"none",color:"white"}} href="">ELECTRONICS</a></li>
                        <li><a style={{textDecoration:"none",color:"white"}} href="">GROCERIES</a></li>
                        <li><a style={{textDecoration:"none",color:"white"}} href="">MOBILES</a></li>
                        <li><NavLink to="/culture" ><a style={{textDecoration:"none",color:"white"}} href="">CULTURAL HERITAGE</a></NavLink></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h4 style={{textDecoration:"underline",color:"white"}}>Our Address</h4>
                    <address style={{color:"white"}}>
		             <h6> 121, Clear Water Bay Road</h6>
		             <h6> Clear Water Bay, Bengalore</h6>	
    	             <h6> Karnataka, India</h6>
                     <h6> : +85X XXXX X678</h6>
                     <h6>: +85X XXXX X321 </h6>
                      <a style={{color:"white"}}href="mailto:gmail.com">mail at: xyz@gmail.com</a>
		           </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="">
                        <h4 style={{textDecoration:"underline",color:"white", justifyContent:"top"}}>Social Media: </h4>
                        <a href="http://www.facebook.com"><img alt="" style={{margin:"10px"}} width="30px" src={Facebook}/></a>
                        <a href="http://www.messenger.com"><img alt="" style={{margin:"10px"}} width="30px" src={messenger}/></a>
                        <a href="http://instagram.com/"><img alt="" style={{margin:"10px"}} width="30px" src={Instagram}/></a>
                        <a href="http://whatsapp.com/"><img alt="" style={{margin:"10px"}} width="35px" src={Whatsapp}/></a>
                        <a href="mailto:"><img alt="" style={{margin:"10px"}} width="40px" src={gmail}/></a>
                    </div>
                </div>
           </div>
        </div>
    </footer>
	);
}

export default Footer;