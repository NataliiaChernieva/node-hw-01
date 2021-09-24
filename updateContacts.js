const fs = require("fs/promises");
const path = require("path");

//console.log(`dirname`, __dirname);
const contactsPath = path.join(__dirname, "db/contacts.json");
// const contactsPath = path.join("./db", "contacts.json");

const updateContacts = async (newContacts) => {
    return await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    
};

module.exports = updateContacts;