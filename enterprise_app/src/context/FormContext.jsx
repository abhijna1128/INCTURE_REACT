import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  personal: {},
  job: {},
  bank: {},
  emergency: [],
  documents: [],
};

export const FormContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_PERSONAL":
      return { ...state, personal: action.payload };
    case "UPDATE_JOB":
      return { ...state, job: action.payload };
    case "UPDATE_BANK":
      return { ...state, bank: action.payload };
    case "UPDATE_EMERGENCY":
      return { ...state, emergency: action.payload };
    case "UPDATE_DOCUMENTS":
      return { ...state, documents: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const stored = localStorage.getItem("formData");
      return stored ? JSON.parse(stored) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(state));
  }, [state]);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
