import React, { useState } from "react";
import { Contact } from "../../models/contact";
import ContactCard from "../contactCard/ContactCard";

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
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}

export default ContactList;
