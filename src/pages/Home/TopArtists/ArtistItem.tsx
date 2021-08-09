import React, { FC } from "react";

interface Props {
  artist: Artist;
}

const ArtistItem: FC<Props> = ({ artist }) => {
  const { name, popularity, genres, images } = artist;
  const { url: imgSrc } = images[0];
  return (
    <div>
      <h2>
        {name} - {popularity}
      </h2>
      <small>{genres.join(", ")}</small>
      <img src={imgSrc} alt={`The musical artist ${name}`} />
    </div>
  );
};
export default ArtistItem;
