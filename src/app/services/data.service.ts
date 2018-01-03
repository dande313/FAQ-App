import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
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
  }

  getQuestions() {
    return this.questions;
  }

}
