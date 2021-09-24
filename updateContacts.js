const fs = require("fs").promises;
const path = require("path");

//console.log(`dirname`, __dirname);
const contactsPath = path.join(__dirname, "db/contacts.json");

const updateContacts = async (newContacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

module.export = updateContacts;