import ContactCard from "./ContactCard";
import { render, screen } from "@testing-library/react";
import { Contact } from "../../models/contact";
import userEvent from "@testing-library/user-event";

describe("ContactCard component", () => {
    let testContact: Contact;
    let mockChangeContact: jest.Mock;
    let jsxCard: any;

    beforeEach(() => {
        testContact = createContact();
        mockChangeContact = jest.fn() as jest.Mock;
        jsxCard = (
            <ContactCard
                contact={testContact}
                changeContact={mockChangeContact}
            />
        );
    });

    it("renders without crashing", () => {
        render(jsxCard);
    });

    it("renders a pen button (for editing a contact", () => {
        render(jsxCard);

        const penButton = screen.getByRole("button");
        expect(penButton).toBeInTheDocument();
    });

    it("shows no input fields initially", () => {
        render(jsxCard);

        const inputFields = screen.queryAllByRole("textbox");
        expect(inputFields.length).toBe(0);
    });

    it("shows input fields after click on pen", () => {
        render(jsxCard);

        const penButton = screen.getByRole("button");
        userEvent.click(penButton);

        const inputFields = screen.queryAllByRole("textbox");
        expect(inputFields.length).toBeGreaterThan(0);
    });

    // In actuality we test that changeContact is called with the correct new name
    it("shows the updated value after editing", () => {
        render(jsxCard);
        const newName = "Anna Karlsson";

        const penButton = screen.getByRole("button");
        userEvent.click(penButton);

        const nameInput = screen.getByDisplayValue(testContact.name);
        userEvent.type(nameInput, "{selectall}{backSpace}" + newName);

        userEvent.click(penButton);

        expect(mockChangeContact.mock.calls.length).toBe(1);

        const firstCall = mockChangeContact.mock.calls[0];
        const newContact = firstCall[0];
        expect(newContact.name).toBe(newName);
    });
});

function createContact(): Contact {
    return {
        id: "1",
        name: "Anna Andersson",
        phoneNumbers: ["031-12345678", "0733-1234123"],
    };
}
