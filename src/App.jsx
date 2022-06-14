import "./App.css";
import React, { useReducer } from "react";
import FullName from "./components/FullName";
import Mobile from "./components/Mobile";
import Email from "./components/Email";
import Address from "./components/Address";
import { PersonProvider } from "./components/PersonContext";

const Person = {
  fullName: {
    firstName: "",
    middleName: "",
    lastName: "",
  },
  mobile: {
    primary: "",
    secondary: "",
  },
  email: {
    primary: "",
    secondary: "",
  },
  address: {
    Dr_No: "",
    street: "",
    city: "",
    district: "",
    pincode: "",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FullName":
      return {
        ...state,
        fullName: {
          ...state.fullName,
          firstName: action.payload.firstName,
          middleName: action.payload.middleName,
          lastName: action.payload.lastName,
        },
      };
    case "Mobile":
      return {
        ...state,
        mobile: {
          ...state.mobile,
          primary: action.payload.primary,
          secondary: action.payload.secondary,
        },
      };
    case "Email":
      return {
        ...state,
        email: {
          ...state.email,
          primary: action.payload.primary,
          secondary: action.payload.secondary,
        },
      };
    case "Address":
      return {
        ...state,
        address: {
          ...state.address,
          Dr_No: action.payload.Dr_No,
          street: action.payload.street,
          city: action.payload.city,
          district: action.payload.district,
          pincode: action.payload.pincode,
        },
      };
    default:
      return state;
  }
};

function App() {
  const [newState, dispatch] = useReducer(reducer, Person);

  console.log(newState);

  return (
    <div className="App">
      <PersonProvider
        value={{ contextState: newState, contextDispatch: dispatch }}
      >
        <FullName />
        <Mobile />
        <Email />
        <Address />
      </PersonProvider>
    </div>
  );
}

export default App;
