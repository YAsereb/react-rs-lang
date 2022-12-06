import axios from "axios";
import { IUser } from "../types/users";


export default class UserService {
  static async getUserById(id: string) {
    try {
      const response = await axios.get<IUser>(`${axios.defaults.baseURL}/${id}`);
      return response.data
    } catch (error) {
      console.log(error)
    }

  }

  static async createUsers({ name, email, password }: IUser) {
    await axios.post(`${axios.defaults.baseURL} /users`, {
      data: {
        name,
        email,
        password
      }
    });
  }

  static async updateUser(id: string, email: string, password: string) {
    await axios.patch(`${axios.defaults.baseURL}/users/${id}`, {
      data: {
        email,
        password
      }
    });
  }

  static async deleteUser(id: string) {
    await axios.delete(`${axios.defaults.baseURL}`)
  }

}