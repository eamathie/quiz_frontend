import { apiRequest } from "./apiClient"

export interface Question {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answer: string[],
}

interface QuestionList {
    results: Question[]
}

export const fetchQuestions = async (): Promise<QuestionList> => {
    return await apiRequest<QuestionList>('/api.php?amount=10', 'GET');
}