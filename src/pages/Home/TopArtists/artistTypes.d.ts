interface ArtistImage {
  url: string;
}

interface Artist {
  name: string;
  popularity: number;
  images: ArtistImage[];
  id: string;
  genres: string[];
}
