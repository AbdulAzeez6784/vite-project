import React, { useState, useContext, useRef } from "react";
import PersonContext from "./PersonContext";

function FullName() {
  const sample = useContext(PersonContext);
  const fNameRef = useRef();
  const mNameRef = useRef();
  const lNameRef = useRef();
  // console.log("FullName");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  // When we want to submit form details on submit button we'll use ref.
  //This will prevent re-rendering on entering every single letter.
  return (
    <div>
      <details className="details">
        <summary className="summary">
          <div>
            <label>Name</label>
            <button
              type="button"
              onClick={() =>
                sample.contextDispatch({
                  type: "FullName",
                  payload: {
                    firstName: fNameRef.current.value,
                    middleName: mNameRef.current.value,
                    lastName: lNameRef.current.value,
                  },
                })
              }
            >
              Save
            </button>
          </div>
        </summary>
        {console.log(sample.contextState.fullName)}

        <label>First Name</label>
        <input type={"text"} ref={fNameRef} required></input>
        <label>Middle Name</label>
        <input type={"text"} ref={mNameRef}></input>
        <label>Last Name</label>
        <input type={"text"} ref={lNameRef} required></input>
      </details>
    </div>
  );

  //When we want our component to re-render on every single letter we eneter
  //and update the state on every single letter we enter we'll use below way
  // return (
  //   <div>
  //     {console.log(sample.contextState.fullName)}
  //     <div>Name</div>
  //     <label>First Name</label>
  //     <input type={"text"} value={firstName} onChange={e=>setFirstName(e.target.value)} required></input>
  //     <label>Middle Name</label>
  //     <input type={"text"} value={middleName} onChange={e=>setMiddleName(e.target.value)}  ></input>
  //     <label>Last Name</label>
  //     <input type={"text"} value={lastName} onChange={e=>setLastName(e.target.value)} required></input>
  //     <button type="button" onClick={()=>sample.contextDispatch({type:"FullName",payload:{firstName,middleName,lastName}})}>Save</button>
  //   </div>
  // );
}

export default FullName;
