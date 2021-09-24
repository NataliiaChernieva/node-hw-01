const contacts = require("./db/contacts.json");
// console.log(`contacts`, contacts);

const getAllContacts = async () => contacts;
 
module.exports = getAllContacts;

