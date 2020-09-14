import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from "./contact.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: Contact[];

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getAllContacts();
  }
  
  ionViewWillEnter(){
    this.contacts =  this.contactsService.getAllContacts()
  }
}
