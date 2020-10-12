import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from "./contact.model";
import { IonItemSliding, ModalController } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: Contact[];

  constructor(
    private contactsService: ContactsService,
    private modalCtrl: ModalController
  ) {}

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });

    modal.onDidDismiss().then(() => this.contacts = this.contactsService.getAllContacts())

    return await modal.present();
  }

  ngOnInit() {
    this.contacts = this.contactsService.getAllContacts();
  }

  ionViewWillEnter(){
    this.contacts = this.contactsService.getAllContacts();
  }

  async editContact(contact: Contact, slidingItem: IonItemSliding){
    const modal = await this.modalCtrl.create({
      component: ModalEditComponent,
      componentProps: {
        contact: contact
      }
    })

    modal.onDidDismiss().then(() => this.contacts = this.contactsService.getAllContacts())

    slidingItem.close()
    return await modal.present()
  }

  priority(contact: Contact, slidingItem: IonItemSliding){
    slidingItem.close()
    console.log(contact.name,"is set as priority contact")
  }

  onFilterUpdate(event: CustomEvent){
    console.log(event.detail)
  }
}
