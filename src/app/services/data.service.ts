import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
    /*
    this.questions = [
      {
        text: 'What does HSD stand for?',
        answer: 'Holland Special Delivery',
        hide: true
      },
      {
        text: `What are  HSD's four core values?`,
        answer: 'Do the Right Thing. Embrace Change. Be Passionate. Be Safe.',
        hide: true
      },
      {
        text: 'Who is the president of HSD?',
        answer: 'Joe Kovacs',
        hide: true
      }
    ];
    */
  }

  // Get Questions from local storage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // Add Question to local storage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    let questions;

    if (localStorage.getItem('questions') === null) {
      this.questions = [];
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions))
    }
  }

  // Remove Question to local storage
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
