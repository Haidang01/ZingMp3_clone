import React, { useEffect, useRef, useState } from 'react';
import {
  BiDotsHorizontalRounded,
  BsShuffle,
  AiOutlinePauseCircle,
  BsPlayCircle,
  BsMusicNoteList,
  BsVolumeUp,
  FaRegWindowRestore,
  FiRepeat,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlineLibraryMusic,
  RiHeart3Line,
  TbMicrophone2,
} from '../utils/icons';
import { FiVolumeX, FiVolume1 } from 'react-icons/fi';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { RootState } from '../redux/store';
import { useGetSongQuery } from '../redux/apis/Music/MusicApi';
import { useGetUrlSong } from '../hooks';
import { truncateString } from '../utils/string';

import {
  setAlbum,
  setCurSongId,
  setDuration,
  setPlayed,
  setRandom,
  setRepeat,
  setSongHeard,
} from '../redux/features/home/musicSlice';
import { convertTimeSong } from '../utils/time';
import '../assets/styles/player.css';
import LoadingImg from './Spinners/LoadingImg';
import { ISong } from '../interfaces/music';
type Props = {};
interface ICurrSong {
  thumbnail: string;
  artistsNames: string;
  title: string;
}
const Player = (props: Props) => {
  const $ = document.querySelector.bind(document);
  const dispatch = useAppDispatch();
  const audioRel = useRef(new Audio());
  const thumbRel = useRef<HTMLDivElement>(null);

  const [volume, setVolume] = useState<number>(100);
  const [like, setLike] = useState<boolean>(false);
  const [song, setSong] = useState<ICurrSong | null>(null);
  const {
    played,
    isRepeat,
    listSongId,
    listSongHeard,
    isRandom,
    currentSongId,
    duration,
  } = useAppSelector((state: RootState) => state.rootReducer.music);

  useEffect(() => {
    audioRel.current.volume = volume / 100;
  }, [volume]);
  //get info about current song
  const { data, isLoading } = useGetSongQuery(currentSongId, {
    skip: !currentSongId,
  });
  // get src video data
  const [url, playLoading] = useGetUrlSong(currentSongId);

  useEffect(() => {
    data && setSong(data);
    if (currentSongId && !listSongHeard.find(item => item === currentSongId)) {
      dispatch(setSongHeard(currentSongId));
    }
  }, [data]);

  // load the song from the server and save duration in local storage
  useEffect(() => {
    if (url) {
      audioRel.current.src = url[128];
      played &&
        audioRel.current.play().then(() => {
          dispatch(
            setDuration(convertTimeSong(Math.floor(audioRel.current.duration))),
          );
        });
    }
  }, [url]);

  // display duration song
  const timeRightElement = $('.timeRight');
  if (timeRightElement && duration) {
    timeRightElement.innerHTML = duration;
  }
  // handling changes in the current song time
  audioRel.current.ontimeupdate = function () {
    if (!duration) return;
    // display runtime song
    let percent =
      (audioRel.current.currentTime * 100) / audioRel.current.duration;
    if (thumbRel.current) {
      thumbRel.current.style.cssText = `right:${100 - percent}%`;
    }

    // display Current time
    const timeLeftElement = $('.timeLeft');
    if (timeLeftElement) {
      timeLeftElement.innerHTML = convertTimeSong(
        Math.floor(audioRel.current.currentTime),
      );
    }
  };

  // handle audio
  const hanldePause = () => {
    audioRel.current.pause();
    dispatch(setPlayed(!played));
  };
  const hanldePlay = () => {
    audioRel.current.play();
    dispatch(setPlayed(!played));
  };

  // hover audio
  const durationBar = document.querySelector('.duration-bar') as HTMLElement;
  durationBar?.addEventListener('mouseover', () => {
    $('.dot')?.classList.remove('hidden');
    thumbRel.current?.classList.add('h-[4px]');
  });
  // handle click tua video
  durationBar?.addEventListener('click', (event: MouseEvent) => {
    dispatch(setPlayed(true));
    const width = durationBar.offsetWidth; // lấy độ dài của element
    const rect = durationBar.getBoundingClientRect(); //lấy tọa độ của element
    const distance = event.clientX - rect.left; // độ dài từ bên trái đến nơi click
    const clickedPercent = (distance / width) * 100; // tính % theo điểm click
    const duration = audioRel.current.duration;
    audioRel.current.currentTime = (duration / 100) * clickedPercent;

    audioRel.current.play();
  });
  durationBar?.addEventListener('mouseout', () => {
    $('.dot')?.classList.add('hidden');
    thumbRel.current?.classList.remove('h-[4px]');
  });

  // handle next song
  const handleNextSong = () => {
    if (listSongId.length <= 0) return;
    const songIndex = listSongId.findIndex(item => item === currentSongId);
    if (!isRandom) {
      dispatch(setCurSongId(listSongId[songIndex + 1] as string));
    } else {
      let songIndexRandom;
      do {
        songIndexRandom = Math.floor(Math.random() * listSongId.length);
      } while (songIndex === songIndexRandom);
      dispatch(setCurSongId(listSongId[songIndexRandom] as string));
    }
  };
  // handle prev song
  const handlePrevSong = () => {
    audioRel.current.currentTime = 0;
  };
  useEffect(() => {
    audioRel.current.onended = () => {
      if (isRepeat == false) {
        listSongId.length > 0 ? handleNextSong() : dispatch(setPlayed(false));
      } else {
        audioRel.current.play();
      }
    };
  }, [isRepeat]);
  return (
    <div className='h-full flex   border border-[#ffffff1a] text-white px-6 py-2'>
      {/* left */}
      <div className='flex justify-start items-center h-full gap-2 w-[30%]'>
        {isLoading ? (
          <div className='relative'>
            <div className='w-[64px] bg-[#170f23]  h-[64px] rounded-lg object-cover' />
            <div className='absolute top-0 left-0 right-0 bottom-0'>
              <LoadingImg width={10} color='#c273ed' height={10} />
            </div>
          </div>
        ) : (
          <img
            src={data ? data.thumbnail : ''}
            alt=''
            className='w-[64px] relative h-[64px] rounded-lg object-cover'
          />
        )}

        <div className='flex min-w-[120px] flex-col max-w-[216px] xl:w-[180px]'>
          <a href=''>
            <span className='text-[14px] font-[500]'>
              {song?.title && truncateString(song?.title, 22)}
            </span>
          </a>
          <span className='font-[400] text-[12px] text-[#ffffff80]'>
            <a href=''>{song?.artistsNames}</a>
          </span>
        </div>
        <div className='xl:flex hidden gap-2 w-[80px] '>
          <div
            onClick={() => setLike(prev => !prev)}
            className='w-[35px] cursor-pointer h-[35px] rounded-full flex items-center hover:bg-[#3a3344] justify-center'
          >
            <RiHeart3Line
              color={like ? '#c273ed' : 'white'}
              title='Thêm vào thư viện'
              fontSize={'20px'}
            />
          </div>
          <div className='w-[35px] cursor-pointer h-[35px] rounded-full flex items-center hover:bg-[#3a3344] justify-center'>
            <BiDotsHorizontalRounded title='Xem thêm' fontSize={'23px'} />
          </div>
        </div>
      </div>
      {/* center */}
      <div className='flex flex-col h-full justify-center flex-auto p-1'>
        <div className='flex h-full justify-end items-center  gap-5 sm:justify-center'>
          <div
            onClick={() => dispatch(setRandom())}
            className='w-[35px] hidden  cursor-pointer h-[35px] rounded-full sm:flex items-center hover:bg-[#3a3344] justify-center'
          >
            <BsShuffle
              fontSize={'18px'}
              color={isRandom ? '#c273ed' : 'white'}
              title={'Tắt phát ngẫu nhiên'}
            />
          </div>
          <div
            onClick={handlePrevSong}
            className={`${
              listSongId.length > 0 || listSongHeard.length > 1
                ? 'cursor-pointer hover:bg-[#3a3344] '
                : ''
            } w-[35px]   h-[35px] rounded-full flex items-center  justify-center`}
          >
            <MdSkipPrevious
              className={
                listSongId.length > 0 || listSongHeard.length > 1
                  ? 'white'
                  : 'text-[#ffffff4d]'
              }
              fontSize={'20px'}
            />
          </div>
          <div
            title={`${played ? 'Dừng' : 'Phát'}`}
            onClick={() => dispatch(setPlayed(!played))}
            className='play-loading rounded-full'
          >
            {playLoading ? (
              <div className='spinner w-[37px] h-[37px]'></div>
            ) : played ? (
              <AiOutlinePauseCircle
                fontSize={'37px'}
                onClick={hanldePause}
                className='hover:text-[#c273ed] cursor-pointer'
              />
            ) : (
              <BsPlayCircle
                onClick={hanldePlay}
                fontSize={'37px'}
                className='hover:text-[#c273ed] font-[400] cursor-pointer'
              />
            )}
          </div>
          <div
            onClick={handleNextSong}
            className={`w-[35px] ${
              listSongId.length > 0 ? 'cursor-pointer hover:bg-[#3a3344] ' : ''
            } h-[35px] rounded-full  flex items-center  justify-center`}
          >
            <MdSkipNext
              fontSize={'21px'}
              className={listSongId.length > 0 ? 'white' : 'text-[#ffffff4d]'}
            />
          </div>
          <div
            onClick={() => dispatch(setRepeat())}
            className={`${
              isRepeat ? 'text-[#c273ed]' : ''
            } w-[35px] cursor-pointer hidden sm:flex  h-[35px] rounded-full  items-center hover:bg-[#3a3344] justify-center`}
          >
            <FiRepeat
              fontSize={'18px'}
              title={`${isRepeat ? 'Tắt' : 'Bật'} phát lại tất cả`}
            />
          </div>
        </div>
        <div className='xl:flex hidden  h-full mt-2 items-center gap-3 justify-center '>
          <span className='text-[12px] timeLeft font-medium  text-[#ffffff4d] '>
            00:00
          </span>
          <div className=' xl:w-[386px] w-full'>
            <div className='w-full duration-bar flex items-center relative h-[3px] cursor-pointer rounded bg-[#ffffff4d]'>
              <div
                ref={thumbRel}
                className='absolute left-0  bg-white flex justify-end items-center rounded  h-[3px]'
              >
                <span className='rounded-full dot w-[10px] hidden h-[10px] absolute  bg-white'></span>
              </div>
            </div>
          </div>
          <span className='text-[12px] timeRight font-medium'>00:00</span>
        </div>
      </div>
      {/* right */}
      <div className='sm:flex hidden w-[30%] items-center justify-end gap-2'>
        <div className='w-[35px] hidden xl:flex h-[35px] rounded-full  cursor-pointer items-center hover:bg-[#3a3344] justify-center'>
          <MdOutlineLibraryMusic fontSize={'19px'} />
        </div>
        <div className='w-[35px] hidden xl:flex h-[35px] cursor-pointer rounded-full  items-center hover:bg-[#3a3344] justify-center'>
          <TbMicrophone2 title='Xem lời bài hát ' fontSize={'19px'} />
        </div>
        <div className='w-[35px] hidden xl:flex cursor-pointer h-[35px] rounded-full  items-center hover:bg-[#3a3344] justify-center'>
          <FaRegWindowRestore title='Chế độ cửa sổ' fontSize={'19px'} />
        </div>
        <div
          onClick={() => setVolume(prev => (+prev === 0 ? 70 : 0))}
          className='w-[35px] h-[35px] cursor-pointer rounded-full flex items-center hover:bg-[#3a3344] justify-center'
        >
          {volume > 60 ? (
            <BsVolumeUp fontSize={'19px'} />
          ) : volume > 0 ? (
            <FiVolume1 />
          ) : (
            <FiVolumeX />
          )}
        </div>
        <input
          className='h-[3px] w-[70px]  '
          type='range'
          onChange={e => setVolume(+e.target.value)}
          min={0}
          value={volume}
          max={100}
        />
        <div className='h-full flex items-center '>
          <div className='w-[1px] h-[35px] bg-[#474141] mx-[20px]'></div>
        </div>
        <div className='w-[35px] cursor-pointer h-[35px] rounded-full flex items-center hover:bg-[#3a3344] justify-center'>
          <BsMusicNoteList title='Danh sách bài hát' fontSize={'19px'} />
        </div>
      </div>
    </div>
  );
};

export default Player;
