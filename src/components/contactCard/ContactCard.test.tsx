import ContactCard from "./ContactCard";
import { render, screen } from "@testing-library/react";
import { Contact } from "../../models/contact";

describe("ContactCard component", () => {
    let testContact: Contact;
    beforeEach(() => {
        testContact = createContact();
    });

    it("renders without crashing", () => {
        render(<ContactCard contact={testContact} />);
    });

    it("renders a pen button (for editing a contact", () => {
        render(<ContactCard contact={testContact} />);

        const penButton = screen.getByRole("button");
        expect(penButton).toBeInTheDocument();
    });

    it("shows no input fields initially", () => {
        render(<ContactCard contact={testContact} />);

        const inputFields = screen.queryAllByRole("textbox");
        expect(inputFields.length).toBe(0);
    // shows input fields after click on pen
});

function createContact(): Contact {
    return {
        id: "1",
        name: "Anna Andersson",
        phoneNumbers: ["031-12345678", "0733-1234123"],
    };
}
