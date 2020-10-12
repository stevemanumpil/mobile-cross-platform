import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { ModalComponent } from './components/modal/modal.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ContactsPage, ModalComponent, ModalEditComponent]
})
export class ContactsPageModule {}
