import React, { useState, useContext, useRef } from "react";
import PersonContext from "./PersonContext";

function Address() {
  const sample = useContext(PersonContext);
  const [DN, setDrNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");

  const Dr_NoRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const districtRef = useRef();
  const pincodeRef = useRef();

  // When we want to submit form details on submit button we'll use ref.
  //This will prevent re-rendering on entering every single letter.
  return (
    <div>
      <details>
        <summary>
          <div>
            <label>Address</label>
            <button
              type="button"
              onClick={() =>
                sample.contextDispatch({
                  type: "Address",
                  payload: {
                    Dr_No: Dr_NoRef.current.value,
                    street: streetRef.current.value,
                    city: cityRef.current.value,
                    district: districtRef.current.value,
                    pincode: pincodeRef.current.value,
                  },
                })
              }
            >
              Save
            </button>
          </div>
        </summary>

        <label>DR-NO</label>
        <input type={"text"} ref={Dr_NoRef} required></input>
        <label>Street</label>
        <input type={"text"} ref={streetRef} required></input>
        <label>City</label>
        <input type={"text"} ref={cityRef} required></input>
        <label>District</label>
        <input type={"text"} ref={districtRef} required></input>
        <label>Pincode</label>
        <input type={"number"} ref={pincodeRef} required></input>
      </details>
    </div>
  );

  //When we want our component to re-render on every single letter we eneter
  //and update the state on every single letter we enter we'll use below way

  // return (
  //   <div>
  //     <div>Address</div>

  //     <label>DR-NO</label>
  //     <input type={"text"} value={DN} onChange={e=>setDrNo(e.target.value)} required></input>
  //     <label>Street</label>
  //     <input type={"text"} value={street} onChange={e=>setStreet(e.target.value)} required></input>
  //     <label>City</label>
  //     <input type={"text"} value={city} onChange={e=>setCity(e.target.value)} required></input>
  //     <label>District</label>
  //     <input type={"text"} value={district} onChange={e=>setDistrict(e.target.value)} required></input>
  //     <label>Pincode</label>
  //     <input type={"number"} value={pincode} onChange={e=>setPincode(e.target.value)} required></input>
  //     <button type="button" onClick={ ()=>sample.contextDispatch({type:"Address", payload:{Dr_No:DN,street,city,district,pincode}})}>Save</button>
  //   </div>
  // );
}

export default Address;
