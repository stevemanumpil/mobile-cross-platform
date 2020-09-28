import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalSample1Component } from '../../components/modal-sample1/modal-sample1.component';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedRecipe: Recipe
  constructor(
    private modalCtrl: ModalController,
    private activatedRouter: ActivatedRoute,
    private toastCtrl: ToastController,
    private router: Router,
    private recipesService: RecipesService,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController
  ) { }
  
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Resep Dihapus',
      duration: 3000
    });
    toast.present();
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: ModalSample1Component,
      componentProps: { selectedRecipe: this.loadedRecipe }
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role)
    });

    return await modal.present();
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Deleting recipe...',
      duration: 2000
    });

    await loading.present()

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentAction(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Recipe Action',
      buttons: [{
        text: 'Edit',
        role: 'edit',
        icon: 'create-outline',
        handler: () => {
          console.log('Edit clicked')
        }
      }, 
      {
        text: 'New',
        icon: 'add',
        handler: () => {
          console.log('New Clicked');
        }
      },
      {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share Clicked');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel Clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){ return; }
      const recipeId = paramMap.get('recipeId')
      this.loadedRecipe = this.recipesService.getRecipe(recipeId)
    })
  }

  deleteRecipe(){
    this.presentLoading().then(() => {
      this.recipesService.deleteRecipe(this.loadedRecipe.id)
      this.router.navigate(['/recipes']);
      this.presentToast();
    })
  }
}
