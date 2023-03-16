import { IArtist, IArtists } from './artist';

export interface IBanner {
  type: number;
  link: string;
  cover: string;
  description: string;
  encodeID: string;
  encodeId?: string;
  ispr: number;
  target: string;
  title: string;
  banner: string;
}
// thể loại
export interface IGenres {
  id: string;
  name: string;
  title: string;
  alias: string;
  link: string;
}
export interface ISong {
  alias: string;
  allowAudioAds?: boolean;
  artists: IArtists[];
  duration?: number;
  encodeId: string;
  title: string;
  thumbnail: string;
  thumbnailM: string;
  hasLyrics?: boolean;
  releaseDate: number;
  link: string;
  artistsNames: string;
  isPrivate: boolean;
  streamingStatus?: number;
}
export interface IAlbum {
  aliasTitle: string;
  artists: IArtists[];
  contentLastUpdate: number;
  description: string;
  distributor: string;
  encodeId: string;
  genreIds: string[];
  genres: IGenres[];
  like: number;
  liked: boolean;
  sectionId: string;
  link: string;
  listen: number;
  textType: string;
  sortDescription: string;
  thumbnail: string;
  uid: number;
  username: string;
  title: string;
  thumbnailM: string;
  artistsNames: string;
  song: ISong[];
}
