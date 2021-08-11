import axios from "axios";
import { getAuthHeaders, MUSIC_BASE_URL } from "../shared";

export enum TimeRange {
  SHORT = "short_term",
  MEDIUM = "medium_term",
  LONG = "long_term",
}

const getTopArtists = (
  token: string,
  timeRange: TimeRange | undefined = TimeRange.MEDIUM
) => {
  const params = new URLSearchParams([["time_range", timeRange]]);
  return axios.get(`${MUSIC_BASE_URL}/v1/me/top/artists?${params}`, {
    headers: getAuthHeaders(token),
  });
};

export default getTopArtists;
