import { AxiosError } from "axios";
import { IWord, IWordCard } from "../types/word";

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
    token: string)
  // : Promise<IWordCard[]>
  {
    try {
      const response = await axios.get(`/users/${userId}/aggregatedWords`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
          params: {
            filter: filter,
            wordsPerPage: limit
          }
        }
      )
      console.log(response.data[0].paginatedResults);
      return response.data[0].paginatedResults
    } catch (error) {
      console.log(error)
    }
  }
}
/*
/users/63c814e65da52d0034266e50/aggregatedWords?filter={"$and":[{"page":0},{"group":0},{"$or":[{"userWord.optional.isLearned":true},{"userWord.optional.isLearned":false},{"userWord.optional.isLearned":null}]},{"$or":[{"userWord":null},{"userWord.difficulty":"hard"},{"userWord.difficulty":"easy"}]}]}&wordsPerPage=20

/users/63c814e65da52d0034266e50/aggregatedWords?filter={"$and":[{"page":0},{"group":0}]}&limit=20
*/