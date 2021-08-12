import { login } from "../../api";

export const Index = () => {
  return (
    <>
      <button onClick={login}>Click to authenticate</button>
    </>
  );
};
