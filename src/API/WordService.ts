import axios from "axios";
import { IWord } from "../types/word";


export default class WordAPI {
  static async getAllWords(group = 0, page = 0) {

    const response = await axios.get<IWord[]>(`${axios.defaults.baseURL}/words?group=${group}&page=${page}`);
    return response.data

  }

  static async getWordById(id: string) {
    try {
      const response = await axios.get<IWord>(`${axios.defaults.baseURL}/words?${id}`);
      return response;
    } catch (error) {
      console.log(error)
    }
  }
}