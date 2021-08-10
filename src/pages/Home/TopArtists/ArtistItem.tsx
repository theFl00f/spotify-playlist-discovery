import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  artist: Artist;
}

const Artist = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 1rem;

  h2 {
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const ArtistItem: FC<Props> = ({ artist }) => {
  const { name, popularity, genres, images } = artist;
  const { url: imgSrc } = images[1];
  return (
    <Artist>
      <ImageContainer>
        <img src={imgSrc} alt={`The musical artist ${name}`} />
      </ImageContainer>
      <section>
        <h2>
          {name} ({popularity})
        </h2>
        <small>{genres.join(", ")}</small>
      </section>
    </Artist>
  );
};

export default ArtistItem;
