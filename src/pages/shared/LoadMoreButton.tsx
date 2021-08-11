import axios from "axios";
import React, { Dispatch, FC, SetStateAction } from "react";
import { getAuthHeaders } from "../../api/shared";

interface Props {
  url: string;
  setState: Dispatch<SetStateAction<any>>;
  token: string;
  setPrev?: Dispatch<SetStateAction<string | null>>;
}

const LoadMoreButton: FC<Props> = ({
  url,
  setState,
  token,
  setPrev,
  children,
}) => {
  const handleClick = async () => {
    const response = await axios.get(url, { headers: getAuthHeaders(token) });
    setState(response.data.items);
    setPrev && setPrev(response.data.previous);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default LoadMoreButton;
