interface SpotifyImage {
  url: string;
}

interface Artist {
  name: string;
  popularity: number;
  images: SpotifyImage[];
  id: string;
  genres: string[];
}

interface Album {
  artists: Artist[];
  images: SpotifyImage[];
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
}

interface Track {
  artists: Artist[];
  album: Album;
  id: string;
  name: string;
  href: string;
  popularity: number;
  external_urls: {
    spotify: string;
  };
}
