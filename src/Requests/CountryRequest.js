import { useMutation, useQuery } from "react-query";
import ApiService from "./ApiService";

class CountryRequest extends ApiService {
  static countryService;
  
  useCountries = () => {
    return useQuery('countries', () => {
      return this.get('/countries');
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  useStates = () => {
    return useMutation(({ country }) => {
      const data = {'country_id': country};
      return this.post('/states',  {data} );
    }, {
      //retry: false,
      select: (response) => {
        const { data } = response;
        return data;
      }
      /*onSuccess: ({data}) => {
        return data['data'];
      }*/
    });
  }

  static getInstance() {
    if (!CountryRequest.countryService)  {
      CountryRequest.countryService = new CountryRequest();
    }

    return CountryRequest.countryService;
  }
}

export default CountryRequest;