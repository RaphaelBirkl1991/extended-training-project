import {Component, OnInit} from '@angular/core';
import {Otter} from "../otter";
import {CorrectAnswer} from "../correct-answer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-otter',
  templateUrl: './otter.component.html',
  styleUrls: ['./otter.component.css']
})
export class OtterComponent implements OnInit{

  otters: Otter[] = [];

  otter: Otter = {
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
    this.http.get<Otter[]>('api/otter').subscribe(o => this.otters = o);

  }
}
