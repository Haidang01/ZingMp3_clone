import {
  useGetMusicQuery,
  useGetSongQuery,
} from '../redux/apis/Music/MusicApi';

export const useGetUrlSong = (id: string) => {
  const { data, isFetching } = useGetMusicQuery(id, { skip: !id });

  return [data, isFetching];
};
