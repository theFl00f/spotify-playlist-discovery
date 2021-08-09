import React, { FC } from "react";
import ArtistItem from "./ArtistItem";

interface Props {
  artists: Artist[];
}

const TopArtists: FC<Props> = ({ artists }) => {
  return (
    <div>
      {artists.map((artist) => (
        <ArtistItem artist={artist} key={artist.id} />
      ))}
    </div>
  );
};

export default TopArtists;
