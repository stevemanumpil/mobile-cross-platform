import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Contact } from '../../contact.model';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {
  @Input() contact: Contact
  form: FormGroup
  constructor(
    private modalCtrl: ModalController,
    private contactService: ContactsService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }
  
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Contact Updated',
      duration: 2000
    });

    await toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: "Editing...",
      duration: 2000
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss()
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(this.contact.id, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      name: new FormControl(this.contact.name, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(this.contact.email, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      phone: new FormControl(this.contact.phone, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      image: new FormControl(this.contact.image, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onSubmit(){
    this.contactService.editContact({
      id : this.form.value.id,
      name: this.form.value.name,
      email: [this.form.value.email],
      phone: [this.form.value.phone],
      image: this.form.value.image
    })

    this.presentLoading().then(() => {
      this.onCancel()
      this.presentToast()
    })
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel')
  }
}
