const { v4 } = require("uuid");
const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const addContact = async (data) => {
    const contacts = await getAllContacts();
    const newContact = { ...data, id: v4() };
    //contacts.push(newContact);
    const newContacts = [...contacts, newContact];
    //await updateContacts(contacts);
    await updateContacts(newContacts);
    console.log(`newContact`, newContact);
    return newContact;
};

module.exports = addContact;


