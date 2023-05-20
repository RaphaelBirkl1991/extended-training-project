import { Component } from '@angular/core';

@Component({
  selector: 'app-donkey',
  templateUrl: './donkey.component.html',
  styleUrls: ['./donkey.component.css']
})
export class DonkeyComponent {
  question = 'Wie heißt die Hauptstadt von Deutschland?';
  options = ['Berlin', 'Paris', 'Rom', 'London'];
  correctAnswerIndex = 0;
  selectedAnswerIndex: number | null = null;
  showResult = false;

  get isCorrect(): boolean {
    return this.selectedAnswerIndex === this.correctAnswerIndex;
  }

  selectAnswer(index: number): void {
    this.selectedAnswerIndex = index;
    this.showResult = true;
  }
}
