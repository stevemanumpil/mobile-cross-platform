import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: 'c1',
      name: 'John Thor',
      email: ['john.thor@umn.ac.id', 'hello@johnthor.com'],
      phone: ['081122334455','081234567890'],
      image: 'https://i.guim.co.uk/img/media/085934c2ea65f4d2fa30622a78d0044a6ad54fee/1644_307_2169_1301/master/2169.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42622fb9b51229d4d939df802dfa691b'
    },
    {
      id: 'c2',
      name: "John Wick",
      email: ["john.wick@umn.ac.id","john.wick@gmail.com"],
      phone: ["087812312300","081512131415"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj7ZwR22RRhX21Cy4kkq_6ioB-KIzWRC-ZgQ&usqp=CAU"
    }
  ]

  constructor() { }

  getAllContacts(){
    return [...this.contacts];
  }

  getContact(contactId: string){
    return {...this.contacts.find(contact => {
      return contact.id === contactId;
    })}
  }

  deleteContact(contactId: string){
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== contactId;
    })
  }

  addContact(contact: Contact){
    this.contacts.push(contact)
  }

  editContact(contact: Contact){
    const index = this.contacts.findIndex( item => {
      return item.id === contact.id
    })
    this.contacts[index].id = contact.id;
    this.contacts[index].name = contact.name;
    this.contacts[index].email = contact.email;
    this.contacts[index].phone = contact.phone;
    this.contacts[index].image = contact.image;
  }
}
