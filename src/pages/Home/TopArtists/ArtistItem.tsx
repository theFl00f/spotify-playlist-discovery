import React, { FC } from "react";
import styled from "styled-components";
import { mediaQuery, ScreenSize } from "../../../util";

interface Props {
  artist: Artist;
}

const Artist = styled.article`
  display: flex;
  gap: 1rem;

  h2 {
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  flex-basis: 25%;
  max-height: 8rem;
  max-width: 8rem;

  min-height: 4.4rem;
  min-width: 4.4rem;

  ${mediaQuery(ScreenSize.SM, `flex-basis: ${100 / 3}%;`)}

  img {
    object-fit: cover;
    aspect-ratio: 1 / 1;
    width: 100%;
  }
`;

const TextContainer = styled.section`
  flex-basis: 75%;
  ${mediaQuery(ScreenSize.SM, `flex-basis: ${(100 / 3) * 2}%`)}
`;

const ArtistItem: FC<Props> = ({ artist }) => {
  const { name, popularity, genres, images } = artist;
  const { url: imgSrc } = images[1];
  return (
    <li>
      <Artist>
        <ImageContainer>
          <img src={imgSrc} alt={`The musical artist ${name}`} />
        </ImageContainer>
        <TextContainer>
          <h2>
            {name} ({popularity})
          </h2>
          <small>{genres.join(", ")}</small>
        </TextContainer>
      </Artist>
    </li>
  );
};

export default ArtistItem;
