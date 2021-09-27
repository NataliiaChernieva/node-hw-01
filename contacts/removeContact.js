const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (id) => {
    const contacts = await getAllContacts();
    const newContacts = contacts.filter(contact => contact.id !== Number(id));
    await updateContacts(newContacts);
    return newContacts;
};

module.exports = removeContact;