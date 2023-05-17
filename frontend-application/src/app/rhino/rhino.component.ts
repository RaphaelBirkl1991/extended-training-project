import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CorrectOption} from "../correct-option";
import {Rhino} from "../rhino";

@Component({
  selector: 'app-rhino',
  templateUrl: './rhino.component.html',
  styleUrls: ['./rhino.component.css']
})
export class RhinoComponent implements OnInit{

  currentQuestionIndex = 1;
  public clickedButtonIndex: number | undefined;

  rhinos: Rhino[] = [];

  rhino: Rhino = {
    id: 0,
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    commentary: '',
    correctoptiontext: '',
    correctoption: CorrectOption.A
  }
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Rhino[]>('api/rhino').subscribe(r =>
      this.rhinos = r);
  }

  buttonClicked(buttonIndex: number): void {
  this.clickedButtonIndex = buttonIndex;
  console.log(this.clickedButtonIndex);
  console.log(this.rhino.correctoption);
  if(this.clickedButtonIndex == this.rhino.correctoption){
    console.log("richtig")}
  else {
    console.log("falsch")
  }
  }
}
