import axios from "axios";

const instance = axios.create({
  baseURL: "http://194.67.116.26:9000/",
  withCredentials: true,
});

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
    return instance.post("/Accounts/register", params);
  },
  authenticate({ email, password }) {
    return instance.post("/Accounts/authenticate", { email, password });
  },
};

export const dictionariesAPI = {
  getDictionaries() {
    return instance.get("/api/Dictionaries");
  },
  getDictionary(id) {
    return instance.get("/api/Dictionaries/" + id);
  },
};

export const personalDictionariesAPI = {
  getTimetableInfo() {
    return instance.get("/api/PersonalDictionaries/timetable/info");
  },

  getPersonalDictionaries(id) {
    return instance.post("/api/PersonalDictionaries/" + id, { id: id });
  },
};
