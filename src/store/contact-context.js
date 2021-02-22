import { createContext, useReducer } from "react";

const ContactContext = createContext();
const initState = {
  contacts: [
    {
      id: 1,
      name: "test1",
      phone: "123-456-7890",
      address: "12345 abc CA 90000",
    },
    {
      id: 2,
      name: "test2",
      phone: "123-456-7890",
      address: "12345 abc CA 90000",
    },
    {
      id: 3,
      name: "test3",
      phone: "123-456-7890",
      address: "12345 abc CA 90000",
    },
    {
      id: 4,
      name: "test4",
      phone: "123-456-7890",
      address: "12345 abc CA 90000",
    },
  ],
  loading: false,
  selected: 1,
};

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          loading: true,
        };
      case "SELECTED":
        return {
          ...state,
          selected: action.payload,
        };
      default:
        return state;
    }
  }, initState);
  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {children}
    </ContactContext.Provider>
  );
};
export { ContactContext, ContactContextProvider };
