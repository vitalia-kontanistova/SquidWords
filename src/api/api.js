import axios from "axios";

const getInstance = () => {
  const userData = JSON.parse(localStorage.getItem("user")); // пока так, поправить позже
  const token = userData ? userData.jwtToken : null; // пока так, поправить позже

  const instance = axios.create({
    baseURL: "http://194.67.87.190:9000/",
    withCredentials: true,
    headers: { Authorization: "Bearer " + token },
  });

  return instance;
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

  getPersonalDictionary(id) {
    return getInstance().post("api/PersonalDictionaries/" + id, { id: id });
  },
};
