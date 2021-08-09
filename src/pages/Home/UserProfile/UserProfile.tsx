import React, { FC } from "react";

interface Props {
  user: {
    display_name: string;
  } | null;
}

const UserProfile: FC<Props> = ({ user }) => {
  if (!user) {
    return <p>No user found</p>;
  }
  return (
    <div>
      <p>Name: {user.display_name}</p>
    </div>
  );
};

export default UserProfile;
