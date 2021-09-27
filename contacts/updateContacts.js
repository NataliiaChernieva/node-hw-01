const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join("db/contacts.json");

const updateContacts = async (newContacts) => {
    return await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    
};

module.exports = updateContacts;