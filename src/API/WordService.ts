import axios from "axios";
import { IWord } from "../types/word";

const baseUrl = axios.defaults.baseURL;

export default class WordAPI {
  static async getAllWords(group = 0, page = 0) {

    const response = await axios.get<IWord[]>(`${baseUrl}/words`, {
      params: {
        _group: group,
        _page: page
      }
    });
    return response.data

  }

  static async getWordById(id: string) {
    try {
      const response = await axios.get<IWord>(`${baseUrl}/words?${id}`);
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  static async getAllUserWords(userId: string, token: string) {
    try {
      const response = await axios.get(`${baseUrl}/users/${userId}/words`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        }
      })
    } catch (error) {

    }
  }
}