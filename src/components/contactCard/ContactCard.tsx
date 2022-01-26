import React from "react";
import { Contact } from "../../models/contact";

interface Props {
    contact: Contact;
}

function ContactCard({ contact }: Props) {
    return (
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
    );
}

export default ContactCard;
