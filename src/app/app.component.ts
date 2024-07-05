import { Component } from '@angular/core';
import { QUESTIONS } from './db.data';
import Question from './model/question';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isQuizStarted: boolean = false;
  data: {
    title: string;
    icon: string;
    questions: Question[];
  }[] = QUESTIONS;
  currentQuestion: {
    title: string;
    icon: string;
    questions: Question[];
  } = {
    title: '',
    icon: '',
    questions: [{ question: '', options: [''], answer: '' }],
  };

  subjects = this.data.map((d) => {
    return {
      icon: d.icon,
      title: d.title,
    };
  });

  handleClick(s: { title: string; icon: string }) {
    this.isQuizStarted = true;
    this.data.forEach((q) => {
      if (s.title == q.title) this.currentQuestion = q;
    });
  }
}
