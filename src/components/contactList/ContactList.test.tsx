import { render } from "@testing-library/react";
import ContactList from "./ContactList";

describe("ContactList component", () => {
  it("renders properly", () => {
    render(<ContactList />);
  });
});
// (1) renders a specific contact name
// (1) renders the correct phone numbers for a specific contact
// (1) renders the correct amount of contact elements

// 1. as a user I want to see all my contacts so that I can contact them easily
// 2. as a user I want to update a contact with new information so that the information is accurate
