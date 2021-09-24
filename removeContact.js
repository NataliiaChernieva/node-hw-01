const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (id) => {
    const contacts = await getAllContacts();
    // const idx = contacts.findIndex(contact => contact.id === id);
    // if (idx === -1) {
    //     return null;
    // }
    const newContacts = contacts.filter(contact => contact.id !== Number(id));
    await updateContacts(newContacts);
    // return "Success remove";
    return newContacts;
};

module.exports = removeContact;