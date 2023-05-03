import {Component, OnInit} from '@angular/core';
import {Tiger} from "../tiger";
import {CorrectAnswer} from "../correct-answer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tiger',
  templateUrl: './tiger.component.html',
  styleUrls: ['./tiger.component.css']
})
export class TigerComponent implements OnInit{

  tigers: Tiger[] = [];
  tiger: Tiger={
    id: 0,
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctAnswer: CorrectAnswer.OPTION_1,
    commentary: '',
  }

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<Tiger[]>('api/tiger').subscribe(t => this.tigers = t);
  }
}
