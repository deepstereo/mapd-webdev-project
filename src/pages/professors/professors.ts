import { Professor } from './../../models/professor/professor.model';
import { Observable } from 'rxjs/observable';
import { SubjectListService } from './../../services/subject-list/subject-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-professors',
  templateUrl: 'professors.html',
})
export class ProfessorsPage {

  professorsList$: Observable<Professor[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private professors: SubjectListService) {

    this.professorsList$ = this.professors
    .getProfessorsList()
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorsPage');
  }

}
