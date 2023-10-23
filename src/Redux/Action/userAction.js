import axios from "axios";
import {
  USER_LOADING_ATTEMPT,
  USER_LOADING_FALSE,
  USER_COMPLAINT,
  USER_COMPLAINT_CLIENT,
  USER_LOADING_TRUE,
  USER_LOGIN,
  USER_LOAD,
  
} from "../type";
import { baseurl } from "../../baseurl";

export const userSignup = (option, setsignup) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING_ATTEMPT });
    const user = await axios.post(baseurl + "/user/signup", option);
    console.log(user.data.message)
    
    if(user.data.message === `Congrats...! Dear ${option.name}, Your Account Has been Created Successfully`)  setsignup(false) 

    dispatch({ type: USER_LOADING_TRUE });
  } catch (error) {
    dispatch({ type: USER_LOADING_FALSE });
    console.log(error);
  }
};


export const update_user = (option) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING_ATTEMPT });
    const user = await axios.put(baseurl + "/user/update_user", option);
    console.log(user)
    
    if(user.data.message === `Profile Updated Successfully`) dispatch({type:USER_LOGIN,payload:user.data.data})

    dispatch({ type: USER_LOADING_TRUE });
  } catch (error) {
    dispatch({ type: USER_LOADING_FALSE });
    console.log(error);
  }
};


export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING_ATTEMPT });
    const user = await axios.get(baseurl + "/user/loaduser");
    console.log(user)
    dispatch({type:USER_LOAD,payload:user.data.data})
    dispatch({ type: USER_LOADING_TRUE });
  } catch (error) {
    dispatch({ type: USER_LOADING_FALSE });
    console.log(error);
  }
};



export const userLogin = (option,navigate,s) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING_ATTEMPT });
    const user = await axios.post(baseurl + "/user/login", option);
    if(user.data.message === "Login Successfull") {
        localStorage.setItem("token",user.data.data.token)
        navigate('/dashboard')
        s(false)
    }
    console.log(user);
    dispatch({ type: USER_LOGIN, payload: user.data.data });
    dispatch({ type: USER_LOADING_TRUE });
  } catch (error) {
    dispatch({ type: USER_LOADING_FALSE });
    console.log(error);
  }
};

export const userComplaint = (option) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING_ATTEMPT });
    const user = await axios.post(baseurl + "/user/studentComplaint", option);
    console.log(user);
    dispatch({ type: USER_COMPLAINT, payload: user.data.data });
    dispatch({ type: USER_LOADING_TRUE });
  } catch (error) {
    dispatch({ type: USER_LOADING_FALSE });
    console.log(error);
  }
};

export const clientComplaint = (option) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING_ATTEMPT });
    const user = await axios.post(baseurl + "/user/costumerComplaint", option);
    console.log(user);
    dispatch({ type: USER_COMPLAINT_CLIENT, payload: user.data.data });
    dispatch({ type: USER_LOADING_TRUE });
  } catch (error) {
    dispatch({ type: USER_LOADING_FALSE });
    console.log(error);
  }
};
