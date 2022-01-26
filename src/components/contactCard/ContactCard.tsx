import React, { useState } from "react";
import { Contact } from "../../models/contact";

interface Props {
    contact: Contact;
    changeContact: (contact: Contact) => void;
}

function ContactCard({ contact, changeContact }: Props) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>(contact.name);

    const clickHandler = () => {
        if (isEditing) {
            changeContact({ ...contact, name });
        }
        setIsEditing(!isEditing);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return (
        <li key={contact.id} data-testid={"contact-" + contact.id}>
            {isEditing ? (
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                ></input>
            ) : (
                <h3>{contact.name}</h3>
            )}

            {contact.phoneNumbers.map((phoneNumber) => (
                <div key={phoneNumber}>{phoneNumber}</div>
            ))}

            <div className="star">
                {/* <div>⭐</div> */}
                <div role="button" onClick={clickHandler}>
                    🖊️
                </div>
            </div>
        </li>
    );
}

export default ContactCard;
