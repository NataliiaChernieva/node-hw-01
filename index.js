const contactsOperations = require("./contacts");

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
        //   return await contactsOperations.getContactById(id);
          const contactById = await contactsOperations.getContactById(id);
          console.log(`contactById`, contactById);
          return contactById;
    case 'add':
        return contactsOperations.addContact({name, email, phone});
    case 'remove':
          return console.log(await contactsOperations.removeContact(id));
        //   console.log(`removedContact`, removedContact)
        //   return removedContact;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
// invokeAction('get', 1).then((data)=>console.log(data))

// https://prnt.sc/1ths6gl