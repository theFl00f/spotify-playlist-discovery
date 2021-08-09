import { ACCOUNTS_BASE_URL } from "../shared/CONSTANTS";

const login = () => {
  if (!process.env.REACT_APP_CLIENT_ID || !process.env.REACT_APP_BASE_URL) {
    throw new Error(
      "Missing env variables. Check REACT_APP_CLIENT_ID and REACT_APP_CLIENT_SECRET"
    );
  }
  const loginParams = new URLSearchParams([
    ["client_id", process.env.REACT_APP_CLIENT_ID],
    ["response_type", "token"],
    ["redirect_uri", `${process.env.REACT_APP_BASE_URL}/home`],
    ["scope", "user-library-read user-top-read"],
  ]);

  window.location.assign(
    `${ACCOUNTS_BASE_URL}/authorize?${loginParams.toString()}`
  );
};

export default login;
