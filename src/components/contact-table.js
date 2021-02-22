import React, { useContext } from "react";
import { Table } from "semantic-ui-react";
import { ContactContext } from "../store/contact-context";

const ContactTable = () => {
  const [state, dispatch] = useContext(ContactContext);
  const rows =
    state.contacts != null
      ? state.contacts.map((contact) => (
          <Table.Row
            onClick={() => dispatch({ type: "SELECTED", payload: contact.id })}
            key={contact.id}
          >
            <Table.Cell>{contact.id}</Table.Cell>
            <Table.Cell>{contact.name}</Table.Cell>
            <Table.Cell>{contact.phone}</Table.Cell>
            <Table.Cell>{contact.address}</Table.Cell>
          </Table.Row>
        ))
      : null;
  return (
    <Table  celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table>
  );
};
export default ContactTable;
