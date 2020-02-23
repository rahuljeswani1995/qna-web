import { Component, OnInit, Input } from '@angular/core';
import { SharedStateService } from '../services/shared-state.service';
import { Question } from 'src/models/question.model';

@Component({
    selector: 'question-detail',
    templateUrl: './question-detail.component.html',
    styleUrls: ['./question-detail.component.css']
  })
  export class QuestionDetailComponent implements OnInit {
    @Input() questionId: string;
    question: Question;
    constructor(private sharedSvc: SharedStateService){

    }  
    
    ngOnInit(){
        this.question = this.sharedSvc.getQuestionDetail(this.questionId);
      }
  }