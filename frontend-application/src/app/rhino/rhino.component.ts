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
  public buttonPressed = false;
  public clickedButtonIndex: number | undefined;
  showResult = false;


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
    this.buttonPressed == true;
  this.clickedButtonIndex = buttonIndex;
  console.log(this.clickedButtonIndex);
  console.log(this.rhino.correctoption);
  if(this.clickedButtonIndex == this.rhino.correctoption){
    console.log("richtig");
    this.showResult = true;
  } else {
    console.log("falsch");
  }
  }

  get isCorrect(): boolean {
    return this.clickedButtonIndex == this.rhino.correctoption;
  }


}
