import React, { useContext } from "react";
import { ContactContext } from "../store/contact-context";

const ContactView = () => {
  const [state] = useContext(ContactContext);
  return (
    <div>
      Hello{" "}
      {
        state.contacts.filter((contact) => contact.id === state.selected)[0]
          .name
      }
    </div>
  );
};
export default ContactView;
