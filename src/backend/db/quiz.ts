import {v4 as uuid} from "uuid";
import {SteveJobsQuiz, SuitsQuiz} from "assets";

export const quizzes = [
  {
    _id: uuid(),
    name: "Suits",
    levels: "Medium",
    quotes: "I don't play the odds, I play the man",
    categories: ["Drama"],
    quizImg: SuitsQuiz,
    questions: [
      {
        id: uuid(),
        question:
          "At the end of Suits Season 3, who does Mike leave Pearson Specter to work for instead?",
        options: [
          "Wakefield-Cady",
          "Sidwell Investment Group",
          "Rand, Kaldor & Zane",
          "Darby International",
        ],
        answer: "Sidwell Investment Group",
      },
      {
        id: uuid(),
        question:
          "Harvey and Donna have a secret ritual involving a what?",
        options: [
          "spatula",
          "stapler",
          "whisk",
          "can opener",
        ],
        answer: "can opener",
      },
      {
        id: uuid(),
        question: "What is Harvey Specter’s middle name?",
        options: ["James", "Reginald", "Edward", "Richard"],
        answer: "Reginald",
      },
      {
        id: uuid(),
        question: "Where did Rachel earn her law degree",
        options: ["Harvard", "Cornell", "Columbia", "NYU"],
        answer: "Columbia",
      },
      {
        id: uuid(),
        question:
          "Before he worked at Pearson Hardman, Harvey had a job where?",
        options: [
          "District Attorney’s office",
          "Bratton Gould",
          "Rand, Kaldor, and Zane",
          "Darby International",
        ],
        answer: "District Attorney’s office",
      },
    ],
  },
  {
    _id: uuid(),
    name: "Steve Jobs",
    levels: "medium",
    quotes: "Stay Foolish Stay Hungry",
    categories: ["biography"],
    quizImg: SteveJobsQuiz,
    questions: [
      {
        id: uuid(),
        question:
          "As an infant, Jobs was adopted by Clara and Paul Jobs and named ..........",
        options: [
          " Steven Paul Clara Jobs",
          "Steven PattiJobs",
          "Steve Paul Jobs",
          "Steven Paul Jobs",
        ],
        answer: "Steven Paul Jobs",
      },
      {
        id: uuid(),
        question: "Which college did Steve Jobs attended?",
        options: [
          "Reed College",
          "Harvard College ",
          "Cambridge University",
          "Oxford College",
        ],
        answer: "Reed College",
      },
      {
        id: uuid(),
        question:
          "Before founding Apple, Steve Jobs used to work for which video-game manufacturer?",
        options: ["Neversoft", "Enix", "Nintendo", "Atari"],
        answer: "Atari",
      },
      {
        id: uuid(),
        question: "Steve Jobs co-founded Apple in....",
        options: ["1974", "1972", "1980", "1976"],
        answer: "1976",
      },
      {
        id: uuid(),
        question: "Steve Jobs was born in....",
        options: ["1957", "1962", "1955", "1959"],
        answer: "1955",
      },
    ],
  },
];
