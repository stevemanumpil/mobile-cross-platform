import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
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

  onSaving(){
    this.presentLoading().then(() => {
      this.onCancel();
      this.presentToast();
    })
  }
}
