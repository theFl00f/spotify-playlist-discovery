import axios from "axios";
import { getAuthHeaders, MUSIC_BASE_URL } from "../shared";

const getRecommendationGenres = (token: string) => {
  return axios.get(
    `${MUSIC_BASE_URL}/v1/recommendations/available-genre-seeds`,
    getAuthHeaders(token)
  );
};

export default getRecommendationGenres;
