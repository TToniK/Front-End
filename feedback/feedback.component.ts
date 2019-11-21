import {Component, OnInit} from '@angular/core';
import {FeedbackItem} from '../Classes/feedback-item';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackItemArray: Array<FeedbackItem> = [];

  constructor() {
    this.feedbackItemArray =
      [new FeedbackItem('Ruoka'),
        new FeedbackItem('Juoma'),
        new FeedbackItem('Jälkiruoka')];
  }

  ngOnInit() {
  }

  onInputChange(feedbackEvent: any, fbItem: FeedbackItem) {
    fbItem.setAnswer(feedbackEvent.value);
  }

}
