import { FeedbackItem } from './../../models/feedback/feedback-item.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class FeedbackListService {

    private feedbackListRef = this.db.list<FeedbackItem>('feedback-list');

    constructor(private db: AngularFireDatabase ){

    }

    getFeedbackList() {
        return this.feedbackListRef;
    }

    addFeedbackItem(feedbackItem: FeedbackItem) {
        return this.feedbackListRef.push(feedbackItem)
    }

}