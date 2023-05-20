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
  correctAns: string | undefined;



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


  checkAnswer(): string {
    if (this.selectedOption == this.giraffen[this.currentQuestionIndex - 1].correctAnswer) {
      this.correctAns = "Richtig!";
    } else {
      this.correctAns = "Falsch!";
    }
    return this.correctAns;
  }

  showNextQuestionButton(): boolean {
    return (
      this.selectedOption !== undefined &&
      this.currentQuestionIndex < this.giraffen.length
    );
  }

  nextQuestion(): void {
    this.selectedOption == undefined;
    this.currentQuestionIndex++;
    this.selectedOption === undefined;
  }

}
