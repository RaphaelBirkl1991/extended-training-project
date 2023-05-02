import {Component, OnInit} from '@angular/core';
import {CorrectAnswer} from "../correct-answer";
import {Giraffe} from "../giraffe";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-giraffe',
  templateUrl: './giraffe.component.html',
  styleUrls: ['./giraffe.component.css']
})
export class GiraffeComponent implements OnInit{

 giraffen: Giraffe[] = [];

 // @ts-ignore
  giraffe: Giraffe = {
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
    this.http.get<Giraffe[]>('api/giraffe').subscribe(g => this.giraffen = g);
  }
}
