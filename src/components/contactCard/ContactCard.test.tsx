import ContactCard from "./ContactCard";
import { render } from "@testing-library/react";
import { Contact } from "../../models/contact";

describe("ContactCard component", () => {
    it("renders without crashing", () => {
        const contact: Contact = {
            id: "1",
            name: "Anna Andersson",
            phoneNumbers: ["031-12345678", "0733-1234123"],
        };
        render(<ContactCard contact={contact} />);
    });
});
