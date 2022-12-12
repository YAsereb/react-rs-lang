export interface IWord {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string
}

export type PlaceLearnedWord = 'audio-game' | 'sprint-game' | 'book'

export type OptionalWord = {
  isNew: boolean,
  whenSetNew: string,
  isLastTrueAnswer: boolean,
  countTrueAnswerInRow: number,
  countTrueAnswer: number,
  countAttempt: number,
  isLearned: boolean,
  whenLearnedDate: string,
  whereLearned: PlaceLearnedWord
};

export type UserWord = {
  difficulty: 'hard' | 'easy',
  optional: OptionalWord
}

export interface IWordCard {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id?: string;
  _id?: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
  userWord: UserWord;
}