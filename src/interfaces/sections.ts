import { IArtists } from './artist';
import { ISong, IAlbum } from './music';

interface ISection {
  itemType?: string;
  link?: string;
  pageType?: string;
  sectionId?: string;
  sectionType: string;
  title?: string;
  viewType?: string;
}
export interface IArtistSectionItem {
  artists: IArtists[];
  artistsNames: string;
  encodeId: string;
  link: string;
  sortDescription: string;
  thumbnail: string;
  thumbnailM: string;
  title: string;
  releaseDate?: number;
}

export interface INewReleaseItem {
  all: ISong[];
  others: ISong[];
  vPop: ISong[];
}

export interface IArtistSection extends ISection {
  items: IArtistSectionItem[];
}

export interface INewRelease extends ISection {
  items: INewReleaseItem;
}
export interface ISongTodaySection extends ISection {
  items: IAlbum[];
}

/////////////////////////////////////////////////
export interface IHostLivestream {
  encodeId: string;
  link: string;
  name: string;
  thumbnail: string;
}
export interface IProgram {
  thumbnail: string;
  encodeId: string;
  endTime: number;
  hasSongRequest: boolean;
  startTime: number;
  title: string;
}

export interface ILivestreamItem {
  activeUsers: number;
  encodeId: string;
  id: number;
  link: string;
  status: number;
  host: IHostLivestream;
  program: IProgram;
  streaming: string;
  thumbnail: string;
  thumbnailH: string;
  thumbnailM: string;
  title: string;
  type: string;
}
export interface ILivestream extends ISection {
  items: ILivestreamItem[];
}

// ==============================
export interface IGroup {
  id: number;
  link: string;
  name: string;
  type: string;
}
export interface IWeekChartItem {
  banner: string;
  country: string;
  cover: string;
  endDate: string;
  link: string;
  startDate: string;
  type: string;
  group: IGroup[];
}
