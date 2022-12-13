import axios from './baseUrl';

interface ISignInResponse {
  message: string,
  token: string,
  refreshToken: string,
  userId: string,
  name: string
}

export const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(`/signin`, { email, password });
    const userData: ISignInResponse = response.data;

    localStorage.setItem('token', userData.token);
    localStorage.setItem('refreshToken', userData.refreshToken);
    localStorage.setItem('userId', userData.userId);

  } catch (err) {

    if (err instanceof Error) {
      console.log(err.message)
    }

  }

}