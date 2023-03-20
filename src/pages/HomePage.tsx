import React, { useEffect } from 'react';

import { useGetSongsQuery } from '../redux/apis/Music/MusicApi';
import { getHomes } from '../redux/features/home/homeSlice';
import { useAppDispatch } from '../redux/hook';
import Sliders from '../components/Slider';
import { NewLease, Section } from '../components';
import { useState } from 'react';
import ChooseToday from '../components/section/chooseToday/ChooseToday';
import { ILivestream, IWeekChartItem } from '../interfaces/sections';
import Radio from '../components/section/radio/Radio';
import EveryDay from '../components/section/everyday/EveryDay';
import WeekChart from '../components/section/weekChart/WeekChart';
import NewSong from '../components/section/newSong/NewSong';
import PartnerSection from '../components/section/PartnerSection';
import {
  IArtistSection,
  INewRelease,
  ISongTodaySection,
} from '../interfaces/sections';
import LoadingPage from '../components/Spinners/LoadingPage';

const HomePage: React.FC = () => {
  const [playListArtist, setPlayListArtist] = useState<IArtistSection | null>(
    null,
  );
  const [newLease, setNewLease] = useState<INewRelease | null>(null);
  const [songToday, setSongToday] = useState<ISongTodaySection | null>(null);
  const [artistHot, setArtistHot] = useState<IArtistSection | null>(null);
  const [liveStream, setLiveStream] = useState<ILivestream | null>(null);
  const [newEverday, setNewEveryday] = useState<IArtistSection | null>(null);
  const [weekChart, setWeedChart] = useState<IWeekChartItem[]>([]);
  const [newSong, setNewSong] = useState<IArtistSection | null>(null);
  const [Top100, setTop100] = useState<IArtistSection | null>(null);
  const { data, isLoading } = useGetSongsQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      console.log(data);

      const song = data[0].items;
      dispatch(getHomes(song));
      setPlayListArtist(data[4]);
      setNewLease(data[3]);
      setSongToday(data[5]);
      setArtistHot(data[6]);
      setLiveStream(data[7]);
      setNewEveryday(data[8]);
      setWeedChart(data[10].items);
      setTop100(data[12]);
      setNewSong(data[14]);
    }
  }, [data]);

  return (
    <div className='relative min-h-[80vh] w-full bg-[#170f23]'>
      {isLoading ? (
        <div className='absolute flex justify-center items-center bg-[rgba(0,0,0,0.6)] top-0 left-0 right-0 bottom-0'>
          <LoadingPage width={100} height={100} color='#a254cc' />
        </div>
      ) : (
        <div className=' w-full h-full pb-24 bg-[#170f23] '>
          {/* ===========Slider============= */}
          <div className='bg-[#170f23] w-full'>
            <Sliders />
          </div>
          {/* ============= nghệ sĩ========== */}
          <section>
            <Section title={'artist'} playList={playListArtist} />
          </section>
          {/* =========== Mới phát hành ============ */}
          <section>
            <NewLease data={newLease} />
          </section>
          {/* ==========lựa chọn hôm nay========= */}
          <section>
            {' '}
            <ChooseToday playList={songToday} />
          </section>
          {/* ===========nghệ sĩ nổi bật========== */}
          <section className='mt-12'>
            <Section title={'artistHot'} playList={artistHot} />
          </section>
          {/* ==========Radio============= */}
          {/* =======nhạc mới mỗi ngày====== */}
          <section className='mt-10'>
            {/* <EveryDay playList={newEverday} /> */}
          </section>
          {/* =========Week Chart========== */}
          <section className='mt-10'>
            <WeekChart chart={weekChart} />
          </section>
          {/* ===========top 100======== */}
          <section className='mt-10'>
            {/* <EveryDay playList={Top100} /> */}
          </section>
          {/* ===========Nhạc mới======== */}
          <section className='mt-10 w-full'>
            {/* <NewSong playList={newSong} /> */}
          </section>
          {/* =======partner========== */}
          <section>{/* <PartnerSection /> */}</section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
