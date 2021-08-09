const ensureAccessToken = (token: string | null) => {
  if (!token) {
    throw new Error("Access token was not provided");
  } else return token;
};

export default ensureAccessToken;
