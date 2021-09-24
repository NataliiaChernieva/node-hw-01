const getAllContacts = require("./getAllContacts");

const getContactById = async (id) => {
    try {
        const contacts = await getAllContacts();
        const contactById = contacts.find(contact => contact.id === id);
        console.log(`contactById`, contactById);
        if (!contactById) {
            return null;
        }
        return contactById;
    } catch (error) {
        throw error;
    }
}

module.exports = getContactById;