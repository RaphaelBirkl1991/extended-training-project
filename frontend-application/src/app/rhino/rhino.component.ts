import { Component } from '@angular/core';
import {Rhino} from "../rhino";
import {CorrectAnswer} from "../correct-answer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rhino',
  templateUrl: './rhino.component.html',
  styleUrls: ['./rhino.component.css']
})
export class RhinoComponent {

  rhinos: Rhino[] = [];

  rhino: Rhino = {
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
    this.http.get<Rhino[]>('api/rhino').subscribe(r => this.rhinos = r);
  }

}
