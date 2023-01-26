import { AxiosError } from "axios";
import { IWord } from "../types/word";

import axios from "./baseUrl";

export default class WordAPI {
  static async getAllWords(group = 0, page = 0) {

    const response = await axios.get<IWord[]>(`/words`, {
      params: {
        group: group,
        page: page - 1
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
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
    }
  }

  static async getAggregatedWords(
    userId: string,
    filter: string,
    limit = 20,
    token: string) {
    try {
      const response = await axios.get(`/users/${userId}/aggregatedWords`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
          params: {
            filter: filter,
            limit: limit
          }
        }
      )
      console.log(response.data);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}