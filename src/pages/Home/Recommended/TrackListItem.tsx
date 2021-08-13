import React, { FC } from "react";

interface Props {
  track: Track;
}

const TrackListItem: FC<Props> = ({ track }) => {
  const { artists, album, name, popularity, external_urls } = track;
  return (
    <li>
      <img
        src={album.images[1].url}
        alt={`album artwork for ${album.name} by ${album.artists[0].name}`}
      />
      <p>
        {name} ({popularity})
      </p>
      <p>Artist(s): {artists.map((artist) => artist.name).join(", ")}</p>
      <p>Album: {album.name}</p>
      <a href={external_urls.spotify}>{external_urls.spotify}</a>
    </li>
  );
};

export default TrackListItem;
