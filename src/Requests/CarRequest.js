import { useMutation, useQuery } from "react-query";
import ApiService from "./ApiService";

class CarRequest extends ApiService {
  static carService;

  useCarTypeMutate = () => {
    return useMutation(({ carType }) => {
      return this.post('/addCarType',  {data: carType } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  useCarMutate = () => {
    return useMutation(({ car }) => {
      return this.post('/addCar',  {data: car } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  useEditCar = () => {
    return useMutation(({ data }) => {
      return this.put('/editCar',  { data } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  useReservedCar = () => {
    return useMutation(({ data }) => {
      return this.post('/reservedCars',  { data } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  static getInstance() {
    if (!CarRequest.carService)  {
      CarRequest.carService = new CarRequest();
    }

    return CarRequest.carService;
  }
}

export default CarRequest;