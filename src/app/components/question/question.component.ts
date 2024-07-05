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

  chars: string[] = ['A', 'B', 'C', 'D'];
  grade: number = 0;
  currentQuestion: number = 0;
  isAttempted: boolean = false;
  warn: boolean = false;
  handleAttempt(opt: string) {
    this.isAttempted = true;
    console.log('I got clicked');

    if (this.questions[this.currentQuestion].answer == opt) {
      this.grade++;
    } else {
      console.log('You missed');
    }
  }
  onSubmit() {
    console.log('Grade: ', this.grade);
    if (!this.isAttempted) this.warn = true;
  }
}
