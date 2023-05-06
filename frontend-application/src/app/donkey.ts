import {CorrectAnswer} from "./correct-answer";

export interface Donkey {

  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: CorrectAnswer;
  commentary: string;
}




