class AddressBook {
    constructor() {
        this.contacts = [];
        this.intialComplete = true;
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    getContact(index) {
        return this.contacts[index];
    }
    deleteContact(index) {
        this.contacts.splice(index, 1);
    }
    getIntialContacts(cb) {
        this.self = this;

        setTimeout(function(){
            this.intialComplete = true;
            if (cb) {
                return cb();
            }
        }, 3);

    }
}
