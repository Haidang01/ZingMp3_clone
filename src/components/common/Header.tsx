import React from 'react';
import { BsArrowLeft, BsArrowRight, BsSearch } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

import chude from '../../assets/imgs/chude.png';
import vip from '../../assets/imgs/vip.png';

const Header: React.FC = () => {
  return (
    <div className='w-full   text-white h-full flex gap-1 items-center justify-between'>
      {/* left */}
      <div className='flex-1  flex'>
        <button className='cursor-pointer hidden md:block'>
          <BsArrowLeft className='w-[44px] h-[24px] text-[#56515f]' />
        </button>
        <button className='cursor-pointer hidden md:block'>
          <BsArrowRight className='w-[44px] h-[24px] text-[#56515f]' />
        </button>
        <form
          action=''
          className='max-w-[400px] sm:w-[350px] xl:w-[430px] mx-3 '
        >
          <div className='bg-[#30283a] h-[40px] rounded-3xl w-full xl:w-[410px] flex'>
            <button className='h-full px-3'>
              <BsSearch fontSize={'19px'} className='hover:text-gray-300 ' />
            </button>
            <input
              type='text'
              placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
              className='bg-transparent hidden sm:block w-full text-[15px] outline-none text-white'
            />
            <input
              type='text'
              placeholder='Tìm kiếm ...'
              className='bg-transparent sm:hidden w-full text-[15px] outline-none text-white'
            />
          </div>
        </form>
      </div>
      {/* right */}
      <div className=' justify-center flex gap-1 xl:gap-3'>
        <div className='xl:flex hidden  cursor-pointer hover:text-[#9b4de0] bg-[#30283a] text-[#c273ed] w-[190px] h-[40px] rounded-3xl text-[14px]  items-center py-[10px] px-[24px] gap-1'>
          <i className='icon'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path
                d='M17.4966 13.4203V13.6633C17.4966 14.5857 16.7489 15.3333 15.8266 15.3333H4.16658C3.24427 15.3333 2.49658 14.5857 2.49658 13.6633V5.00334C2.49658 4.08103 3.24427 3.33334 4.16658 3.33334H9.99658'
                stroke='currentColor'
                strokeLinecap='round'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.4979 11.6247C14.4103 11.7021 14.2955 11.7493 14.1696 11.75C14.1687 11.75 14.1678 11.75 14.1668 11.75C14.1659 11.75 14.165 11.75 14.1641 11.75C14.0382 11.7493 13.9233 11.7021 13.8358 11.6247L10.5043 8.70963C10.2964 8.52779 10.2754 8.21191 10.4572 8.00409C10.6391 7.79627 10.9549 7.77521 11.1628 7.95705L13.6668 10.1481V3.33334C13.6668 3.0572 13.8907 2.83334 14.1668 2.83334C14.443 2.83334 14.6668 3.0572 14.6668 3.33334V10.1481L17.1709 7.95705C17.3787 7.77521 17.6946 7.79627 17.8765 8.00409C18.0583 8.21191 18.0372 8.52779 17.8294 8.70963L14.4979 11.6247Z'
                fill='currentColor'
              ></path>
              <path
                d='M6 16.8333H14'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </svg>
          </i>
          <span className='font-[700]'>Tải bản Windows</span>
        </div>
        <div
          title='Chủ đề'
          className='w-[40px]   hover:bg-[#2d2536] cursor-pointer filter-[.9] h-[40px] py-0 px-2 bg-[#30283a] rounded-full justify-center xl:flex items-center'
        >
          <img
            src={chude}
            className='w-[23px] h-[24px] mt-2 xl:mt-0'
            alt='chude'
          />
        </div>
        <div
          title='Nâng cấp VIP'
          className='w-[40px] cursor-pointer hover:bg-[#2d2536] h-[40px] px-2 bg-[#30283a] rounded-full justify-center flex items-center'
        >
          <img src={vip} className='w-[23px] h-[24px]' alt='chude' />
        </div>
        <div
          title='Cài đặt'
          className='w-[40px] hover:bg-[#2d2536] cursor-pointer h-[40px] px-2 bg-[#30283a] rounded-full justify-center flex items-center'
        >
          <FiSettings />
        </div>
        <img
          className='w-[40px] cursor-pointer h-[40px] object-cover  rounded-full '
          src={
            'https://s120.avatar.talk.zdn.vn/7/b/1/0/3/120/216d297c4869ee1f86a6cccd66a15dd4.jpg'
          }
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
