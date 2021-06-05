import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      "id" : "1",
      "name" : "shailesh",
      "email" : "shailesh.spbs@gmail.com"
    },
    {
      "id" : "2",
      "name" : "rahul",
      "email" : "rahul@gmail.com"
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
