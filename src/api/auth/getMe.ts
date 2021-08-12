import axios from "axios";
import { MUSIC_BASE_URL, getAuthHeaders } from "../shared";

const getMe = async (token: string) => {
  return axios.get(`${MUSIC_BASE_URL}/v1/me`, getAuthHeaders(token));
};
export default getMe;
