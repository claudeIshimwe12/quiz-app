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
  attemptIndex: number = 0;
  correctAnswerIndex: any;
  opt1: boolean = false;
  opt2: boolean = false;
  opt3: boolean = false;
  opt4: boolean = false;
  oneIsCorrect: boolean = false;
  twoIsCorrect: boolean = false;
  threeIsCorrect: boolean = false;
  fourIsCorrect: boolean = false;

  oneCorrect: boolean = false;
  oneIncorrect: boolean = false;
  twoCorrect: boolean = false;
  twoIncorrect: boolean = false;
  threeCorrect: boolean = false;
  threeIncorrect: boolean = false;
  fourCorrect: boolean = false;
  fourIncorrect: boolean = false;

  handleAttempt(opt: string, index: number) {
    this.attemptAnswer = opt;
    this.attemptIndex = index;
    // get correct index by looping through the options and getting the index of correct option
    this.correctAnswerIndex = this.questions[
      this.currentQuestion
    ].options.indexOf(this.questions[this.currentQuestion].answer);

    // assign a class to that index
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

  onSubmit(e: MouseEvent) {
    if (this.attemptAnswer == '') {
      this.isAttempted = true;

      return;
    }
    this.isAttempted = false;
    this.isSubmitted = true;

    //switch through all these
    if (this.correctAnswerIndex == 0) this.oneIsCorrect = true;
    if (this.correctAnswerIndex == 1) this.twoIsCorrect = true;
    if (this.correctAnswerIndex == 2) this.threeIsCorrect = true;
    if (this.correctAnswerIndex == 3) this.fourIsCorrect = true;

    // Check if the attempted answer is correct
    if (this.attemptIndex === this.correctAnswerIndex) {
      switch (this.attemptIndex) {
        case 0: {
          this.opt1 = false;
          this.oneCorrect = true;
          break;
        }
        case 1: {
          this.opt2 = false;
          this.twoCorrect = true;
          break;
        }
        case 2: {
          this.opt3 = false;
          this.threeCorrect = true;
          break;
        }
        case 3: {
          this.opt4 = false;
          this.fourCorrect = true;
          break;
        }
        default: {
          console.log('Something went wrong');
        }
      }
    } else {
      switch (this.attemptIndex) {
        case 0: {
          this.opt1 = false;
          this.oneIncorrect = true;
          break;
        }
        case 1: {
          this.opt2 = false;
          this.twoIncorrect = true;
          break;
        }
        case 2: {
          this.opt3 = false;
          this.threeIncorrect = true;
          break;
        }
        case 3: {
          this.opt4 = false;
          this.fourIncorrect = true;
          break;
        }
        default: {
          console.log('Something went wrong');
        }
      }
    }
  }
  onNext() {
    if (this.currentQuestion == this.questions.length - 1) return;
    this.currentQuestion = this.currentQuestion + 1;
    this.isAttempted = false;
    this.attemptAnswer = '';
    this.isCorrect = false;
    this.isSubmitted = false;
    this.correctAnswerIndex = '';
    this.opt1 = false;
    this.opt2 = false;
    this.opt3 = false;
    this.opt4 = false;
    this.oneIsCorrect = false;
    this.twoIsCorrect = false;
    this.threeIsCorrect = false;
    this.fourIsCorrect = false;

    // this.oneIsCorrect = false;
    // this.twoIsCorrect = false;
    // this.threeIsCorrect = false;
    // this.fourIsCorrect = false;

    this.oneCorrect = false;
    this.oneIncorrect = false;
    this.twoCorrect = false;
    this.twoIncorrect = false;
    this.threeCorrect = false;
    this.threeIncorrect = false;
    this.fourCorrect = false;
    this.fourIncorrect = false;
  }
}
