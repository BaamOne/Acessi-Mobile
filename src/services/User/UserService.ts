import axios, { AxiosResponse, AxiosError } from "axios";
import { UserModel } from "../../interfaces/User/UserInterface";
import { BaseRoute } from "../../interfaces/RotaBase";

export class UserService {
  private API = `${BaseRoute.route}/acessi`;
  private API_RESET = `${BaseRoute.route}/acessi`;

  async CreateUser(user: UserModel) {
    try {
      const response = await axios.post(`${this.API}/user`, user);
      return response.status;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async LoginUser(user: UserModel) {
    try {
      const response = await axios.post(`${this.API}/login/auth`, user, {
        withCredentials: true,
      });
      console.log(response);
      return response.status;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async ValidateToken(token: string, email: string) {
    try {
      const response = await axios.post(
        `${this.API}/reset-password/validate-token-reset-password`,
        null, // Corpo da requisição vazio, pois estamos usando params
        {
          params: {
            token: token,
            email: email,
          },
        }
      );
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async SendEmailValidationToken(email: string) {
    try {
      const response = await axios.post(
        `${this.API}/reset-password/send-email-reset-password`,
        null,
        {
          params: {
            email: email,
          },
        }
      );
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async ChangePassword(senha: string, email: string) {
    try {
      const response = await axios.post(
        `${this.API}/reset-password/change-password`,
        null,
        {
          params: {
            password: senha,
            email: email,
          },
        }
      );
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      return error.response ? error.response.status : 403;
    } else {
      return 403;
    }
  };
}
