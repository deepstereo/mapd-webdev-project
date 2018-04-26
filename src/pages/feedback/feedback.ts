import { FeedbackListService } from './../../services/feedback-list/feedback-list.service';
import { FeedbackItem } from './../../models/feedback/feedback-item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  nav: Nav;

  feedbackItem: FeedbackItem = {
    name: "",
    year: "",
    feedback: ""
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private feedback: FeedbackListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  itemSelected(item: any) {

  }

  addFeedbackItem(feedbackItem: FeedbackItem) {
    this.feedback.addFeedbackItem(feedbackItem).then(ref => {
      // this.navCtrl.setRoot('HomePage', {key: ref.key});
      console.log(ref.key);
    })
    
  }


}
