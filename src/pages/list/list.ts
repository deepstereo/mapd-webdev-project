import { CourseSubject } from './../../models/subject/subject.model';
import { Observable } from 'rxjs/observable';
import { SubjectListService } from './../../services/subject-list/subject-list.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {



  subjectList$: Observable<CourseSubject[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private subjects: SubjectListService) {
    // If we navigated to this page, we will have an item available as a nav param

    this.subjectList$ = this.subjects
    .getSubjectList()
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
