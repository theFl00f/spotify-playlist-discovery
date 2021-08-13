import axios from "axios";
import { getAuthHeaders, MUSIC_BASE_URL } from "../shared";

interface Props {
  token: string;
  seedArtists?: string[];
  seedGenres?: string[];
  seedTracks?: string[];
}

interface RecommendationParams extends Record<string, string> {
  seed_artists: string;
  seed_genres: string;
  seed_tracks: string;
}

type Keys = keyof RecommendationParams;

const appendSeeds = (
  object: RecommendationParams,
  seed: string[] | undefined,
  key: Keys
) => {
  if (seed) {
    object[key] = seed.join(",");
  } else {
    object[key] = "";
  }
};

const getRecommendations = ({
  token,
  seedArtists,
  seedGenres,
  seedTracks,
}: Props) => {
  const paramsInput: RecommendationParams = {
    seed_artists: "",
    seed_genres: "",
    seed_tracks: "",
  };
  appendSeeds(paramsInput, seedArtists, "seed_artists");
  appendSeeds(paramsInput, seedGenres, "seed_genres");
  appendSeeds(paramsInput, seedTracks, "seed_tracks");

  const params = new URLSearchParams(paramsInput);

  return axios.get(
    `${MUSIC_BASE_URL}/v1/recommendations?${params.toString()}`,
    getAuthHeaders(token)
  );
};

export default getRecommendations;
