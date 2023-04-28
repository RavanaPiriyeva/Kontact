import React from 'react'
import './NavbarBottom.scss'
import { Link } from "react-router-dom";
import '../../../Style/grid.scss'



const NavbarBottom = () => {
    return (
        <div>
            <section id="nav-bottom-part" className="pt-4 pb-5 pt-lg-2">
                <div className="container-fluid container-xl">
                    <div className="row align-items-center">
                        <div className="col-2 d-block d-lg-none bar ">
                            <i className="fa-solid fa-bars" style={{color: '#000000'}}></i>
                        </div>
                        <div className="col-2 logo">
                            <Link to="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="35" viewBox="0 0 104 24">
                                    <g>
                                        <g>
                                            <path
                                                d="M6.45,2.34c0-0.95,0.77-1.72,1.72-1.72s1.72,0.77,1.72,1.72v9.03c0,0.95-0.77,1.72-1.72,1.72    s-1.72-0.77-1.72-1.72V2.34z"
                                                style={{fill: 'rgb(255, 0, 60)'}}></path>
                                            <path
                                                d="M15.01,10.62c-1.02-0.6-1.7-1.7-1.7-2.96c0-1.29,0.71-2.42,1.77-3l3.81-2.2c0.25-0.14,0.53-0.22,0.83-0.22    c0.95,0,1.72,0.77,1.72,1.72c0,0.64-0.35,1.19-0.86,1.49l-3.02,1.74c-0.16,0.09-0.27,0.27-0.27,0.47c0,0.2,0.11,0.37,0.26,0.46    l3.03,1.75c0.52,0.29,0.87,0.85,0.87,1.49c0,0.95-0.77,1.72-1.72,1.72c-0.31,0-0.61-0.08-0.86-0.23L15.01,10.62z"
                                                style={{fill: 'rgb(255, 0, 60)'}}></path>
                                            <path
                                                d="M25.67,16.47c-2.68,4.17-7.22,6.9-12.36,6.9c-5.12,0-9.63-2.71-12.32-6.84c-0.44-0.67-0.24-1.57,0.43-2    c0.65-0.42,1.51-0.26,1.96,0.36c2.24,3.07,5.85,5.06,9.94,5.06c4.09,0,7.71-1.99,9.94-5.06c0.43-0.59,1.25-0.77,1.9-0.39    C25.84,14.9,26.07,15.78,25.67,16.47"
                                                style={{fill: 'rgb(255, 0, 60)'}}></path>
                                        </g>
                                        <g>
                                            <path
                                                d="M48.54,8.76c-2.65,0-4.81,2.18-4.81,4.87c0,2.69,2.16,4.88,4.81,4.88c2.66,0,4.83-2.19,4.83-4.88    C53.36,10.94,51.2,8.76,48.54,8.76 M50.77,13.63c0,1.4-0.95,2.46-2.21,2.46c-1.28,0-2.25-1.06-2.25-2.46    c0-1.39,0.97-2.44,2.25-2.44C49.82,11.19,50.77,12.24,50.77,13.63">
                                            </path>
                                            <path
                                                d="M60.31,8.76c-0.91,0-1.7,0.28-2.29,0.82c-0.04,0.04-0.09,0.05-0.14,0.04c-0.03,0-0.08-0.02-0.11-0.08    c-0.22-0.38-0.63-0.6-1.13-0.6c-0.74,0-1.27,0.54-1.27,1.29v6.8c0,0.38,0.14,0.71,0.38,0.95c0.23,0.22,0.55,0.34,0.91,0.34    c0.03,0,0.05,0,0.08,0c0.68-0.03,1.21-0.6,1.21-1.29v-4.01c0-1.13,0.64-1.84,1.67-1.84c1.03,0,1.67,0.7,1.67,1.84v4.01    c0,0.74,0.52,1.27,1.27,1.29c0.34,0.01,0.67-0.12,0.92-0.37c0.25-0.25,0.4-0.59,0.4-0.95v-4.31C63.89,10.3,62.48,8.76,60.31,8.76">
                                            </path>
                                            <path
                                                d="M71.64,15.8c-0.23,0-0.45,0.07-0.67,0.14c-0.22,0.07-0.45,0.14-0.69,0.14c-0.34,0-0.66-0.09-0.66-0.77v-3.9    c0-0.09,0.07-0.16,0.16-0.16h1.34c0.67,0,1.14-0.48,1.14-1.16s-0.47-1.16-1.14-1.16h-1.38c-0.09,0-0.16-0.07-0.16-0.16V7.96    c0-0.36-0.15-0.71-0.4-0.96c-0.25-0.25-0.57-0.38-0.92-0.38C67.52,6.63,67,7.17,67,7.93v0.84c0,0.09-0.07,0.16-0.16,0.16H66.3    c-0.68,0-1.16,0.47-1.16,1.14c0,0.69,0.48,1.18,1.16,1.18h0.52c0.09,0,0.16,0.07,0.16,0.16v3.64c0,2.2,1.16,3.46,3.18,3.46    c1.51,0,2.56-0.7,2.56-1.7C72.72,16.32,72.38,15.8,71.64,15.8">
                                            </path>
                                            <path
                                                d="M82.02,8.95c-0.56-0.02-1.01,0.21-1.24,0.65c-0.03,0.05-0.07,0.07-0.1,0.07c-0.05,0.01-0.1-0.01-0.14-0.04    c-0.66-0.58-1.5-0.87-2.49-0.87c-2.54,0-4.45,2.09-4.45,4.87c0,2.78,1.91,4.88,4.45,4.88c0.97,0,1.8-0.3,2.46-0.89    c0.04-0.04,0.1-0.05,0.16-0.04c0.03,0.01,0.08,0.02,0.11,0.08c0.21,0.42,0.64,0.67,1.15,0.67c0.34,0,0.67-0.13,0.91-0.37    c0.25-0.25,0.39-0.58,0.39-0.94v-6.77C83.23,9.55,82.7,8.98,82.02,8.95 M80.63,13.63c0,1.4-0.95,2.46-2.21,2.46    c-1.28,0-2.25-1.06-2.25-2.46c0-1.39,0.97-2.44,2.25-2.44C79.68,11.19,80.63,12.24,80.63,13.63">
                                            </path>
                                            <path
                                                d="M102.16,15.8c-0.23,0-0.45,0.07-0.67,0.14c-0.22,0.07-0.45,0.14-0.69,0.14c-0.34,0-0.66-0.09-0.66-0.77v-3.9    c0-0.09,0.07-0.16,0.16-0.16h1.34c0.67,0,1.14-0.48,1.14-1.16c0-0.68-0.47-1.16-1.14-1.16h-1.38c-0.09,0-0.16-0.07-0.16-0.16V7.96    c0-0.36-0.15-0.71-0.4-0.96c-0.25-0.25-0.57-0.38-0.92-0.38c-0.74,0.01-1.26,0.54-1.26,1.31v0.84c0,0.09-0.07,0.16-0.16,0.16    h-0.54c-0.68,0-1.16,0.47-1.16,1.14c0,0.69,0.48,1.18,1.16,1.18h0.52c0.09,0,0.16,0.07,0.16,0.16v3.63c0,2.2,1.16,3.46,3.18,3.46    c1.51,0,2.56-0.7,2.56-1.7C103.24,16.32,102.9,15.8,102.16,15.8">
                                            </path>
                                            <path
                                                d="M87.1,5.49c-0.74,0-1.27,0.54-1.27,1.29v10.26c0,0.76,0.53,1.29,1.29,1.29c0.76,0,1.29-0.53,1.29-1.29V6.78    C88.41,6.02,87.87,5.49,87.1,5.49">
                                            </path>
                                            <path
                                                d="M94,16.22l-1.85-2.4c-0.09-0.12-0.09-0.28,0-0.4l1.85-2.4c0.46-0.6,0.36-1.35-0.25-1.82c-0.58-0.45-1.34-0.34-1.79,0.25    l-1.59,2.07l-0.5,0.65c-0.66,0.86-0.66,2.06,0,2.92l0.5,0.65l1.59,2.06c0.46,0.6,1.21,0.7,1.81,0.23    C94.37,17.57,94.46,16.83,94,16.22">
                                            </path>
                                            <path
                                                d="M35.27,5.49C34.53,5.49,34,6.03,34,6.78v10.26c0,0.76,0.53,1.29,1.29,1.29c0.76,0,1.29-0.53,1.29-1.29V6.78    C36.58,6.02,36.04,5.49,35.27,5.49">
                                            </path>
                                            <path
                                                d="M42.17,16.22l-1.85-2.4c-0.09-0.12-0.09-0.28,0-0.4l1.85-2.4c0.46-0.6,0.36-1.35-0.25-1.82    c-0.58-0.45-1.34-0.34-1.79,0.25l-1.59,2.07l-0.5,0.65c-0.66,0.86-0.66,2.06,0,2.92l0.5,0.65l1.59,2.06    c0.46,0.6,1.21,0.7,1.81,0.23C42.54,17.57,42.63,16.83,42.17,16.22">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className="col-2 d-none menu d-lg-flex align-items-center justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22">
                                <path fill="#171717"
                                    d="M9.78 2.44v4.89a2.45 2.45 0 0 1-2.45 2.45H2.44A2.45 2.45 0 0 1 0 7.33V2.44A2.45 2.45 0 0 1 2.44 0h4.89a2.45 2.45 0 0 1 2.45 2.44zM7.33 2H2.44a.44.44 0 0 0-.44.44v4.89a.45.45 0 0 0 .44.45h4.89a.46.46 0 0 0 .45-.45V2.44A.45.45 0 0 0 7.33 2M9.78 14.67v4.89A2.45 2.45 0 0 1 7.33 22H2.44A2.45 2.45 0 0 1 0 19.56v-4.89a2.45 2.45 0 0 1 2.44-2.45h4.89a2.45 2.45 0 0 1 2.45 2.45zm-2.45-.45H2.44a.45.45 0 0 0-.44.45v4.89c0 .243.197.44.44.44h4.89a.45.45 0 0 0 .45-.44v-4.89a.46.46 0 0 0-.45-.45M22 2.44v4.89a2.45 2.45 0 0 1-2.44 2.45h-4.89a2.45 2.45 0 0 1-2.45-2.45V2.44A2.45 2.45 0 0 1 14.67 0h4.89A2.45 2.45 0 0 1 22 2.44zM19.56 2h-4.89a.45.45 0 0 0-.45.44v4.89a.46.46 0 0 0 .45.45h4.89a.45.45 0 0 0 .44-.45V2.44a.44.44 0 0 0-.44-.44M19.56 12.22A2.45 2.45 0 0 1 22 14.67v4.89A2.45 2.45 0 0 1 19.56 22h-4.89a2.45 2.45 0 0 1-2.45-2.44v-4.89a2.45 2.45 0 0 1 2.45-2.45zm0 2h-4.89a.46.46 0 0 0-.45.45v4.89a.45.45 0 0 0 .45.44h4.89a.44.44 0 0 0 .44-.44v-4.89a.45.45 0 0 0-.44-.45">
                                </path>
                            </svg>
                            <p className="ps-2 mb-0">Menyu</p>
                        </div>
                        <div className="col-5 d-none d-lg-flex serch" >

                            <input type="text" placeholder="Axtarış..." />
                            <button type="submit">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" fill="white"></rect>
                                    <path
                                        d="M13.4172 19.3517C13.0539 19.3517 12.7384 19.0831 12.6879 18.7137C12.6332 18.3103 12.9166 17.9392 13.3199 17.8853C17.1568 17.3681 20.0514 14.0562 20.061 10.1793C20.0523 6.27716 17.1351 2.96267 13.2695 2.46719C12.8661 2.41591 12.581 2.04647 12.6323 1.64313C12.6836 1.2398 13.0522 0.954678 13.4564 1.00596C18.0452 1.59445 21.5101 5.52004 21.5335 10.1488C21.5335 10.1532 21.5335 10.1584 21.5335 10.1628V10.1975C21.5335 10.2019 21.5335 10.2071 21.5335 10.2114C21.5092 14.809 18.0704 18.7311 13.5163 19.3456C13.4833 19.3491 13.4503 19.3517 13.4172 19.3517Z"
                                        fill="#1D1D1B"></path>
                                    <path
                                        d="M11.1719 19.393C11.1406 19.393 11.1093 19.3912 11.0772 19.3869C6.4727 18.7967 3 14.845 3 10.1962C3 5.57694 6.44662 1.62876 11.0172 1.01245C11.4214 0.958556 11.7917 1.24107 11.8456 1.6444C11.9004 2.04774 11.617 2.41891 11.2136 2.47281C7.37064 2.99089 4.47253 6.31146 4.47253 10.1962C4.47253 14.1061 7.39237 17.4293 11.2641 17.9257C11.6674 17.9778 11.9525 18.3464 11.9012 18.7497C11.8543 19.1218 11.537 19.393 11.1719 19.393Z"
                                        fill="#1D1D1B"></path>
                                    <path
                                        d="M19.9983 22.9997C19.7628 22.9997 19.5307 22.8867 19.3881 22.6772L16.1084 17.8537C15.8798 17.5173 15.9667 17.0592 16.3031 16.8297C16.6395 16.6011 17.0976 16.688 17.3271 17.0244L20.6068 21.848C20.8354 22.1844 20.7485 22.6425 20.4121 22.8719C20.2852 22.9589 20.1409 22.9997 19.9983 22.9997Z"
                                        fill="#1D1D1B"></path>
                                    <path
                                        d="M17.5758 9.30366C17.2446 9.30366 16.943 9.07852 16.8613 8.74212C16.0459 5.4172 13.0496 5.48935 12.9209 5.49282C12.5193 5.50586 12.1725 5.19293 12.156 4.78785C12.1386 4.38278 12.4506 4.04029 12.8557 4.02117C12.9009 4.01943 13.9675 3.9751 15.1601 4.49144C16.271 4.97214 17.7158 6.03872 18.2929 8.39094C18.3903 8.78645 18.1478 9.18544 17.7531 9.28193C17.6932 9.29671 17.634 9.30366 17.5758 9.30366Z"
                                        fill="#E4133A"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="col-lg-3 col-8 info">
                            <ul className="ps-0 d-flex align-items-center mb-0 justify-content-end">
                                <li className="d-lg-block d-none">
                                    <Link to="#" className="d-flex align-items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" fill="white"></rect>
                                        <path
                                            d="M12.3219 13.1031C9.07291 13.1031 6.4303 10.3879 6.4303 7.05157C6.4303 3.71525 9.07291 1 12.3219 1C15.5709 1 18.2135 3.71525 18.2135 7.05157C18.2135 10.3879 15.5709 13.1031 12.3219 13.1031ZM12.3219 2.48709C9.87174 2.48709 7.87807 4.53489 7.87807 7.05157C7.87807 9.56824 9.87174 11.616 12.3219 11.616C14.772 11.616 16.7657 9.56824 16.7657 7.05157C16.7657 4.53489 14.772 2.48709 12.3219 2.48709Z"
                                            fill="#020A0A"></path>
                                        <path
                                            d="M19.9962 23.0001C19.5968 23.0001 19.2723 22.6668 19.2723 22.2565C19.2723 18.342 16.1715 15.157 12.3605 15.157C8.54942 15.157 5.44778 18.342 5.44778 22.2565C5.44778 22.6668 5.1233 23.0001 4.72389 23.0001C4.32447 23.0001 4 22.6668 4 22.2565C4 17.5215 7.75059 13.6699 12.3596 13.6699C16.9687 13.6699 20.7193 17.5224 20.7193 22.2565C20.7201 22.6668 20.3956 23.0001 19.9962 23.0001Z"
                                            fill="#020A0A"></path>
                                        <path
                                            d="M16.7789 20.7449H13.0462C12.6467 20.7449 12.3223 20.4116 12.3223 20.0014C12.3223 19.5911 12.6467 19.2578 13.0462 19.2578H16.7789C17.1783 19.2578 17.5027 19.5911 17.5027 20.0014C17.5027 20.4116 17.1791 20.7449 16.7789 20.7449Z"
                                            fill="#FF003C"></path>
                                    </svg>
                                        <span>Daxil ol</span></Link>
                                </li>

                                <li className="d-block d-lg-none">
                                    <Link to="#">RU</Link>
                                </li>
                                <li className="d-block d-lg-none">
                                    <Link to="#">
                                        <svg id="toggleMenuButton" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                                            <rect width="24" height="24" fill="white"></rect>
                                            <path
                                                d="M13.4172 19.3517C13.0539 19.3517 12.7384 19.0831 12.6879 18.7137C12.6332 18.3103 12.9166 17.9392 13.3199 17.8853C17.1568 17.3681 20.0514 14.0562 20.061 10.1793C20.0523 6.27716 17.1351 2.96267 13.2695 2.46719C12.8661 2.41591 12.581 2.04647 12.6323 1.64313C12.6836 1.2398 13.0522 0.954678 13.4564 1.00596C18.0452 1.59445 21.5101 5.52004 21.5335 10.1488C21.5335 10.1532 21.5335 10.1584 21.5335 10.1628V10.1975C21.5335 10.2019 21.5335 10.2071 21.5335 10.2114C21.5092 14.809 18.0704 18.7311 13.5163 19.3456C13.4833 19.3491 13.4503 19.3517 13.4172 19.3517Z"
                                                fill="#1D1D1B"></path>
                                            <path
                                                d="M11.1719 19.393C11.1406 19.393 11.1093 19.3912 11.0772 19.3869C6.4727 18.7967 3 14.845 3 10.1962C3 5.57694 6.44662 1.62876 11.0172 1.01245C11.4214 0.958556 11.7917 1.24107 11.8456 1.6444C11.9004 2.04774 11.617 2.41891 11.2136 2.47281C7.37064 2.99089 4.47253 6.31146 4.47253 10.1962C4.47253 14.1061 7.39237 17.4293 11.2641 17.9257C11.6674 17.9778 11.9525 18.3464 11.9012 18.7497C11.8543 19.1218 11.537 19.393 11.1719 19.393Z"
                                                fill="#1D1D1B"></path>
                                            <path
                                                d="M19.9983 22.9997C19.7628 22.9997 19.5307 22.8867 19.3881 22.6772L16.1084 17.8537C15.8798 17.5173 15.9667 17.0592 16.3031 16.8297C16.6395 16.6011 17.0976 16.688 17.3271 17.0244L20.6068 21.848C20.8354 22.1844 20.7485 22.6425 20.4121 22.8719C20.2852 22.9589 20.1409 22.9997 19.9983 22.9997Z"
                                                fill="#1D1D1B"></path>
                                            <path
                                                d="M17.5758 9.30366C17.2446 9.30366 16.943 9.07852 16.8613 8.74212C16.0459 5.4172 13.0496 5.48935 12.9209 5.49282C12.5193 5.50586 12.1725 5.19293 12.156 4.78785C12.1386 4.38278 12.4506 4.04029 12.8557 4.02117C12.9009 4.01943 13.9675 3.9751 15.1601 4.49144C16.271 4.97214 17.7158 6.03872 18.2929 8.39094C18.3903 8.78645 18.1478 9.18544 17.7531 9.28193C17.6932 9.29671 17.634 9.30366 17.5758 9.30366Z"
                                                fill="#E4133A"></path>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="basket">
                                    <Link to="#" className="d-flex align-items-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" fill="white"></rect>
                                            <g clipPath="url(#clip0_40_562)">
                                                <path
                                                    d="M20.5556 15.0939H7.45333C7.19129 15.0939 6.96575 14.9064 6.91099 14.6442L4.73576 4.13433H1.55407C1.24836 4.13433 1 3.88011 1 3.56716C1 3.25422 1.24836 3 1.55407 3H5.18424C5.44628 3 5.67182 3.1875 5.72658 3.44973L7.90246 13.9596H20.1247L21.7335 7.48727H9.27852C8.9728 7.48727 8.72444 7.23305 8.72444 6.92011C8.72444 6.60716 8.9728 6.35294 9.27852 6.35294H22.4459C22.6167 6.35294 22.7784 6.43368 22.8833 6.5718C22.9883 6.70992 23.0248 6.89008 22.983 7.05956L21.0927 14.6662C21.0301 14.9185 20.8091 15.0939 20.5556 15.0939Z"
                                                    fill="#020A0A"></path>
                                                <path
                                                    d="M9.76744 22.0004C8.09609 22.0004 6.73633 20.6085 6.73633 18.8976C6.73633 17.1868 8.09609 15.7949 9.76744 15.7949C11.4388 15.7949 12.7986 17.1868 12.7986 18.8976C12.7986 20.6085 11.4388 22.0004 9.76744 22.0004ZM9.76744 16.9293C8.70688 16.9293 7.84448 17.812 7.84448 18.8976C7.84448 19.9833 8.70688 20.866 9.76744 20.866C10.828 20.866 11.6904 19.9833 11.6904 18.8976C11.6904 17.812 10.828 16.9293 9.76744 16.9293Z"
                                                    fill="#020A0A"></path>
                                                <path
                                                    d="M18.1763 22.0004C16.5049 22.0004 15.1451 20.6085 15.1451 18.8976C15.1451 17.1868 16.5049 15.7949 18.1763 15.7949C19.8476 15.7949 21.2074 17.1868 21.2074 18.8976C21.2074 20.6085 19.8476 22.0004 18.1763 22.0004ZM18.1763 16.9293C17.1157 16.9293 16.2533 17.812 16.2533 18.8976C16.2533 19.9833 17.1157 20.866 18.1763 20.866C19.2368 20.866 20.0992 19.9833 20.0992 18.8976C20.0992 17.812 19.2368 16.9293 18.1763 16.9293Z"
                                                    fill="#020A0A"></path>
                                                <path
                                                    d="M16.3186 13.0253H11.2341C10.9643 13.0253 10.7452 12.8011 10.7452 12.5249C10.7452 12.2486 10.9643 12.0244 11.2341 12.0244H16.3186C16.5884 12.0244 16.8075 12.2486 16.8075 12.5249C16.8075 12.8011 16.5884 13.0253 16.3186 13.0253Z"
                                                    fill="#FF003C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_40_562">
                                                    <rect width="22" height="19" fill="white"
                                                        transform="translate(1 3)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="d-lg-inline d-none">Səbət</span>
                                        <span className="count">0</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default NavbarBottom