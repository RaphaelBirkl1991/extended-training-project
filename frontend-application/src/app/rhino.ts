import {CorrectOption} from "./correct-option";
export interface Rhino {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  commentary: string;

  correctoptiontext: string;

  correctoption: CorrectOption;
}
