const { v4 } = require("uuid");
const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const addContact = async (data) => {
    const contacts = await getAllContacts();
    const newContact = { ...data, id: v4() };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
};

module.exports = addContact;

