import React, { useState } from "react";
import { Contact } from "../../models/contact";

const data: Contact[] = [
  {
    id: "1763",
    name: "Anna Andersson",
    phoneNumbers: ["031-12345678", "0733-1234123"],
  },
  {
    id: "7830",
    name: "Bo Bengtsson",
    phoneNumbers: ["031-33333333"],
  },
  {
    id: "8042",
    name: "Cecilia Circus",
    phoneNumbers: ["031-55555555", "0733-5555555"],
  },
];

function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>(data);

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} data-testid={"contact-" + contact.id}>
          <h3>{contact.name}</h3>

          {contact.phoneNumbers.map((phoneNumber) => (
            <div key={phoneNumber}>{phoneNumber}</div>
          ))}

          <div className="star">
            <div>⭐</div>
            <div>🖊️</div>
          </div>
        </li>
      ))}

      {/* <li data-testid="contact1">
        <h3> Anna Andersson </h3>
        <div>031-12345678</div>
        <div>0733-1234123</div>
        <div className="star">
          <div>⭐</div>
          <div>🖊️</div>
        </div>
      </li>
      <li data-testid="contact2">
        <h3> Bo Bengtsson </h3>
        <div>031-33333333</div>
        <div>0733-4444444</div>
      </li>
      <li data-testid="contact3">
        <h3> Cecilia Circus </h3>
        <div>031-55555555</div>
        <div>0733-5555555</div>
      </li> */}
    </ul>
  );
}

export default ContactList;
