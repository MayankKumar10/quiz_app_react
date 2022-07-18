import {v4 as uuid} from "uuid";
import {SteveJobsQuiz, SuitsQuiz} from "assets";

export const quizzes = [
  {
    _id: uuid(),
    name: "Suits",
    difficulty: "easy",
    genres: ["action", "Adventure"],
    poster: SuitsQuiz,
    questions: [
      {
        id: uuid(),
        question:
          "What were the names of Bruce Wayne's parents?",
        options: [
          "george & elaine",
          "james & elizabeth",
          "wayne & alice",
          "thomas & martha",
        ],
        answer: "thomas & martha",
      },
      {
        id: uuid(),
        question: "Who is credited with creating Batman?",
        options: [
          "bob kane",
          "joe shuster",
          "jerry siegel",
          "jack kirby",
        ],
        answer: "bob kane",
      },
      {
        id: uuid(),
        question:
          "What Batman villain formerly worked as a zoologist?",
        options: [
          "manbat",
          "killer croc",
          "the penguin",
          "poison ivy",
        ],
        answer: "manbat",
      },
      {
        id: uuid(),
        question:
          "What year was the character of Robin first introduced?",
        options: ["1960", "1950", "1940", "1970"],
        answer: "1940",
      },
      {
        id: uuid(),
        question:
          "The original Batgirl was related to what familiar Batman character?",
        options: [
          "the joker",
          "batwoman",
          "alfred",
          "commissioner gordon",
        ],
        answer: "batwoman",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Steve Jobs",
    difficulty: "medium",
    genres: ["action"],
    poster: SteveJobsQuiz,
    questions: [
      {
        id: uuid(),
        question: "Why is Kratos so pale?",
        options: [
          "He was locked away for a long time",
          "He's allergic to sunlight",
          "He's covered head to toe in the ashes of his dead family",
          "He's a Real Gamer",
        ],
        answer:
          "He's covered head to toe in the ashes of his dead family",
      },
      {
        id: uuid(),
        question: "What is the name of Kratos' first wife?",
        options: ["Calliope", "Faye", "Selene", "Lysandra"],
        answer: "Lysandra",
      },
      {
        id: uuid(),
        question:
          "The Greek God of War games are narrated by which character?",
        options: ["Lysandra", "Calliope", "Athena", "Gaia"],
        answer: "Gaia",
      },
      {
        id: uuid(),
        question:
          "Why does Kratos have that red body tattoo?",
        options: [
          "It's symbolic of his younger brother, Deimos",
          "It was bound to him at the same time as the ashes",
          "It's a tradition in his family",
          "He just thought it would look cool",
        ],
        answer:
          "It's symbolic of his younger brother, Deimos",
      },
      {
        id: uuid(),
        question:
          "In God of War 2, Kratos' father is revealed. Who is it?",
        options: ["Apollo", "Ares", "Zeus", "Cronos"],
        answer: "Zeus",
      },
    ],
  },
];
