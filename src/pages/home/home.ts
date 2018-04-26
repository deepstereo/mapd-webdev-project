import { SubjectListService } from './../../services/subject-list/subject-list.service';
import { Observable } from 'rxjs/observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Welcome } from './../../models/welcome.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  welcomeList$: Observable<Welcome[]>;

  constructor(public navCtrl: NavController, private welcome: SubjectListService) {

    this.welcomeList$ = this.welcome
    .getWelcomeList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }))
      }
    )
  
  }

}
