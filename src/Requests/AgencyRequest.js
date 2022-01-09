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

  useBranch = () => {
    return useQuery('branch', () => {
      return this.get('/branches');
    }, {
      select: (response) => {
        const { data } = response;
        return data['branches'];
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

  useBranchMutate = () => {
    return useMutation(({ branch }) => {
      return this.post('/addBranch',  {data: branch } );
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
        //console.log(data);
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
        //console.log(data);
        return data['data']['data'];
      }
    });
  }

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

  useCarByBranch = () => {
    return useMutation(({ branch }) => {
      return this.post('/carByBranch',  {data: {branch_id: branch} } );
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

  static getInstance() {
    if (!AgencyRequest.agencyService)  {
      AgencyRequest.agencyService = new AgencyRequest();
    }

    return AgencyRequest.agencyService;
  }
}

export default AgencyRequest;