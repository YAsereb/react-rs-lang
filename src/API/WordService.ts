import { IWord } from "../types/word";

import axios from "./baseUrl";

export default class WordAPI {
  static async getAllWords(group = 0, page = 0) {

    const response = await axios.get<IWord[]>(`/words`, {
      params: {
        group: group,
        page: page
      }
    });
    return response.data

  }

  static async getWordById(id: string) {
    try {
      const response = await axios.get<IWord>(`/words?${id}`);
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  static async getAllUserWords(userId: string, token: string) {
    try {
      const response = await axios.get(`/users/${userId}/words`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        }
      })
    } catch (error) {

    }
  }
}