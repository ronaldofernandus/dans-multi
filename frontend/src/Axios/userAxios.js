import axios from "axios";

export const profile = "profile";

export const getUser = () => {
  console.log("2.Masuk")
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "profile",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/user/userLogin",
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Respone",response.data);
        dispatch({
          type: "profile",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("4.Respone",error.message);
        dispatch({
          type: "profile",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
