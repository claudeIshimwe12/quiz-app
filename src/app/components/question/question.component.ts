import { Component, Input } from '@angular/core';
import Question from '../../model/question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  @Input() questions: Question[] = [
    { question: '', options: [''], answer: '' },
  ];
  grade: number = 0;
  currentQuestion: number = 0;
  handleAttempt(opt: string) {
    if (this.questions[this.currentQuestion].answer == opt) {
      console.log('It is correct');
    } else {
      console.log('You missed');
    }
  }
}
