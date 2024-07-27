import React from "react";
import "./Modal.css";
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Modal({ setOpenModal }) {
    const navigate = useNavigate();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <div className="titleCloseBtn">
           <MdCancel
            className="loginCancel" 
            onClick={(e)=>{
                setOpenModal(false);
            }}
            />
        </div> */}
        <div className="title">
          <h1>Success</h1> 
          <AiFillCheckCircle className="titleSuccess"/>
        </div>
        <div className="body">
            <h3>Thanking You !</h3>
          <p>We assure you that your complaint will be taken seriously and addressed promptly!</p>
        </div>
        <div className="down">
          <button
            onClick={() => {
              navigate("/");
            }}
            id="homeBtn"
          >
            Go to Home
          </button>
          {/* <button
          onClick={(e) => {
            navigate("/complain");
            setOpenModal(false);
          }}
          >Continue</button> */}
        </div>
      </div>
    </div>
  );
}

