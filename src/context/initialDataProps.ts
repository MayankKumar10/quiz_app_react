export type questionProps = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  selection?: string;
};

export type quizDataProps = {
  _id: string;
  name: string;
  levels: string;
  categories: string[];
  quotes: string;
  quizImg: string;
  questions: questionProps[];
};
