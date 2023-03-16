export interface IArtist {
  alias: string;
  cover: string;
  id: string;
  link: string;
  name: string;
  playlistId: string;
  spotlight: boolean;
  thumbnail: string;
}
export interface IArtists extends IArtist {
  isOA: boolean;
  totalFollow: number;
  isOABrand: boolean;
  thumbnailM: string;
}
