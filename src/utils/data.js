let contacts = [
  {
    id: 1,
    name: 'Asnabah',
    tag: 'nabati._',
    imageUrl: '/images/imaR.jpg',
  },
  {
    id: 2,
    name: 'Arif Faizin',
    tag: 'arifaizin',
    imageUrl: '/images/arifaizin.jpeg',
  },
  {
    id: 3,
    name: 'Rahmat Fajri',
    tag: 'rfajri27',
    imageUrl: '/images/rfajri27.jpeg',
  },
  {
    id: 4,
    name: 'Dimas Saputra',
    tag: 'dimasmds',
    imageUrl: '/images/dimasmds.jpeg',
  },
];

function getContacts() {
  return contacts;
}

function addContact(contact) {
  contacts = [...contacts, { id: +new Date(), imageUrl: '/images/default.jpg', ...contact }];
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };
