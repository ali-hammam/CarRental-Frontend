import { useMutation, useQuery } from "react-query";
import ApiService from "./ApiService";

class RentRequest extends ApiService {
  static rentService;

  useRent = () => {
    return useMutation(({ rent }) => {
      
      return this.post('/rent',  {data: rent } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  static getInstance() {
    if (!RentRequest.rentService)  {
      RentRequest.rentService = new RentRequest();
    }

    return RentRequest.rentService;
  }
}

export default RentRequest;