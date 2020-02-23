import { Injectable } from '@angular/core';
import {Question } from "../../models/question.model"
@Injectable({
    providedIn: 'root'
  })
export class SharedStateService {
    private questions: Question[] = [];

    setQuestions(questions: Question[]){
        questions.forEach(q => {
            this.questions.push(q);
        });
    }

    getQuestions(): Question[]{
        return JSON.parse(JSON.stringify(this.questions));
    }

    getQuestionDetail(questionId: string): Question{
        return this.questions.find(el => el.id === questionId);
    }
}