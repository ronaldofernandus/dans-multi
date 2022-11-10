import { profile } from "../../Axios/userAxios";
const initialState = {
  profileResult: false,
  profileLoading: false,
  profileError: false,
};

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case profile:
      return {
        ...state,
        profileResult: action.payload.data,
        profileLoading: action.payload.loading,
        profileError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default jobs;
