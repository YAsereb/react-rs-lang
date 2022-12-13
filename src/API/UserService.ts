import { IUser } from "../types/users";
import axios from "./baseUrl";
import { signIn } from "./SingIn";

const USER_URL = '/users'

export default class UserService {
  static async getUserById(id: string) {
    try {
      const response = await axios.get<IUser>(`${USER_URL}/${id}`);
      return response.data
    } catch (error) {
      console.log(error)
    }

  }

  static async createUsers({ email, password }: IUser) {
    try {
      const response = await axios.post(`${USER_URL}`,
        { email, password }
      )
      signIn(email, password);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }

  }

  static async updateUser(id: string, email: string, password: string) {
    await axios.patch(`${USER_URL}/${id}`,
      { email, password }
    );
  }

  static async deleteUser(id: string) {
    await axios.delete(`${USER_URL}/${id}`)
  }

}