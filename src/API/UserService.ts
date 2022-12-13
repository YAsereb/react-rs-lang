import { IUser } from "../types/users";
import axios from "./baseUrl";

const USER_URL = '/user'

export default class UserService {
  static async getUserById(id: string) {
    try {
      const response = await axios.get<IUser>(`${axios}/${USER_URL}/${id}`);
      return response.data
    } catch (error) {
      console.log(error)
    }

  }

  static async createUsers({ name, password }: IUser) {
    await axios.post(`${axios}/${USER_URL}`,
      JSON.stringify(
        {
          name,
          password
        }
      )
    )
  }

  static async updateUser(id: string, email: string, password: string) {
    await axios.patch(`${axios}/${USER_URL}/${id}`, {
      data: {
        email,
        password
      }
    });
  }

  static async deleteUser(id: string) {
    await axios.delete(`${axios}/${USER_URL}/${id}`)
  }

}