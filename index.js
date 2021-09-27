const contactsOperations = require("./contacts/contacts");

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
          const contacts = await contactsOperations.getAllContacts();
          console.table(contacts);
          return contacts;
      case 'get':
          const contactById = await contactsOperations.getContactById(id);
          console.log(`contactById`, contactById);
          return contactById;
    case 'add':
        return contactsOperations.addContact({name, email, phone});
    case 'remove':
          return console.table(await contactsOperations.removeContact(id));
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
