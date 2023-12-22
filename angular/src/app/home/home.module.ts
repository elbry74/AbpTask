import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, FormsModule ,
    MatDialogModule,
    ReactiveFormsModule
  ],
})
export class HomeModule {}
