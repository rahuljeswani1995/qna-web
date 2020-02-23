import { Answer } from './answer.model';

export class Question {
    serialNum: string;
    id: string;
    answer_id: string;
    category: string;
    text: string;
    options: Answer[];
    userSelection: string;
}