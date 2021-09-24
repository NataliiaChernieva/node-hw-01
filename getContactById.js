const getAllContacts = require("./getAllContacts");

const getContactById = async (id) => {
    const contacts = await getAllContacts();
    const contact = contacts.find(contact => contact.id === id);
    if (!contact) {
        return null;
    }

    return contact;
}

module.exports = getContactById;