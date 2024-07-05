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
  isAttempted: boolean = false;
  attemptAnswer: string = '';
  isCorrect: boolean = false;
  isSubmitted: boolean = false;
  opt1: boolean = false;
  opt2: boolean = false;
  opt3: boolean = false;
  opt4: boolean = false;

  handleAttempt(opt: string, index: number) {
    this.attemptAnswer = opt;
    // this.isAttempted = true;
    switch (index) {
      case 0: {
        this.opt2 = false;
        this.opt3 = false;
        this.opt4 = false;
        this.opt1 = true;
        break;
      }
      case 1: {
        this.opt2 = true;
        this.opt3 = false;
        this.opt4 = false;
        this.opt1 = false;
        break;
      }
      case 2: {
        this.opt2 = false;
        this.opt3 = true;
        this.opt4 = false;
        this.opt1 = false;
        break;
      }
      case 3: {
        this.opt2 = false;
        this.opt3 = false;
        this.opt4 = true;
        this.opt1 = false;
        break;
      }
    }
  }

  onSubmit() {
    if (this.attemptAnswer == '') {
      this.isAttempted = true;

      return;
    }
    this.isAttempted = false;
    this.isSubmitted = true;

    if (this.questions[this.currentQuestion].answer == this.attemptAnswer) {
      console.log('correct');
    }
  }
  onNext() {
    if (this.currentQuestion == this.questions.length - 1) return;
    this.currentQuestion = this.currentQuestion + 1;
    this.isSubmitted = false;
  }
}
