import axios from "axios";
import { getAuthHeaders, MUSIC_BASE_URL } from "../shared";

const getTopArtists = (token: string) => {
  const params = new URLSearchParams([["time_range", "short_term"]]);
  return axios.get(`${MUSIC_BASE_URL}/v1/me/top/artists?${params}`, {
    headers: getAuthHeaders(token),
  });
};

export default getTopArtists;
