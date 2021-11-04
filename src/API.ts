import { suffleArray } from './utils'
export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulity {
  EASY = 'easy',
  MEDIUM = 'medium',
  HADR = 'hard',
}

export const fetchQuizQuestion = async (
  amount: number,
  difficulity: Difficulity
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulity=${difficulity}&type=multiple`
  const data = await (await fetch(endpoint)).json()

  return data.results.map((question: Question) => ({
    ...question,
    answers: suffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }))
}
