import { useMutation, useQuery } from "react-query";
import ApiService from "./ApiService";

class AgencyRequest extends ApiService {
  static agencyService;
  
  useAgency = () => {
    return useQuery('agency', () => {
      return this.get('/agency');
    }, {
      select: (response) => {
        const { data } = response;
        return data['agencies'];
      }
    });
  }

  useAgencyMutate = () => {
    return useMutation(({ agency }) => {
      return this.post('/addAgency',  {data: {agency} } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  useManufacturerMutate = () => {
    return useMutation(({ manufacturer }) => {
      return this.post('/addManufacture',  {data: manufacturer } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  usGetManufacturersByAgency = () => {
    return useMutation(({ agency }) => {
      return this.post('/manufacturers',  {data: {agency_id: agency} } );
    }, {
      select: (response) => {
        const { data } = response;
        return data;
      }
    });
  }

  usGetCarTypeByAgency = () => {
    return useMutation(({ agency }) => {
      return this.post('/carTypes',  {data: {agency_id: agency} } );
    }, {
      select: (response) => {
        const { data } = response;
        return data['data']['data'];
      }
    });
  }

  static getInstance() {
    if (!AgencyRequest.agencyService)  {
      AgencyRequest.agencyService = new AgencyRequest();
    }

    return AgencyRequest.agencyService;
  }
}

export default AgencyRequest;