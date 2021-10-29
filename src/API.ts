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
  console.log(data)
}
