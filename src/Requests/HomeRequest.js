import { useQuery } from "react-query";
import ApiService from "./ApiService";

class HomeRequest extends ApiService {
  static homeService;
  
  useTest = () => {
    return useQuery('home', () => {
      return this.get('/');
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  static getInstance() {
    if (!HomeRequest.homeService)  {
      HomeRequest.homeService = new HomeRequest();
    }

    return HomeRequest.homeService;
  }
}

export default HomeRequest;