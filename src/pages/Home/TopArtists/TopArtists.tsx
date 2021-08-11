import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { TimeRange } from "../../../api/top-music";
import LoadMoreButton from "../../shared/LoadMoreButton";
import ArtistItem from "./ArtistItem";
import TopArtistTimeRangeForm from "./TopArtistTimeRangeForm";

interface Props {
  artists: Artist[];
  timeRange: TimeRange;
  setTimeRange: Dispatch<SetStateAction<TimeRange>>;
  nextTopArtistsURL: string | null;
  previousTopArtistsURL: string | null;
  setTopArtists: Dispatch<SetStateAction<Artist[] | null>>;
  setNextTopArtistsURL: Dispatch<SetStateAction<string | null>>;
  setPreviousTopArtistsURL: Dispatch<SetStateAction<string | null>>;

  token: string;
}

const ArtistList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const TopArtists: FC<Props> = ({
  artists,
  timeRange,
  setTimeRange,
  nextTopArtistsURL,
  previousTopArtistsURL,
  setTopArtists,
  setNextTopArtistsURL,
  setPreviousTopArtistsURL,
  token,
}) => {
  return (
    <>
      <TopArtistTimeRangeForm
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        setNextTopArtistsURL={setNextTopArtistsURL}
        setPreviousTopArtistsURL={setPreviousTopArtistsURL}
      />
      <ArtistList>
        {artists.map((artist) => (
          <ArtistItem artist={artist} key={artist.id} />
        ))}
      </ArtistList>
      {previousTopArtistsURL && (
        <LoadMoreButton
          url={previousTopArtistsURL}
          setState={setTopArtists}
          token={token}
          setPrev={setPreviousTopArtistsURL}
        >
          Previous
        </LoadMoreButton>
      )}
      {nextTopArtistsURL && (
        <LoadMoreButton
          url={nextTopArtistsURL}
          setState={setTopArtists}
          token={token}
          setPrev={setPreviousTopArtistsURL}
        >
          Next
        </LoadMoreButton>
      )}
    </>
  );
};

export default TopArtists;
