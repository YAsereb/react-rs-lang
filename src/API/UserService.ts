import { AxiosError } from "axios";
import axios from "./baseUrl";

interface ISignInResponse {
  message: string,
  token: string,
  refreshToken: string,
  userId: string,
  name: string
}

interface IUser {
  name?: string,
  email: string,
  password: string
}

const USER_URL = '/users'

export default class UserService {

  static async getUserById(id: string) {
    try {
      const response = await axios.get<IUser>(`${USER_URL}/${id}`);
      return response.data
    } catch (error) {

      if (error instanceof AxiosError) {
        return error.response;
      }

    }

  }

  static async createUsers({ email, password }: IUser) {
    try {
      const response = await axios.post<IUser>(`${USER_URL}`,
        { email, password }
      )

      this.signIn(email, password);

      console.log(response.data)

      return response.data;
    } catch (error) {

      if (error instanceof AxiosError) {
        console.log(error.response?.data)
        return error.response;
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

  static async signIn(email: string, password: string) {
    try {
      const response = await axios.post<ISignInResponse>(`/signin`, { email, password });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('userId', response.data.userId);

      return response.data
    } catch (error) {

      if (error instanceof AxiosError) {
        return error.response;
      }

    }

  }
}