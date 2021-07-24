import React, { useState } from "react";
import "./Popup.css";
import CloseIcon from "@material-ui/icons/Close";
import firebase from "../firebase";
function Popup({ trigger, setTrigger, setDisc }) {
  const [detail, SetDetail] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const db = firebase.firestore();
  const handleChange = (event) => {
    const { name, value } = event.target;
    SetDetail((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submit = (event) => {
    if (
      detail.name === "" ||
      detail.email === "" ||
      detail.phone === "" ||
      detail.address === ""
    ) {
      alert("Ener all fields");
      event.preventDefault();
      return;
    }
    setDisc(true);
    setTrigger(false);
    db.collection("users")
      .doc(detail.email)
      .set({
        name: detail.name,
        email: detail.email,
        phone: detail.phone,
        address: detail.address,
      })
      .then(() => {
        // console.log("Document successfully written!");
      })
      .catch((error) => {
        // console.error(error);
        alert(error);
      });

    event.preventDefault();
  };
  const onfocus = (event) => {
    event.target.setAttribute("autocomplete", "off");
  };
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="text-align">
          <h2>Fill the form and get 40% Discount</h2>
        </div>
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={detail.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            onFocus={onfocus}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={detail.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            onFocus={onfocus}
          />
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={detail.phone}
            onChange={handleChange}
            autoComplete="new-password"
            onFocus={onfocus}
          />
          <label>Address:</label>
          <input
            name="address"
            type="text"
            placeholder="Enter Your Address"
            onChange={handleChange}
            value={detail.address}
            onFocus={onfocus}
          />
          <div className="text-align">
            <button className="btn" onClick={submit}>
              Submit Now
            </button>
          </div>
        </form>

        <button
          className="close-btn"
          onClick={() => {
            setTrigger(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
