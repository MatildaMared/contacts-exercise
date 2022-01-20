import { render, screen, within } from "@testing-library/react";
import ContactList from "./ContactList";

describe("ContactList component", () => {
  it("renders properly", () => {
    render(<ContactList />);
  });

  it("renders a specific contact name", () => {
    render(<ContactList />);

    const contact = screen.getByText(/Cecilia Circus/);

    expect(contact).toBeInTheDocument();
  });

  it("renders the correct phone numbers for a specific contact", () => {
    render(<ContactList />);
    const contactName = "Bo Bengtsson";
    const contactPhone = "031-33333333";

    const contact = screen.getByTestId("contact-7830");
    const nameElement = within(contact).getByText(contactPhone);
    expect(nameElement).toBeInTheDocument();

    const phoneElement = within(contact).getByText(contactName);
    expect(phoneElement).toBeInTheDocument();
  });

  it("renders the correct amount of contacts elements", () => {
    render(<ContactList />);

    const items = screen.getAllByRole("listitem");

    expect(items.length).toBe(3);
  });
});

// Test cases:
// (1) renders a specific contact name
// (1) renders the correct phone numbers for a specific contact
// (1) renders the correct amount of contact elements

// 1. as a user I want to see all my contacts so that I can contact them easily
// 2. as a user I want to update a contact with new information so that the information is accurate
