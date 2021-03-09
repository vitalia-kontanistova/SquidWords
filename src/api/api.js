import axios from "axios";

const getInstance = () => {
  let tokenData = JSON.parse(localStorage.getItem("tokenData"));
  let token = tokenData ? tokenData.token : null;

  return axios.create({
    baseURL: "http://194.67.87.190:9000/",
    withCredentials: true,
    headers: { Authorization: "Bearer " + token },
  });
};

export const accountAPI = {
  register({ name, email, password }) {
    let params = {
      title: "Mr",
      firstName: name,
      lastName: "LastName",
      email: email,
      password: password,
      confirmPassword: password,
      acceptTerms: true,
    };
    return getInstance().post("/Accounts/register", params);
  },
  authenticate({ email, password }) {
    return getInstance().post("/Accounts/authenticate", { email, password });
  },
  refreshToken() {
    return getInstance().post("/Accounts/refresh-token", {});
  },
};

export const dictionariesAPI = {
  getDictionaries() {
    return getInstance().get("api/Dictionaries");
  },
  getDictionary(id) {
    return getInstance().get("api/Dictionaries/" + id);
  },
};

export const personalDictionariesAPI = {
  getTimetableInfo() {
    return getInstance().get("api/PersonalDictionaries/timetable/info");
  },

  getPersonalDictionaries() {
    return getInstance().get("api/PersonalDictionaries/");
  },

  createPersonalDictionary(id) {
    return getInstance().post("api/PersonalDictionaries/" + id);
  },

  getPersonalDictionary(id) {
    return getInstance().get("api/PersonalDictionaries/" + id);
  },

  deletePersonalDictionary(id) {
    return getInstance().delete("api/PersonalDictionaries/" + id);
  },
};

export const wordAPI = {
  setKnowWord(id) {
    return getInstance().put("/api/PersonalWords/knowword/" + id);
  },
  setDontKnowWord(id) {
    return getInstance().put("/api/PersonalWords/dontknowword/" + id);
  },
};
