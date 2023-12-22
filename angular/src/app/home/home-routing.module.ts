import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'EditDialog', component: EditDialogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
