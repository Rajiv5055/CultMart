import Header from "./components/Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { Data } from "./components/Data";
import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Route, Switch, useHistory } from "react-router-dom";
import Corousel from "./components/Corousel";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories';
import CulturePage from './components/CulturePage';
function App() {
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
    const filtered = Data.filter((item) => item.name.includes(names));
    console.log(filtered);
    setCategory(filtered);
  };

  return (
    <>
      <Header />
       
       <Switch>
        <Route exact path="/">
         <Categories/>
         <Corousel/>
        <h2 style={{background:"white",marginLeft:"20px", marginTop:"10px"}}>
            Deals of the Day
            <button style={{border:"none",padding:"10px",marginLeft:"20px",borderRadius:"50px",background:"red",color:"white"}}>Trending</button>
        </h2> 
        <hr style={{marginLeft:"20px",marginRight:"15px"}} />
          <div style={{ display: "flex", flexWrap: "wrap",allignItems:"center", justifyContent:"center" }}>
            {category.map((item) => (
              <Card
                image={item.image}
                name={item.name}
                rating={item.rating}
                actualPrice={item.actualPrice}
                offerPrice={item.offerPrice}
              />
            ))}
          </div>
        </Route>

        <Route exact path="/cart">
          <Navbar text={"Your Cart is Empty...."} />
        </Route>
        <Route exact path="/orders">
          <Navbar text={"You do not have any order History.."} />
        </Route>
        <Route exact path="/culture">
           <CulturePage />
        </Route>
      </Switch> 
      <Footer/>
    </>
  );
}

export default App;
