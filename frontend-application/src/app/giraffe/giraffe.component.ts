// import {Component, OnInit} from '@angular/core';
// import {CorrectAnswer} from "../correct-answer";
// import {Giraffe} from "../giraffe";
// import {HttpClient} from "@angular/common/http";
//
// @Component({
//   selector: 'app-giraffe',
//   templateUrl: './giraffe.component.html',
//   styleUrls: ['./giraffe.component.css']
// })
// export class GiraffeComponent implements OnInit{
//
//   currentQuestionIndex = 1;
//   nextQuestion(){
//     this.currentQuestionIndex++;
//   }
//
//  giraffen: Giraffe[] = [];
//
//  // @ts-ignore
//   giraffe: Giraffe = {
//    id: 0,
//    question: '',
//    option1: '',
//    option2: '',
//    option3: '',
//    option4: '',
//    correctAnswer: CorrectAnswer.OPTION_1,
//    commentary: '',
//  }
//
//  constructor(private http: HttpClient) {
//  }
//
//   ngOnInit(): void {
//     this.http.get<Giraffe[]>('api/giraffe').subscribe(g => this.giraffen = g);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Giraffe } from '../giraffe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-giraffe',
  templateUrl: './giraffe.component.html',
  styleUrls: ['./giraffe.component.css']
})
export class GiraffeComponent implements OnInit {
  currentQuestionIndex = 1;
  selectedOption: string | undefined;

  giraffen: Giraffe[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Giraffe[]>('api/giraffe')
      .subscribe(g => (this.giraffen = g));
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  showNextQuestionButton(): boolean {
    return (
      this.selectedOption !== undefined &&
      this.currentQuestionIndex < this.giraffen.length
    );
  }

  nextQuestion(): void {
    this.selectedOption = undefined;
    this.currentQuestionIndex++;
  }
}
