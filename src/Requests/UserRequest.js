import { useMutation, useQuery } from "react-query";
import ApiService from "./ApiService";

class UserRequest extends ApiService {
  static userService;

  useImageMutate = () => {
    return useMutation(({ image }) => {
      console.log(image);
      return this.post('/addImage',  {data: {image} } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  useCars = () => {
    return useQuery('cars', () => {
      return this.get('/cars');
    }, {
      select: (response) => {
        const { data } = response;
        return data['cars'];
      }
    });
  }

  useCarsByModel = () => {
    return useMutation(({ model }) => {
      return this.post('/carsByModel',  {data: {model} } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  useCarsByManufacturer = () => {
    return useMutation(({ manufacturer }) => {
      return this.post('/carsByManufacturer',  {data: {manufacturer} } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  useCarsByType = () => {
    return useMutation(({ type }) => {
      return this.post('/carsByType',  {data: {type} } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  static getInstance() {
    if (!UserRequest.userService)  {
      UserRequest.userService = new UserRequest();
    }

    return UserRequest.userService;
  }
}

export default UserRequest;