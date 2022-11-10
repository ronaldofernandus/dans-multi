import { getListJobs, getDetailJobs, getPage } from "../../Axios/homeAxios";
const initialState = {
  getListJobsResult: false,
  getListJobsLoading: false,
  getListJobsError: false,

  getDetailJobsResult: false,
  getDetailJobsLoading: false,
  getDetailJobsError: false,

  getPageResult: false,
  getPageLoading: false,
  getPageError: false,
};

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case getListJobs:
      return {
        ...state,
        getListJobsResult: action.payload.data,
        getListJobsLoading: action.payload.loading,
        getListJobsError: action.payload.errorMessage,
      };

    case getDetailJobs:
      return {
        ...state,
        getDetailJobsResult: action.payload.data,
        getDetailJobsLoading: action.payload.loading,
        getDetailJobsError: action.payload.errorMessage,
      };

    case getPage:
      return {
        ...state,
        getPageResult: action.payload.data,
        getPageLoading: action.payload.loading,
        getPageError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default jobs;
