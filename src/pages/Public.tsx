import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { SideBar } from '../components';
import Player from '../components/Player';
import Header from '../components/common/Header';
import { RootState } from '../redux/store';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { setModalVip } from '../redux/features/home/homeSlice';
import Scrollbars from 'react-custom-scrollbars-2';

const Public: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { currentSongId } = useAppSelector(
    (state: RootState) => state.rootReducer.music,
  );
  const { isModalVip } = useAppSelector(
    (state: RootState) => state.rootReducer.homeReducer,
  );
  return (
    <div className='max-w-[1600px]   flex flex-col 2xl:mx-auto '>
      <Scrollbars
        className='w-full'
        color='text-white'
        style={{ height: '100vh', width: '100vw' }}
      >
        <div className={` flex  w-full flex-auto  `}>
          <div className=' xl:w-[240px]  fixed h-screen top-0 left-0 '>
            <SideBar />
          </div>
          <div className=' w-full   pl-[70px] xl:pl-[240px]  bg-[#170f23]  '>
            <div className=' sm:px-[45px] h-[70px] px-2  bg-[#170f23] sticky top-0 right-0 z-10 w-[100vw-70px] py-0 flex items-center'>
              <Header />
            </div>
            <div className=' xl:px-[45px] min-h-screen w-full  overflow-y-auto overflow-x-hidden'>
              <Outlet />
            </div>
          </div>
        </div>
      </Scrollbars>
      {currentSongId && (
        <div className='flex-none fixed bottom-0 left-0 right-0  h-[90px] bg-[#130c1c]  '>
          <Player />
        </div>
      )}
      {isModalVip ? (
        <div
          style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          className='z-30  fixed top-0  left-0 justify-center items-center flex right-0 bottom-0 '
        >
          <div className='max-h-full min-h-[176px]  rounded-lg z-40 p-[20px] bg-[#34224f] w-[340px]  flex relative'>
            <div
              onClick={() => dispatch(setModalVip())}
              title='Đóng'
              className='absolute text-white cursor-pointer top-2 right-2'
            >
              <IoMdClose fontSize={'22px'} fontWeight={400} />
            </div>
            <div className=''>
              <h3 className='text-[18px] text-center font-bold text-white'>
                Dành cho tài khoản VIP
              </h3>
              <h3 className='text-[#ffffff80] text-center my-3 text-[15px] font-normal'>
                Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP
                để nghe bài hát này.
              </h3>
              <button className='bg-[#f8e71c] px-[25px] w-full py-2 font-medium text-sm rounded-2xl h-[35px]'>
                NÂNG CẤP VIP
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Public;
