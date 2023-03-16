import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAlbumQuery } from '../redux/apis/Music/MusicApi';
import { useState } from 'react';
import { BsPlayFill, BsPlayCircle } from 'react-icons/bs';
import { RiHeart3Line } from 'react-icons/ri';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { IAlbum } from '../interfaces/music';
import { formattedDateTimeStamp } from '../utils/time';
import { formatNumber, truncateString } from '../utils/string';
import { Lists } from '../components';
import { useAppDispatch } from '../redux/hook';
import { setCurSongId, setPlayed } from '../redux/features/home/musicSlice';
import LoadingImg from '../components/Spinners/LoadingImg';
import LoadingPage from '../components/Spinners/LoadingPage';
type Props = {};

const Album = (props: Props) => {
  const { pid } = useParams();
  const [isHoverAlbum, setIsHoverAlbum] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState<IAlbum>({} as IAlbum);
  const { data, isLoading } = useGetAlbumQuery(pid as string);
  const divRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    data && setPlaylist({ ...data, song: data.song.items });
    divRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [data]);

  return (
    <div className='relative min-h-[80vh] w-full bg-[#170f23]'>
      {isLoading ? (
        <div className='absolute flex justify-center items-center bg-[#170f23]  top-0 left-0 right-0 bottom-0'>
          <LoadingPage width={100} height={100} color='#a254cc' />
        </div>
      ) : (
        <>
          <div ref={divRef} className='h-16'></div>
          <div className=' w-full  mb-[90px] mx-0 sm:mx-2   lg:flex block text-white  h-full bg-[#170f23] '>
            <div className='w-[320px] mt-3 min-w-[200px] sticky top-10 flex-none '>
              <div className='overflow-hidden   lg:w-[300px] hover:opacity-80  rounded-lg cursor-pointer '>
                <div
                  onMouseOver={() => setIsHoverAlbum(true)}
                  onMouseOut={() => setIsHoverAlbum(false)}
                  onClick={() => {
                    dispatch(setCurSongId(playlist.song[0].encodeId)) &&
                      dispatch(setPlayed(true));
                  }}
                  className='relative  lg:w-[300px] xl:h-[300px] '
                >
                  <img
                    src={playlist?.thumbnailM}
                    className={`${
                      isHoverAlbum && 'scale-110 rounded-lg'
                    } transition duration-500 ease-in-out hover:scale-110  w-full sm:w-[200px]  rounded-lg cursor-pointer  lg:w-[300px] xl-h-[300px] object-cover`}
                    alt='img'
                  />
                  {isHoverAlbum && (
                    <div className='absolute rounded-sm flex justify-center items-center bg-[rgba(0,0,0,0.6)] top-0 left-0 right-0 bottom-0'>
                      <BsPlayCircle fontSize={'50px'} />
                    </div>
                  )}
                </div>
              </div>
              {/* content left */}
              <div className='py-3'>
                <h3 className='text-[20px] font-bold text-center'>
                  {playlist?.title}
                </h3>
                <div className='text-[12px] mt-2 text-[#ffffff80] text-center'>
                  <span>Cập nhật: </span>
                  <span>
                    {formattedDateTimeStamp(
                      playlist?.contentLastUpdate as number,
                    )}
                  </span>
                </div>
                <div className='text-[12px] text-[#ffffff80] text-center my-1'>
                  <a href=''>{playlist?.artistsNames}</a>
                </div>
                <div className='text-[12px] text-[#ffffff80] text-center'>
                  <span>{playlist?.like && formatNumber(playlist?.like)}</span>{' '}
                  người yêu thích
                </div>
                {/* action */}
                <div className='flex  flex-col justify-center items-center mt-3 gap-2'>
                  <button
                    onClick={() => {
                      dispatch(setCurSongId(playlist.song[0].encodeId));
                    }}
                    className='bg-[#a254cc] my-1 hover:bg-[#9b4de0] flex justify-center items-center gap-1 rounded-3xl w-[200px] h-[36px]'
                  >
                    <BsPlayFill fontSize={'22px'} color='white' />
                    <span className='text-[14px] font-normal'>
                      PHÁT NGẪU NHIÊN
                    </span>
                  </button>
                  <div className='flex gap-2 w-[80px] '>
                    <div
                      title='Thêm vào thư viện'
                      // onClick={() => setLike(prev => !prev)}
                      className='w-[35px] hover:bg-[#2d2536]  cursor-pointer h-[35px] rounded-full flex items-center bg-[#3a3344] justify-center'
                    >
                      <RiHeart3Line
                        // color={like ? '#c273ed' : 'white'}
                        title='Thêm vào thư viện'
                        fontSize={'20px'}
                      />
                    </div>
                    <div
                      title='Khác'
                      className='w-[35px] cursor-pointer hover:bg-[#2d2536] h-[35px] rounded-full flex items-center bg-[#3a3344] justify-center'
                    >
                      <BiDotsHorizontalRounded
                        title='Xem thêm'
                        fontSize={'23px'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content right */}
            <div className='w-full  flex-auto py-2 '>
              <div className='mb-2 px-2 lg:px-1'>
                <span className='text-[#ffffff80] text-[14px]'>Lời tựa</span>
                <span className='text-[14px] px-2 lg:mx-1'>
                  {truncateString(playlist?.description, 250)}
                </span>
              </div>
              <Lists playlist={playlist?.song} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Album;
