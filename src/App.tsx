import React from "react";
import "./App.css";
import ContactList from "./components/contactList/ContactList";

function App() {
  return (
    <main>
      <div className="contact-list">
        <ContactList />
      </div>
    </main>
  );
}

export default App;
