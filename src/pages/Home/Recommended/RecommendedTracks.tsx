import React, { FC } from "react";
import TrackListItem from "./TrackListItem";

interface Props {
  tracks: Track[];
}

const RecommendedTracks: FC<Props> = ({ tracks }) => {
  return (
    <section>
      <h2>Recommendations</h2>
      <ul>
        {tracks.map((track) => (
          <TrackListItem track={track} key={track.id} />
        ))}
      </ul>
    </section>
  );
};

export default RecommendedTracks;
