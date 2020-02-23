import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../../models/question.model';
import { Answer } from 'src/models/answer.model';
import { UserProfileService } from '../services/user-profile.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    serverData: any;
    questionsModel: Question[];
    questionsToDisplay: Question[];
    sections: Set<string>;

    currentQuestion: Question;
    questionParaEl: any;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private userSvc: UserProfileService) { }

    ngOnInit() {
        this.questionParaEl = document.getElementById("question-para");

        this.route.data.subscribe(res => {
            this.serverData = res.serverData;
        });
        this.questionsModel = this.transformIntoModel(this.serverData);

        this.questionsToDisplay = this.questionsModel;

        this.sections = this.filterOutSections(this.questionsModel);

        this.currentQuestion = this.questionsToDisplay[0];

    }

    private transformIntoModel(rawData: any[]): Question[] {
        const questions: Question[] = [];

        rawData.forEach((rawQn: any, idx: number) => {
            let qn: Question = new Question();
            qn.serialNum = (idx+1).toString();
            qn.id = rawQn.id;
            qn.answer_id = rawQn.correct_answer_id;
            qn.category = rawQn.category;
            qn.text = rawQn.question_text;

            let ans_options: Answer[] = [];
            rawQn.answers.forEach((rawAns: any) => {
                let answer: Answer = new Answer();
                answer.id = rawAns.id;
                answer.text = rawAns.answer_text;
                answer.chosen_percentage = rawAns.chosen_percentage;
                ans_options.push(answer);
            });

            qn.options = ans_options;

            questions.push(qn);
        });
        return questions;
    }

    private filterOutSections(questions: Question[]) {
        return new Set(questions.map(x => x.category));
    }

    onSectionFilter(section: string) {
        if (section == "all")
            this.questionsToDisplay = this.questionsModel;
        else
            this.questionsToDisplay = this.questionsModel.filter(qn => qn.category == section);

        this.currentQuestion = this.questionsToDisplay[0];
    }

    onQuestionSelect(questionId: string) {
        this.currentQuestion = this.questionsToDisplay.find(q => q.id === questionId);
    }

    onAnswerSelect(ansId: string) {
        this.currentQuestion.userSelection = ansId;
    }

    onSubmit() {
        let numAttempted: number = this.questionsModel.filter(el => el.userSelection != null && el.userSelection != undefined).length;
        if (window.confirm(`You have attempted ${numAttempted} out of ${this.questionsModel.length} questions. Are you sure you want to submit?`)) {
            // submit
            // save score
            this.saveTestScore();
            this.router.navigateByUrl("/main");
            // route to home page
        }
    }

    private saveTestScore() {
        let totalQuestions: number = this.questionsModel.length;
        let numCorrect: number = this.questionsModel.filter(el => el.userSelection !== null && el.userSelection === el.answer_id).length;
        let percentScore: number = numCorrect / totalQuestions * 100;
        let email:string = this.userSvc.getUserEmail();
        let tests: any[] = JSON.parse(localStorage.getItem(email));
        let date: Date = new Date();
        tests.push({
            "date": `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            "totalQns": totalQuestions,
            "numCorrect": numCorrect,
            "percent": percentScore.toFixed(2)
        });

        localStorage.setItem(email, JSON.stringify(tests));

    }

}
