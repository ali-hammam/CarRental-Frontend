import { useMutation, useQuery } from "react-query";
import ApiService from "./ApiService";

class BranchRequest extends ApiService {
  static branchService;
  
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

  static getInstance() {
    if (!BranchRequest.branchService)  {
      BranchRequest.branchService = new BranchRequest();
    }

    return BranchRequest.branchService;
  }
}

export default BranchRequest;