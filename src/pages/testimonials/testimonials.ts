import { FeedbackItem } from './../../models/feedback/feedback-item.model';
import { Observable } from 'rxjs/observable';
import { FeedbackListService } from './../../services/feedback-list/feedback-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-testimonials',
  templateUrl: 'testimonials.html',
})
export class TestimonialsPage {

  feedbackList$: Observable<FeedbackItem[]>;
  reverseFeedbackList: [FeedbackItem];

  constructor(public navCtrl: NavController, public navParams: NavParams, private feedback: FeedbackListService) {

    this.feedbackList$ = this.feedback
    .getFeedbackList()
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
    console.log('ionViewDidLoad TestimonialsPage');
  }

  
}
