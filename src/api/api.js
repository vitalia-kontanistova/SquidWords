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

  getPersonalDictionaries() {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJuYmYiOjE2MTQ1Mjg0MDMsImV4cCI6MTYxNDUyOTMwMywiaWF0IjoxNjE0NTI4NDAzfQ.Dx7m-TcfHt-bkFbr-vCscutBxQMtv1q2sXq4_9M5PNU";
    let config = { Authorization: `Bearer ${token}` };
    return instance.get("/api/PersonalDictionaries/", config);
  },

  getPersonalDictionary(id) {
    return instance.post("/api/PersonalDictionaries/" + id, { id: id });
  },
};
