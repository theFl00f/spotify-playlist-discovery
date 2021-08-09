import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMe } from "../../api/auth/";
import { ensureAccessToken } from "../../api/shared";
import { getTopArtists } from "../../api/top-music";
import { TopArtists } from "./TopArtists";
import { UserProfile } from "./UserProfile";

export const Home = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState(null);
  const [topArtists, setTopArtists] = useState<Artist[] | null>(null);

  const location = useLocation();

  const fetchMe = useCallback(async () => {
    const token = ensureAccessToken(accessToken);
    try {
      const response = await getMe(token);
      setUserProfile(response.data);
    } catch (e) {
      console.log(e);
    }
  }, [accessToken]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const fetchTopArtists = useCallback(async () => {
    const token = ensureAccessToken(accessToken);
    try {
      const response = await getTopArtists(token);
      console.log(response.data.items);
      setTopArtists(response.data.items);
    } catch (e) {
      console.log(e);
    }
  }, [accessToken]);

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

  return (
    <div>
      <h1>Home</h1>
      {accessToken && <p>Authenticated</p>}
      {userProfile && <UserProfile user={userProfile} />}
      {!!topArtists && <TopArtists artists={topArtists} />}
    </div>
  );
};
