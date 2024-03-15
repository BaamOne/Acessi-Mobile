import axios, { AxiosResponse, AxiosError } from "axios";
import { UserModel } from "../../interfaces/User/UserInterface";
import { BaseRoute } from "../../interfaces/RotaBase";

export class UserService {
  private API = `${BaseRoute.route}/acessi`;

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
      const response = await axios.post(`${this.API}/login/auth`, user);
      return response.status;
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
