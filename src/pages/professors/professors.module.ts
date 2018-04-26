import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorsPage } from './professors';

@NgModule({
  declarations: [
    ProfessorsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorsPage),
  ],
})
export class ProfessorsPageModule {}
