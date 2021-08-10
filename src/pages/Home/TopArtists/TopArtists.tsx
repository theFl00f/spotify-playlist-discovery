import React, { FC } from "react";
import styled from "styled-components";
import ArtistItem from "./ArtistItem";

interface Props {
  artists: Artist[];
}

const ArtistList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const TopArtists: FC<Props> = ({ artists }) => {
  return (
    <ArtistList>
      {artists.map((artist) => (
        <ArtistItem artist={artist} key={artist.id} />
      ))}
    </ArtistList>
  );
};

export default TopArtists;
