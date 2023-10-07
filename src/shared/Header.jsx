import React, { useEffect, useState } from 'react';
import '../shared/header.css';
import logo from '../assets/images/header/logonamewhite.png';
import logoBlack from '../assets/images/header/logoname.png';
import user from '../assets/images/header/user.png';
import downArrow from '../assets/images/header/down-arrow.png';
import add from '../assets/images/header/ads-icon-img.png';
import watchList from '../assets/images/header/whish-list-icon.png';
import user1 from '../assets/images/header/profile-setting-icon.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isWhite, setIsWhite] = useState(true);
    useEffect(() => {
        window.onscroll = function () {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('header-bg');
                setIsWhite(false);

            }
            else {
                header.classList.remove('header-bg');
                setIsWhite(true)

            }
        }
    }, [window.scroll])
    const nav = <ul className="menu menu-horizontal px-1 ">

        <li className={isWhite ? 'list-color' : 'black'} tabIndex={0}>
            <details >
                <summary>Buy a Business</summary>
                <ul className="p-2 text-black">
                    <Link to='/businessList' ><a>Search for a Business </a></Link>
                </ul>
            </details>
        </li>
        <li className={isWhite ? 'list-color' : 'black'} tabIndex={0}>
            <details>
                <summary>Buy a Franchise</summary>
                <ul className="p-2 text-black">
                    <Link to='/businessList' ><a>Search for a Franchise</a></Link>
                </ul>
            </details>
        </li>
        <li className={isWhite ? 'list-color' : 'black'} tabIndex={0}>
            <details>
                <summary>Sell a Business</summary>
                <ul className="p-2 text-black">
                    <Link to='/sell' ><a>Sell For Free</a></Link>
                </ul>
            </details>
        </li>
        <li className={isWhite ? 'list-color' : 'black'} tabIndex={0}>
            <details>
                <summary>Business Brokers</summary>
                <ul className="p-2 text-black">
                    <Link to='/brokersDirector' ><a>Brokers Directory </a></Link> <br />
                    <Link to='/businessSells' ><a>Business Sales Promo</a></Link> <br />
                    <Link to='/businessSells' ><a>Brokers Directory Promo  </a></Link>

                </ul>
            </details>
        </li>
        <li className={isWhite ? 'list-color' : 'black'} tabIndex={0}>
            <details>
                <summary>Franchisors </summary>
                <ul className="p-2 text-black">
                    <Link to='/FranchisorsDirectory ' ><a>Franchisors Directory </a></Link> <br />
                    <Link to='/businessSells' ><a>Franchisors Sales Promo </a></Link> <br />
                    <Link to='/businessSells' ><a>Franchisors Directory Promo  </a></Link>
                </ul>
            </details>
        </li>
        <Link to='/businessWanted' className={`a mt-2 ${isWhite ? 'list-color' : 'black'}`} ><a className=''>Business Wanted</a></Link>
    </ul>
    return (
        <header id='header' className=' fixed top-0 w-full z-10'>

            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-[#291958] text-white rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <Link to='/'><a href="#">
                        <img id='logo' className='w-full text-white logo' src={isWhite ? `${logo}` : `${logoBlack}`} alt="logo" />
                    </a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {nav}

                </div>
                <div className='flex border btn1 justify-center pl-12 pr-4 py-2 hover:bg-[#291958]'>
                    <img src={user} alt="" />


                    <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className=" m-1 text-white">MyBusiness</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3">
                            <div className='flex'>
                                <img className='w-7' src={add} alt="" />
                                <Link className='' to='/businessSells'><a>  Post a Free Ad</a></Link>
                            </div>
                            <div className='flex'>
                                <img className='w-7' src={add} alt="" />
                                <Link to='/businessSells'><a> Manage Ads</a></Link>
                            </div>
                            <div className='flex'>
                                <img src={watchList} alt="" />
                                <Link to='/businessSells'><a>  My Watchlist</a></Link>
                            </div>
                            <div className='flex'>
                                <img src={user1} alt="" />
                                <Link to='/businessSells'><a>  Profile Setting</a></Link>
                            </div>
                        </ul>
                    </div>


                    <img className='w-4' src={downArrow} alt="" />
                </div>
            </div>



        </header>
    );
};

export default Header;