import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';

import logo from '../../assets/imgs/logo-mp3.svg';
import { SideBarMenu, SideBarMenu2 } from '../../data/menuSidebar';

const noActive =
  'text-white hover:bg-[#3a3344] cursor-pointer font-[700] flex justify-center lg:justify-start items-center gap-2  py-[9px] lg:px-[30px]';
const active =
  'text-white bg-[#3a3344] border-l-[3px] rounded-sm border-[#9b4de0]  cursor-pointer font-[700] flex justify-center lg:justify-start items-center gap-2 py-[9px] lg:px-[30px]';
const SideBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-[#231b2e] w-[70px] lg:w-[240px]  max-h-screen h-full '>
      <div className='py-4 block lg:hidden'>
        <div className='w-full flex justify-center '>
          <img
            onClick={() => navigate('')}
            src='	https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.11/static/media/icon_zing_mp3_60.f6b51045.svg'
            alt=''
            className='w-[45px] cursor-pointer  h-[45px] object-cover'
          />
        </div>
        {/* nav */}
        <nav className='my-3'>
          <ul>
            {SideBarMenu.map(menu => (
              <li key={menu.text} className='text-while   '>
                <NavLink
                  className={nav => (nav.isActive ? active : noActive)}
                  to={menu.path}
                >
                  <menu.icon fontSize={20} />
                  {menu.img && (
                    <img src={menu.img} className='hidden lg:block' alt='' />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <hr className='w-[80%] border-[#ffffff1a] mx-auto' />
        <nav className='mt-3'>
          <ul className=''>
            {SideBarMenu2.map(menu => (
              <li key={menu.text} className='text-while   '>
                <NavLink
                  className={nav => (nav.isActive ? active : noActive)}
                  to={menu.path}
                >
                  <menu.icon className='w-[20px] h-[20px]' />
                  {menu.img && <img src={menu.img} alt='' />}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Thư viện */}
          <div className='mt-[20px]'>
            <hr className='w-[80%] border-[#ffffff1a] mx-auto' />
            <div className='text-white p-3 hidden font-bold'>Thư viện</div>
            <ul className='mt-[10px]'>
              <li className='text-while   '>
                <NavLink
                  className={nav => (nav.isActive ? active : noActive)}
                  to={''}
                >
                  <div>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0.430334 5.95266C1.10691 2.67954 3.18858 0.856514 6.43569 0.305758C8.83604 -0.101252 11.2373 -0.106392 13.6335 0.31721C16.9769 0.908197 18.9867 2.83753 19.627 6.16013C20.1217 8.72802 20.1295 11.3232 19.6193 13.8886C18.9348 17.1391 16.7994 19.1455 13.5643 19.6942C11.164 20.1013 8.76274 20.1064 6.36648 19.6828C3.0231 19.0918 1.00434 17.0661 0.364051 13.7436C-0.155819 11.1588 -0.105778 8.54713 0.430334 5.95266Z'
                        fill='url(#paint0_linear_2129_5112)'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M3.20436 7.02377C3 7.42485 3 7.9499 3 9V13C3 14.0501 3 14.5751 3.20436 14.9762C3.38413 15.329 3.67096 15.6159 4.02377 15.7956C4.42485 16 4.9499 16 6 16H14C15.0501 16 15.5751 16 15.9762 15.7956C16.329 15.6159 16.6159 15.329 16.7956 14.9762C17 14.5751 17 14.0501 17 13V9C17 7.9499 17 7.42485 16.7956 7.02377C16.6159 6.67096 16.329 6.38413 15.9762 6.20436C15.5751 6 15.0501 6 14 6H6C4.9499 6 4.42485 6 4.02377 6.20436C3.67096 6.38413 3.38413 6.67096 3.20436 7.02377ZM10.652 7.37915L10.72 7.38363L10.7975 7.40033L10.8617 7.42339L10.8814 7.43245C11.5144 7.73961 12.0967 8.14198 12.6076 8.62357C12.6925 8.70332 12.7757 8.78572 12.8574 8.87091C13.0533 9.07514 13.0465 9.39948 12.8423 9.59534C12.6381 9.79121 12.3137 9.78443 12.1179 9.58021C12.0484 9.50781 11.9779 9.43797 11.9054 9.36987C11.6745 9.15219 11.4267 8.95363 11.1646 8.77614L11.1643 12.6949L11.1643 12.6966C11.1634 13.8631 10.2175 14.8084 9.05082 14.8084C7.88356 14.8084 6.93732 13.8622 6.93732 12.6949C6.93732 11.5277 7.88356 10.5814 9.05082 10.5814C9.44907 10.5814 9.8216 10.6916 10.1396 10.8831V7.89151C10.1396 7.60854 10.369 7.37915 10.652 7.37915Z'
                        fill='url(#paint1_linear_2129_5112)'
                      ></path>
                      <path
                        d='M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5H5Z'
                        fill='white'
                        fillOpacity='0.9'
                      ></path>
                      <defs>
                        <linearGradient
                          id='paint0_linear_2129_5112'
                          x1='0'
                          y1='0'
                          x2='0'
                          y2='20'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#3CA2FF'></stop>
                          <stop offset='1' stopColor='#008FFF'></stop>
                        </linearGradient>
                        <linearGradient
                          id='paint1_linear_2129_5112'
                          x1='6.12791'
                          y1='10.6969'
                          x2='6.12791'
                          y2='15.625'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='white'></stop>
                          <stop
                            offset='1'
                            stopColor='white'
                            stopOpacity='0.9'
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </NavLink>
              </li>
              <li className='text-while   '>
                <NavLink
                  className={nav => (nav.isActive ? active : noActive)}
                  to={''}
                >
                  <div>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                      <g clipPath='url(#clip0_2130_5116)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M0.430017 5.95247C1.10668 2.67914 3.18835 0.856636 6.43585 0.305803C8.83585 -0.101697 11.2375 -0.106697 13.6334 0.317469C16.9767 0.908302 18.9867 2.83747 19.6267 6.15997C20.1217 8.7283 20.1292 11.3233 19.6192 13.8883C18.935 17.1383 16.7992 19.1458 13.5642 19.6941C11.1642 20.1016 8.76252 20.1066 6.36668 19.6825C3.02335 19.0916 1.00418 17.0658 0.364184 13.7433C-0.155816 11.1583 -0.105816 8.54747 0.43085 5.95247H0.430017Z'
                          fill='url(#paint0_linear_2130_5116)'
                        ></path>
                        <path
                          d='M11.25 8.61506H15.4167M11.25 11.6476H15.4167M5 14.5833H15.4167'
                          stroke='white'
                          strokeWidth='1.25'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M8.98835 3.35412C8.94419 3.34078 8.89669 3.33328 8.84919 3.33328C8.58585 3.33328 8.37252 3.55162 8.37252 3.82078V7.80578C7.92919 7.43912 7.36419 7.21912 6.74919 7.21912C5.32252 7.21912 4.16669 8.40162 4.16669 9.85912C4.16669 11.3174 5.32252 12.4999 6.74919 12.4999C8.17502 12.4999 9.33169 11.3174 9.33169 9.85912C9.33169 9.79745 9.32919 9.73662 9.32585 9.67578L9.32669 4.64245C9.77169 4.92245 10.1875 5.24912 10.5684 5.61662C10.6634 5.70745 10.7559 5.79995 10.8467 5.89745C11.0284 6.09162 11.33 6.09745 11.52 5.91162C11.71 5.72578 11.7159 5.41745 11.5342 5.22328C11.4317 5.11412 11.3284 5.00912 11.2217 4.90662C10.5834 4.29162 9.85502 3.77745 9.06419 3.38495L8.98835 3.35412Z'
                          fill='white'
                        ></path>
                      </g>
                      <defs>
                        <linearGradient
                          id='paint0_linear_2130_5116'
                          x1='9.99993'
                          y1='-0.000244141'
                          x2='9.99993'
                          y2='20.0002'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#9FD465'></stop>
                          <stop offset='1' stopColor='#70B129'></stop>
                        </linearGradient>
                        <clipPath id='clip0_2130_5116'>
                          <rect width='20' height='20' fill='white'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </NavLink>
              </li>
              <li className='text-while   '>
                <NavLink
                  className={nav => (nav.isActive ? active : noActive)}
                  to={''}
                >
                  <div>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                      <g clipPath='url(#clip0_2131_5195)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M0.429773 5.95247C1.10644 2.67914 3.18811 0.856636 6.43561 0.305803C8.83561 -0.101697 11.2373 -0.106697 13.6331 0.317469C16.9764 0.908302 18.9864 2.83747 19.6264 6.15997C20.1214 8.7283 20.1289 11.3233 19.6189 13.8883C18.9348 17.1383 16.7989 19.1458 13.5639 19.6941C11.1639 20.1016 8.76227 20.1066 6.36644 19.6825C3.02311 19.0916 1.00394 17.0658 0.363939 13.7433C-0.156061 11.1583 -0.106061 8.54747 0.430606 5.95247H0.429773Z'
                          fill='url(#paint0_linear_2131_5195)'
                        ></path>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M16.9998 10C16.9998 13.866 13.8657 17 9.99976 17C6.13376 17 2.99976 13.866 2.99976 10C2.99976 6.13401 6.13376 3 9.99976 3C13.8657 3 16.9998 6.13401 16.9998 10ZM9.99975 5.25C10.414 5.25 10.7498 5.58579 10.7498 6V9.567L14.2718 11.6005C14.6306 11.8076 14.7535 12.2663 14.5464 12.625C14.3393 12.9837 13.8806 13.1066 13.5218 12.8995L9.63675 10.6565C9.61258 10.6431 9.58924 10.6284 9.5668 10.6125C9.47324 10.5465 9.39882 10.4621 9.34564 10.3672C9.29764 10.2819 9.26585 10.1862 9.25445 10.0844C9.25068 10.0514 9.2491 10.018 9.24975 9.98457V6C9.24975 5.58579 9.58554 5.25 9.99975 5.25Z'
                          fill='white'
                        ></path>
                      </g>
                      <defs>
                        <linearGradient
                          id='paint0_linear_2131_5195'
                          x1='9.99969'
                          y1='-0.000244141'
                          x2='9.99969'
                          y2='20.0002'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#FFD677'></stop>
                          <stop offset='1' stopColor='#F7AA45'></stop>
                        </linearGradient>
                        <clipPath id='clip0_2131_5195'>
                          <rect
                            width='20'
                            height='20'
                            fill='white'
                            transform='translate(-0.000244141)'
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className='hidden lg:block'>
        {/* logo */}
        <div className='h-[70px]  w-full flex items-center py-0 px-[28px]'>
          <img
            onClick={() => navigate('/')}
            src={logo}
            alt='logo'
            className='w-[120px]  cursor-pointer h-[40px]'
          />
        </div>
        {/* nav */}
        <nav className='mb-3'>
          <ul>
            {SideBarMenu.map(menu => (
              <li key={menu.text} className='text-while   '>
                <NavLink
                  className={nav => (nav.isActive ? active : noActive)}
                  to={menu.path}
                >
                  <menu.icon className='w-[20px] h-[20px]' />
                  <span className='text-[13px] text-[#DADADA]'>
                    {menu.text}
                  </span>
                  {menu.img && <img src={menu.img} alt='' />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <hr className='w-[80%] border-[#ffffff1a] mx-auto' />
        <Scrollbars style={{ width: '100%', minHeight: 300 }}>
          <nav className='mt-3'>
            <ul className=''>
              {SideBarMenu2.map(menu => (
                <li key={menu.text} className='text-while   '>
                  <NavLink
                    className={nav => (nav.isActive ? active : noActive)}
                    to={menu.path}
                  >
                    <menu.icon className='w-[20px] h-[20px]' />
                    <span className='text-[13px] text-[#DADADA]'>
                      {menu.text}
                    </span>
                    {menu.img && <img src={menu.img} alt='' />}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* ======================= */}
            <div className='py-[10px] px-[20px]'>
              <div
                style={{
                  backgroundImage:
                    'linear-gradient(117deg,#5a4be7,#c86dd7 102%)',
                }}
                className='p-[15px] rounded-xl'
              >
                <div className='text-white font-semibold text-[12px] text-center'>
                  Nghe nhạc không quảng cáo cùng kho nhạc VIP
                </div>
                <button className='bg-[#f8e71c] block mt-2 px-[20px] mx-auto w-[80%] py-2 font-bold text-[12px] rounded-2xl h-[32px]'>
                  NÂNG CẤP VIP
                </button>
              </div>
            </div>
            {/* Thư viện */}
            <div>
              <div className='text-white p-3 font-bold'>Thư viện</div>
              <ul className='mb-[90px]'>
                <li className='text-while   '>
                  <NavLink
                    className={nav => (nav.isActive ? active : noActive)}
                    to={''}
                  >
                    <div>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M0.430334 5.95266C1.10691 2.67954 3.18858 0.856514 6.43569 0.305758C8.83604 -0.101252 11.2373 -0.106392 13.6335 0.31721C16.9769 0.908197 18.9867 2.83753 19.627 6.16013C20.1217 8.72802 20.1295 11.3232 19.6193 13.8886C18.9348 17.1391 16.7994 19.1455 13.5643 19.6942C11.164 20.1013 8.76274 20.1064 6.36648 19.6828C3.0231 19.0918 1.00434 17.0661 0.364051 13.7436C-0.155819 11.1588 -0.105778 8.54713 0.430334 5.95266Z'
                          fill='url(#paint0_linear_2129_5112)'
                        ></path>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M3.20436 7.02377C3 7.42485 3 7.9499 3 9V13C3 14.0501 3 14.5751 3.20436 14.9762C3.38413 15.329 3.67096 15.6159 4.02377 15.7956C4.42485 16 4.9499 16 6 16H14C15.0501 16 15.5751 16 15.9762 15.7956C16.329 15.6159 16.6159 15.329 16.7956 14.9762C17 14.5751 17 14.0501 17 13V9C17 7.9499 17 7.42485 16.7956 7.02377C16.6159 6.67096 16.329 6.38413 15.9762 6.20436C15.5751 6 15.0501 6 14 6H6C4.9499 6 4.42485 6 4.02377 6.20436C3.67096 6.38413 3.38413 6.67096 3.20436 7.02377ZM10.652 7.37915L10.72 7.38363L10.7975 7.40033L10.8617 7.42339L10.8814 7.43245C11.5144 7.73961 12.0967 8.14198 12.6076 8.62357C12.6925 8.70332 12.7757 8.78572 12.8574 8.87091C13.0533 9.07514 13.0465 9.39948 12.8423 9.59534C12.6381 9.79121 12.3137 9.78443 12.1179 9.58021C12.0484 9.50781 11.9779 9.43797 11.9054 9.36987C11.6745 9.15219 11.4267 8.95363 11.1646 8.77614L11.1643 12.6949L11.1643 12.6966C11.1634 13.8631 10.2175 14.8084 9.05082 14.8084C7.88356 14.8084 6.93732 13.8622 6.93732 12.6949C6.93732 11.5277 7.88356 10.5814 9.05082 10.5814C9.44907 10.5814 9.8216 10.6916 10.1396 10.8831V7.89151C10.1396 7.60854 10.369 7.37915 10.652 7.37915Z'
                          fill='url(#paint1_linear_2129_5112)'
                        ></path>
                        <path
                          d='M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5H5Z'
                          fill='white'
                          fillOpacity='0.9'
                        ></path>
                        <defs>
                          <linearGradient
                            id='paint0_linear_2129_5112'
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='20'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#3CA2FF'></stop>
                            <stop offset='1' stopColor='#008FFF'></stop>
                          </linearGradient>
                          <linearGradient
                            id='paint1_linear_2129_5112'
                            x1='6.12791'
                            y1='10.6969'
                            x2='6.12791'
                            y2='15.625'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='white'></stop>
                            <stop
                              offset='1'
                              stopColor='white'
                              stopOpacity='0.9'
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className='text-[13px] font-medium text-[#DADADA]'>
                      Bài hát
                    </span>
                  </NavLink>
                </li>
                <li className='text-while   '>
                  <NavLink
                    className={nav => (nav.isActive ? active : noActive)}
                    to={''}
                  >
                    <div>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <g clipPath='url(#clip0_2130_5116)'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M0.430017 5.95247C1.10668 2.67914 3.18835 0.856636 6.43585 0.305803C8.83585 -0.101697 11.2375 -0.106697 13.6334 0.317469C16.9767 0.908302 18.9867 2.83747 19.6267 6.15997C20.1217 8.7283 20.1292 11.3233 19.6192 13.8883C18.935 17.1383 16.7992 19.1458 13.5642 19.6941C11.1642 20.1016 8.76252 20.1066 6.36668 19.6825C3.02335 19.0916 1.00418 17.0658 0.364184 13.7433C-0.155816 11.1583 -0.105816 8.54747 0.43085 5.95247H0.430017Z'
                            fill='url(#paint0_linear_2130_5116)'
                          ></path>
                          <path
                            d='M11.25 8.61506H15.4167M11.25 11.6476H15.4167M5 14.5833H15.4167'
                            stroke='white'
                            strokeWidth='1.25'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M8.98835 3.35412C8.94419 3.34078 8.89669 3.33328 8.84919 3.33328C8.58585 3.33328 8.37252 3.55162 8.37252 3.82078V7.80578C7.92919 7.43912 7.36419 7.21912 6.74919 7.21912C5.32252 7.21912 4.16669 8.40162 4.16669 9.85912C4.16669 11.3174 5.32252 12.4999 6.74919 12.4999C8.17502 12.4999 9.33169 11.3174 9.33169 9.85912C9.33169 9.79745 9.32919 9.73662 9.32585 9.67578L9.32669 4.64245C9.77169 4.92245 10.1875 5.24912 10.5684 5.61662C10.6634 5.70745 10.7559 5.79995 10.8467 5.89745C11.0284 6.09162 11.33 6.09745 11.52 5.91162C11.71 5.72578 11.7159 5.41745 11.5342 5.22328C11.4317 5.11412 11.3284 5.00912 11.2217 4.90662C10.5834 4.29162 9.85502 3.77745 9.06419 3.38495L8.98835 3.35412Z'
                            fill='white'
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id='paint0_linear_2130_5116'
                            x1='9.99993'
                            y1='-0.000244141'
                            x2='9.99993'
                            y2='20.0002'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#9FD465'></stop>
                            <stop offset='1' stopColor='#70B129'></stop>
                          </linearGradient>
                          <clipPath id='clip0_2130_5116'>
                            <rect width='20' height='20' fill='white'></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className='text-[13px] font-medium text-[#DADADA]'>
                      Playlist
                    </span>
                  </NavLink>
                </li>
                <li className='text-while   '>
                  <NavLink
                    className={nav => (nav.isActive ? active : noActive)}
                    to={''}
                  >
                    <div>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <g clipPath='url(#clip0_2131_5195)'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M0.429773 5.95247C1.10644 2.67914 3.18811 0.856636 6.43561 0.305803C8.83561 -0.101697 11.2373 -0.106697 13.6331 0.317469C16.9764 0.908302 18.9864 2.83747 19.6264 6.15997C20.1214 8.7283 20.1289 11.3233 19.6189 13.8883C18.9348 17.1383 16.7989 19.1458 13.5639 19.6941C11.1639 20.1016 8.76227 20.1066 6.36644 19.6825C3.02311 19.0916 1.00394 17.0658 0.363939 13.7433C-0.156061 11.1583 -0.106061 8.54747 0.430606 5.95247H0.429773Z'
                            fill='url(#paint0_linear_2131_5195)'
                          ></path>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M16.9998 10C16.9998 13.866 13.8657 17 9.99976 17C6.13376 17 2.99976 13.866 2.99976 10C2.99976 6.13401 6.13376 3 9.99976 3C13.8657 3 16.9998 6.13401 16.9998 10ZM9.99975 5.25C10.414 5.25 10.7498 5.58579 10.7498 6V9.567L14.2718 11.6005C14.6306 11.8076 14.7535 12.2663 14.5464 12.625C14.3393 12.9837 13.8806 13.1066 13.5218 12.8995L9.63675 10.6565C9.61258 10.6431 9.58924 10.6284 9.5668 10.6125C9.47324 10.5465 9.39882 10.4621 9.34564 10.3672C9.29764 10.2819 9.26585 10.1862 9.25445 10.0844C9.25068 10.0514 9.2491 10.018 9.24975 9.98457V6C9.24975 5.58579 9.58554 5.25 9.99975 5.25Z'
                            fill='white'
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id='paint0_linear_2131_5195'
                            x1='9.99969'
                            y1='-0.000244141'
                            x2='9.99969'
                            y2='20.0002'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#FFD677'></stop>
                            <stop offset='1' stopColor='#F7AA45'></stop>
                          </linearGradient>
                          <clipPath id='clip0_2131_5195'>
                            <rect
                              width='20'
                              height='20'
                              fill='white'
                              transform='translate(-0.000244141)'
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className='text-[13px] font-medium text-[#DADADA]'>
                      Gần đây
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </Scrollbars>
      </div>
    </div>
  );
};

export default SideBar;
