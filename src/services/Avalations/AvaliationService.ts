import axios, { AxiosResponse, AxiosError } from "axios";
import { AvaliationModel } from "../../interfaces/Avaliation/AvaliationInterface";

export class AvaliationService {
  async CreateAvaliation(avaliation: AvaliationModel) {
    try {
      const response = await axios.post(
        `http://localhost:8085/acessi/avaliation`,
        avaliation
      );
      return response.status;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async GetAvaliations(descriptionAvaliation: string) {
    try {
      const response = await axios.get(
        `http://localhost:8085/acessi/avaliation?description=${descriptionAvaliation}`
      );
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async AvaliateLocal(avaliation: AvaliationModel) {
    try {
      const response = await axios.post(
        `http://localhost:8085/acessi/avaliation/avaliate`,
        avaliation
      );
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
