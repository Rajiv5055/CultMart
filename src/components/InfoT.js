import React from 'react';
import './LoginT.css';

const InfoT = ({ info, name }) => {
	return(
    <div style={{padding:"10px",color:"white",background:"grey"}}>
    <h5>{name} :</h5>
    <hr style={{padding:"0px", margin:"0px",marginBottom:"10px",height:"3px"}}/>
    <div> {info} </div>
    </div>
	);
}

export default InfoT;