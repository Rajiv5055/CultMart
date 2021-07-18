import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./logo.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import LoginT from "./LoginT";
import MoreT from "./MoreT";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Cultmart from './Images/Icons/Cultmart.png';

const Header = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const showvalue = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showvalue);
    };
  }, [show]);

  const handleOpen = () => {
    setOpen(true);
  };

  const ShowLogin = () => {
    return (
      <>
        <div className="showLogin">
          <div className="showLogin__button">
            <button>LOGIN</button>
          </div>
          <div className="showLogin__info">
            <div>
              <p>New customer?</p>
            </div>
            <div>
              <p style={{ color: "#2874f0" }}>Sign Up</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="header">
      <NavLink to="/">
      <div className="first">
             <img src={Cultmart} height="80px" width="150px" alt=""/>
      </div>
      </NavLink>
      <div className="second">
        <input type="text" placeholder="Search for products,brands and more" />
        <SearchIcon />
      </div>
      <div className="third">
        {!show ? (
          <button onClick={handleOpen}>
            <Tippy content={<LoginT></LoginT>}  interactive={true}  offset={[5, 20]}  theme="light" animation="scale">
              <span>Login</span>
            </Tippy>
          </button>
        ) : (
          <Tippy content={<ShowLogin></ShowLogin>}  interactive={true}  theme="light"  animation="perspective" visible={show} >
            <button>Login</button>
          </Tippy>
        )}
      </div>
      <div className="fourth">
        <Tippy  content={<MoreT></MoreT>}  interactive={true}  theme="light"  offset={[5, 18]}  animation="perspective">
          <p className="tp">More</p>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div onClick={() => history.push("/cart")} className="fifth">
        <img src={Logo} alt="" />
        <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
      </div>
      <div className="modal"></div>
      <Modal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Header;
