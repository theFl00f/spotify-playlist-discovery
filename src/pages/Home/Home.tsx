import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMe } from "../../api/auth/getMe";

export const Home = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const location = useLocation();

  const fetchMe = useCallback(async () => {
    if (!accessToken) {
      throw new Error("Access token was not provided");
    }
    try {
      const response = await getMe(accessToken);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }, [accessToken]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  if (location.hash) {
    const params = new URLSearchParams(location.hash.replace(/#/g, "?"));
    const { access_token } = Object.fromEntries(params.entries());
    if (access_token && !accessToken) {
      setAccessToken(access_token);
    }
  }

  return (
    <div>
      <h1>Home</h1>
      {accessToken && <p>Authenticated</p>}
    </div>
  );
};
