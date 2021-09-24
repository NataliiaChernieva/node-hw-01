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
       return await contactsOperations.getContactById();
    case 'add':
        return contactsOperations.addContact({name, email, phone});
    case 'remove':
        return contactsOperations.removeContact(id);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
// invokeAction('get', 1).then((data)=>console.log(data))

// https://prnt.sc/1ths6gl