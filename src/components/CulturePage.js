import React from 'react';
import Corousel1 from './Corousel1';
import Categoriescult from './Categoriescult';
import { Data1 } from "./Data1";
import { useState } from "react";
import Card1 from "./Card1";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
function CulturePage(){
    const history = useHistory();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    alanBtn({
      key:
        "YOUR__KEY",
      onCommand: ({ command, product }) => {
        if (command === "show") {
          filter(product);
        }
        if (command === "cartPage") {
          history.push("/cart");
        }
        if (command === "ordersPage") {
          history.push("/orders");
        }
        if (command === "homePage") {
          history.push("/");
        }
      },
    });
    filter("");
  }, [history]);

  const filter = (names) => {
    const filtered = Data1.filter((item) => item.name.includes(names));
    console.log(filtered);
    setCategory(filtered);
  };
	return(
		<div>
	       <Categoriescult />
	       <div className=""style={{margin:"20px"}}><Corousel1/></div>   
                 <h2 style={{background:"white",marginLeft:"20px", marginTop:"10px"}}>
            Best Offers
            <button style={{border:"none",padding:"10px",marginLeft:"20px",borderRadius:"50px",background:"red",color:"white"}}>Demand</button>
        </h2> 
        <hr style={{marginLeft:"20px",marginRight:"15px"}} />
	       <div style={{ display: "flex", flexWrap: "wrap", allignItems:"center", justifyContent:"center" }}>
            {category.map((item) => (
              <Card1
                image={item.image}
                name={item.name}
                rating={item.rating}
                actualPrice={item.actualPrice}
                offerPrice={item.offerPrice}
                info={item.info}
              />
            ))}
          </div>
	    </div>
    );
}

export default CulturePage;