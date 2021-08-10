import { login } from "../../api/auth";

export const Index = () => {
  return (
    <>
      <button onClick={login}>Click to authenticate</button>
    </>
  );
};
