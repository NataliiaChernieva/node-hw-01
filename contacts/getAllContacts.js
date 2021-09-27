const fs = require("fs/promises");
const path = require("path");
console.log(__dirname);
const contactsPath = path.join("db/contacts.json");
const getAllContacts  = async () => {
    try {
        const contacts = await fs.readFile(contactsPath, "utf-8");
        const parseContacts = JSON.parse(contacts);
        return parseContacts;
    } catch (error) {
       console.log(error.message) 
    }
}

module.exports = getAllContacts;

