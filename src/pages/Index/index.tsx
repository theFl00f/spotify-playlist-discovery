import { login } from "../../api/auth/login";

export const Index = () => {
  return (
    <div>
      <button onClick={login}>Click to authenticate</button>
    </div>
  );
};
