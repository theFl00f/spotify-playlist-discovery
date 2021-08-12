import React, { useCallback, useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { ensureAccessToken, getTopArtists, TimeRange, getMe } from "../../api";
import sortGenres from "../../util/sortGenres";
import { TopArtists } from "./TopArtists";
import { UserProfile } from "./UserProfile";

export const Home = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState(null);
  const [topArtists, setTopArtists] = useState<Artist[] | null>(null);
  const [nextTopArtistsURL, setNextTopArtistsURL] = useState<string | null>(
    null
  );
  const [previousTopArtistsURL, setPreviousTopArtistsURL] = useState<
    string | null
  >(null);
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.MEDIUM);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userGenres, setUserGenres] = useState<Set<string> | null>(null);

  const location = useLocation();

  const fetchMe = useCallback(async () => {
    setIsAuthenticated(null);
    const token = ensureAccessToken(accessToken);
    try {
      const response = await getMe(token);
      setUserProfile(response.data);
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
      setIsAuthenticated(false);
    }
  }, [accessToken]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const fetchTopArtists = useCallback(async () => {
    const token = ensureAccessToken(accessToken);

    try {
      const response = await getTopArtists(token, timeRange);
      setTopArtists(response.data.items);
      setNextTopArtistsURL(response.data.next);

      const genres = response.data.items
        .map((item: Artist) => item.genres)
        .flat(Infinity);

      sortGenres(genres);
      setUserGenres(genres);
    } catch (e) {
      console.log(e);
    }
  }, [accessToken, timeRange]);

  useEffect(() => {
    fetchTopArtists();
  }, [fetchTopArtists]);

  if (location.hash) {
    const params = new URLSearchParams(location.hash.replace(/#/g, "?"));
    const { access_token } = Object.fromEntries(params.entries());
    if (access_token && access_token !== accessToken) {
      setAccessToken(access_token);
    }
  }

  if (isAuthenticated !== null && !isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Home</h1>
      {accessToken && (
        <>
          <p>Authenticated</p>
          {userProfile && <UserProfile user={userProfile} />}
          {!!topArtists && (
            <TopArtists
              artists={topArtists}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
              previousTopArtistsURL={previousTopArtistsURL}
              nextTopArtistsURL={nextTopArtistsURL}
              setTopArtists={setTopArtists}
              setNextTopArtistsURL={setNextTopArtistsURL}
              token={accessToken}
              setPreviousTopArtistsURL={setPreviousTopArtistsURL}
            />
          )}
        </>
      )}
    </>
  );
};
