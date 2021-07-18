import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "./Modal.css";
import CloseIcon from "@material-ui/icons/Close";
// import UserContext from "./context/userContext";
import { useHistory } from "react-router-dom";
import companylogo from "./Images/Icons/companylogo.png";
import Cultmart from "./Images/Icons/Cultmart.png";

export default function TransitionsModal(props) {
  // const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const close = () => {
    props.handleClose();
  };

  return (
    <div>
      <Modal className="mmmmm" open={props.open} onClose={close}>
        <>
          <div className="closeButton" onClick={close}>
            <CloseIcon />
          </div>
          <div className="modalL">
            <div className="modalL__left">
              <div className="modalLLeft__top">
                <h1>Login</h1>
                <p>Relive Shopping with Biggest brands of india</p>
              </div>
              <div style={{paddingTop:"250px",marginLeft:"-20px"}}>
               <img alt="" width="45px" src={companylogo}/>
               <img alt="" width="120px" src={Cultmart} />
              </div>
            </div>
            <div className="modalL__right">
              <div className="form">
                <div className="wrapper">
                  <div className="input__data">
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="underline"></div>
                    <label>Enter Email/Mobile number</label>
                  </div>
                  <div className="input__data">
                    <input
                      type="text"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="underline"></div>
                    <label>Enter Password</label>
                  </div>
                </div>

                <div className="form__button">
                  <button
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <div style={{ marginLeft: "140px", padding: "15px" }}>Or</div>
                  <div className="form__button1">
                    <button>Request OTP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
}
