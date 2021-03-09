import { accountAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_REG_ERROR = "SET_REG_ERROR";
const SET_REG_SUCCESS = "SET_REG_SUCCESS";
const LOGOUT = "LOGOUT";

const initialState = {
  role: "",
  firstName: "",
  isVerified: "",

  isAuth: false,
  loginError: "",
  regError: "",
  isRegSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.userData, isAuth: true, loginError: "" };
    case LOGOUT:
      return { ...state, ...action.userData };
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
export const setUserData = ({ email, firstName, id, isVerified, role }) => ({
  type: SET_USER_DATA,
  userData: { email, firstName, id, isVerified, role },
});
export const logOut = () => ({
  type: LOGOUT,
  userData: {
    id: -1,
    role: "",
    firstName: "",
    isVerified: false,
    isAuth: false,
    loginError: "",
    regError: "",
    isRegSuccess: false,
  },
});

export const logInThunkCreator = ({ email, pass }) => (dispatch) => {
  accountAPI
    .authenticate({ email, password: pass })
    .then((response) => {
      if (response.status === 200) {
        const user = {
          id: response.data.id,
          firstName: response.data.firstName,
          role: response.data.role,
          isVerified: response.data.isVerified,
        };

        dispatch(setUserData(user));
        startRefreshTokenTimer(dispatch);

        const tokenData = {
          token: response.data.jwtToken,
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("tokenData", JSON.stringify(tokenData));
      }
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 400) {
          dispatch(setLoginError("Вы ввели неверную почту и/или пароль."));
        }
        console.error(error.response.data.message);
      } else if (error.request) {
        console.error(error.request);
        debugger;
      } else {
        console.error("Error", error.message);
        debugger;
      }
    });
};

export const logOutThunkCreator = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("tokenData");
  dispatch(logOut());
  stopRefreshTokenTimer();
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
        console.error(error.request);
        debugger;
      } else {
        console.error("Error", error.message);
        debugger;
      }
    });
};

/* export const refreshTokenThunkCreator = () => (dispatch) => {
  debugger;
  accountAPI
    .refreshToken()
    .then((response) => {
      debugger;
      if (response.status === 200) {
        const user = {
          id: response.data.id,
          firstName: response.data.firstName,
          role: response.data.role,
          isVerified: response.data.isVerified,
        };

        dispatch(setUserData(user));
        startRefreshTokenTimer(dispatch);

        const tokenData = {
          token: response.data.jwtToken,
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("tokenData", JSON.stringify(tokenData));
        debugger;
      }
    })
    .catch((error) => {
      if (error.response) {
        console.error(error.response.data.message);
        debugger;
      } else if (error.request) {
        console.error(error.request);
        debugger;
      } else {
        console.error("Error", error.message);
        debugger;
      }
    });
}; */

let refreshTokenTimeout;
function startRefreshTokenTimer(dispatch) {
  let timeout = 840000;

  /*   
  if (localStorage.getItem("tokenData")) {
    let tokenData = JSON.parse(localStorage.getItem("tokenData"));
    let wholeToken = tokenData ? tokenData.token : "";
    const jwtToken = JSON.parse(atob(wholeToken.split(".")[1]));

    const expires = new Date(jwtToken.exp * 1000);
    timeout = expires.getTime() - Date.now() - 60 * 1000;
  }
  refreshTokenTimeout = setTimeout(dispatch(refreshTokenThunkCreator()), timeout);
 */

  refreshTokenTimeout = setTimeout(() => {
    dispatch(logOutThunkCreator());
    alert("after dispatch(logOutThunkCreator())");
  }, 600000);
  // }, timeout);
}

function stopRefreshTokenTimer() {
  clearTimeout(refreshTokenTimeout);
}

export default authReducer;
