import axios from "axios";

const service = axios.create({
  baseURL: "http://192.168.196.149:8000/api/v1/",
  timeout: 10000,
});

service.interceptors.request.use(undefined, (error) => {
  console.log(error);
  return Promise.reject(error);
});

service.interceptors.response.use(undefined, (error) => {
  console.log(error.response.statusText, error.response.data);

  return Promise.reject(error);
});

export const getAllCharacters = () => service.get("allCharacter");

export const getAffiliations = () => service.get("affiliations");

export const getFoods = () => service.get("foods");

export const getNation = () => service.get("nation");

export const getLivingBeings = () => service.get("livingBeings");

export const getMaterials = () => service.get("materials");
