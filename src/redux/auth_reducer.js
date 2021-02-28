import { accountAPI } from "../api/api";

const AUTHENTICATE = "AUTHENTICATE";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_REG_ERROR = "SET_REG_ERROR";
const SET_REG_SUCCESS = "SET_REG_SUCCESS";

const initialState = {
  role: "",
  id: -1,
  email: "",
  firstName: "",
  jwtToken: "",
  isVerified: "",

  isAuth: false,
  loginError: "",
  regError: "",
  isRegSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, ...action.userData, isAuth: true, loginError: "" };
    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.message };
    case SET_REG_ERROR:
      return { ...state, regError: action.message };
    case SET_REG_SUCCESS:
      return { ...state, isRegSuccess: action.status };
    default:
      return state;
  }
};

export const setLoginError = (message) => ({ type: SET_LOGIN_ERROR, message });
export const setRegError = (message) => ({ type: SET_REG_ERROR, message });
export const setRegSuccess = (status) => ({ type: SET_REG_SUCCESS, status });

export const authenticate = ({
  email,
  firstName,
  id,
  isVerified,
  jwtToken,
  role,
}) => ({
  type: AUTHENTICATE,
  userData: { email, firstName, id, isVerified, jwtToken, role },
});

export const authenticateThunkCreator = ({ email, pass }) => (dispatch) => {
  accountAPI
    .authenticate({ email, password: pass })
    .then((response) => {
      if (response.status === 200) {
        dispatch(authenticate(response.data));
        localStorage.setItem("TOkeN", response.data.jwtToken); // пока так, поправить позже
      }
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 400) {
          dispatch(setLoginError("Вы ввели неверную почту и/или пароль."));
        }
        console.error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        debugger;
      } else {
        console.log("Error", error.message);
        debugger;
      }
    });
};

export const registerThunkCreator = ({ email, name, pass }) => (dispatch) => {
  accountAPI
    .register({ name, email, password: pass })
    .then((response) => {
      if (response.status === 200) {
        dispatch(setRegSuccess(true));
      }
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 400) {
          dispatch(setRegError("Пользователь с такой почтой уже существует."));
        }
        console.error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        debugger;
      } else {
        console.log("Error", error.message);
        debugger;
      }
    });
};

export default authReducer;
