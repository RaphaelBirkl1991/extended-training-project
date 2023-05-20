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
  showResult = false;

  isButtonClicked: boolean = false;
  isButtonClicked1: boolean = false;
  isButtonClicked2: boolean = false;
  isButtonClicked3: boolean = false;
  isButtonClicked4: boolean = false;

  // questionAnswered: boolean = false;
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
    this.isButtonClicked = true;

    if(buttonIndex === 1){
      this.isButtonClicked1 = true
    }
    if(buttonIndex === 2){
      this.isButtonClicked2 = true
    }
    if(buttonIndex === 3){
      this.isButtonClicked3 = true
     }
    if(buttonIndex === 4) {
      this.isButtonClicked4 = true
    }

    this.clickedButtonIndex = buttonIndex;
    console.log(this.clickedButtonIndex);
    console.log(this.rhino.correctoption);
    if(this.clickedButtonIndex == this.rhino.correctoption){
      console.log("richtig");
      this.showResult = true;
    } else {
      console.log("falsch");
      this.showResult = true;
    }
  }


  get isCorrect(): boolean {
    return this.clickedButtonIndex == this.rhino.correctoption;
  }

  nextQuestion(): void {
    this.isButtonClicked = true;
    this.currentQuestionIndex++;
    this.isButtonClicked = false;
    console.log(this.currentQuestionIndex);
    console.log('Button clicked');
    this.isButtonClicked1 = false;
    this.isButtonClicked2 = false;
    this.isButtonClicked3 = false;
    this.isButtonClicked4 = false;
    this.showResult = false
  }

}
