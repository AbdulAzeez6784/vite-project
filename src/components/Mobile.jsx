import React, { useState, useContext, useRef } from "react";
import PersonContext from "./PersonContext";

function Mobile() {
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
            <label>Mobile</label>
            <button
              type="button"
              onClick={() =>
                sample.contextDispatch({
                  type: "Mobile",
                  payload: {
                    primary: primaryRef.current.value,
                    secondary: secondaryRef.current.value,
                  },
                })
              }
            >
              {" "}
              Save{" "}
            </button>
          </div>
        </summary>

        <label>Primary</label>
        <input type={"number"} ref={primaryRef} required></input>
        <label>Secondary</label>
        <input type={"number"} ref={secondaryRef} required></input>
      </details>
    </div>
  );
  //When we want our component to re-render on every single letter we eneter
  //and update the state on every single letter we enter we'll use below way
  // return (
  //   <div>
  //     <div>Mobile</div>
  //     <label>Primary</label>
  //     <input
  //       type={"number"}
  //       value={primary}
  //       onChange={(e) => setPrimary(e.target.value)}
  //       required
  //     ></input>
  //     <label>Secondary</label>
  //     <input
  //       type={"number"}
  //       value={secondary}
  //       onChange={(e) => setSecondary(e.target.value)}
  //       required
  //     ></input>
  //     <button
  //       type="button"
  //       onClick={() =>
  //         sample.contextDispatch({
  //           type: "Mobile",
  //           payload: { primary: primary, secondary: secondary },
  //         })
  //       }
  //     >
  //       {" "}
  //       Save{" "}
  //     </button>
  //   </div>
  // );
}

export default Mobile;
