import React, { useState, useContext, useRef } from "react";
import PersonContext from "./PersonContext";
function Email() {
  const sample = useContext(PersonContext);
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");

  const primaryRef = useRef();
  const secondaryRef = useRef();

  // When we want to submit form details on submit button we'll use ref.
  //This will prevent re-rendering on entering every single letter.
  return (
    <div>
      <details>
        <summary>
          <div>
            <label>Email</label>
            <button
              type="button"
              onClick={() =>
                sample.contextDispatch({
                  type: "Email",
                  payload: {
                    primary: primaryRef.current.value,
                    secondary: secondaryRef.current.value,
                  },
                })
              }
            >
              Save
            </button>
          </div>
        </summary>
        <label>Primary</label>
        <input type={"email"} ref={primaryRef} required></input>
        <label>Secondary</label>
        <input type={"email"} ref={secondaryRef} required></input>
      </details>
    </div>
  );

  //When we want our component to re-render on every single letter we eneter
  //and update the state on every single letter we enter we'll use below way

  // return (
  //   <div>
  //     <div>Email</div>
  //     <label>Primary</label>
  //     <input
  //       type={"email"}
  //       value={primary}
  //       onChange={(e) => setPrimary(e.target.value)}
  //       required
  //     ></input>
  //     <label>Secondary</label>
  //     <input
  //       type={"email"}
  //       value={secondary}
  //       onChange={(e) => setSecondary(e.target.value)}
  //       required
  //     ></input>
  //     <button
  //       type="button"
  //       onClick={() =>
  //         sample.contextDispatch({
  //           type: "Email",
  //           payload: { primary: primary, secondary: secondary },
  //         })
  //       }
  //     >
  //       Save
  //     </button>
  //   </div>
  // );
}

export default Email;
