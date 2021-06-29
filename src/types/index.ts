export type QuizStepType = 'HOME' | 'QUIZ' | 'RESULT';

export interface ApiResponseType {
  response_code: number;
  results: ResultsDataType[];
}

export interface ResultsDataType {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
