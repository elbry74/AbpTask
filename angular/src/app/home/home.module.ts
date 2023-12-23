import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCustomerDialogComponent } from './addCustomer-dialog/addCustomer-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [HomeComponent, AddCustomerDialogComponent, EditDialogComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    MatDialogModule
    
  ],
})
export class HomeModule {}
