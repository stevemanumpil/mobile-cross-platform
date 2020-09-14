import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact.model';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {
  loadedContact: Contact;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }
  
  
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Kontak Dihapus',
      duration: 3000
    });
    toast.present();
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Hapus Kontak',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => {
            this.deleteContact();
            this.presentToast();
          }
        }
      ]
    })

    await alert.present();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('contactId')){ return; }
      const contactId = paramMap.get('contactId');
      this.loadedContact = this.contactsService.getContact(contactId);
    })
  }

  deleteContact(){
    this.contactsService.deleteContact(this.loadedContact.id);
    this.router.navigate(['/contacts']);
  }
}
