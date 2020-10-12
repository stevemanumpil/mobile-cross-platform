import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private contactsService: ContactsService
  ) { }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: "Saving...",
      duration: 2000
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss()
    console.log('Loading dismissed!')
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'New Contact Added',
      duration: 2000
    });

    await toast.present();
  }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel')
  }

  onSubmit(form: NgForm){

    if(!form.valid){
      return;
    }

    this.contactsService.addContact({
      id: 'c'+(this.contactsService.getAllContacts().length + 1),
      name: form.value.name,
      email: [form.value.email],
      phone: ['0'+form.value.telephone],  
      image: 'https://circlegeo.com/_nuxt/img/c5b6502.jpeg'
    })
  }

  onSaving(){
    this.presentLoading().then(() => {
      this.onCancel();
      this.presentToast();
    })
  }
}
