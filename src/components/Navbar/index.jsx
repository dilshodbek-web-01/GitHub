import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import "./style.scss";
import { NavLink } from "react-router-dom";

const index = () => {

    const { state, setState } = useContext(Context);
    
    const menuClick = () => {
        setState(state => !state);
    }

    return (
        <>
            <header className='header'>
                <nav className="nav">
                    <span className='nav__left-menu' onClick={() => menuClick()}> <i class="bi bi-list"></i> </span>
                    <div className="nav__left">
                        <span className='nav__left-github'> <i class="bi bi-github"></i>
                        </span>
                        <label className='nav__left-label' htmlFor="#">
                            <input className='nav__left-label-input' type="search" placeholder='Search or jump to...' />
                            <span className='nav__left-label-slash'>/</span>
                        </label>

                        <ul className="nav__list">
                            <li className="nav__list--item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav__list--item-link" : "nav__list--item-link hover"
                                } to="/">Pull requests</NavLink>
                            </li>
                            <li className="nav__list--item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav__list--item-link" : "nav__list--item-link hover"
                                } to="/">Issues</NavLink>
                            </li>
                            <li className="nav__list--item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav__list--item-link" : "nav__list--item-link hover"
                                } to="/">Codespaces</NavLink>
                            </li>
                            <li className="nav__list--item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav__list--item-link" : "nav__list--item-link hover"
                                } to="/">Marketplace</NavLink>
                            </li>
                            <li className="nav__list--item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? "nav__list--item-link" : "nav__list--item-link hover"
                                } to="/">Explore</NavLink>
                            </li>
                        </ul>

                    </div>

                    <div className="nav__right">
                        <span className="nav__right-bell"> <i class="bi bi-bell"></i> </span>
                        <div className="nav__right--icons">
                            <span className="nav__right--icons-plus"> <i class="bi bi-plus-lg"></i> </span>
                            <span className="nav__right--icons-triangle"> <i class="bi bi-caret-down-fill"></i> </span>
                        </div>
                        <span className='nav__right--round'>
                            <span className='nav__right--round-blue'></span>
                            <img className='nav__right--round-img' src="https://avatars.githubusercontent.com/u/113158204?s=40&v=4" alt="round" />
                            <span className='nav__right--round-triangle'> <i class="bi bi-caret-down-fill"></i> </span>
                        </span>
                    </div>

                </nav>

                <div className={state ? "nav__menu d-block" : "d-none"}>

                    <input className='nav__menu-input' type="search" placeholder='Search GitHub' />

                    <ul className="nav__ul">
                        <li className="nav__ul--item">
                            <hr className='nav__ul--item-hr' />
                            <a className='nav__ul--item-link' href="#">Dashboard</a>
                        </li>
                        <li className="nav__ul--item">
                            <hr className='nav__ul--item-hr' />
                            <a className='nav__ul--item-link' href="#">Pull Requests</a>
                        </li>
                        <li className="nav__ul--item">
                            <hr className='nav__ul--item-hr' />
                            <a className='nav__ul--item-link' href="#">Issues</a>
                        </li>
                        <li className="nav__ul--item">
                            <hr className='nav__ul--item-hr' />
                            <a className='nav__ul--item-link' href="#">Codespaces</a>
                        </li>
                        <li className="nav__ul--item">
                            <hr className='nav__ul--item-hr' />
                            <a className='nav__ul--item-link' href="#">Marketplace</a>
                        </li>
                        <li className="nav__ul--item">
                            <hr className='nav__ul--item-hr' />
                            <a className='nav__ul--item-link' href="#">Explore</a>
                        </li>
                        <li className="nav__ul--item">
                            <hr className='nav__ul--item-hr' />
                            <a className='nav__ul--item-link' href="#">Sponsors</a>
                        </li>
                        <li className="nav__ul--item">
                            <hr className='nav__ul--item-hr' />
                            <a className='nav__ul--item-link' href="#">Settings</a>
                            <hr className='nav__ul--item-hr' />
                        </li>
                    </ul>

                    <div>
                        <div className='nav__round'>
                            <img src="https://avatars.githubusercontent.com/u/113158204?…40&u=a2773a3b3950d78f667faaa1851b81791ee05f97&v=4" alt="img" className="nav__round-img" />
                            <p className='nav__round-user'>dilshodbek-web-01</p>
                        </div>
                        <hr className='nav__round-hr' />
                    </div>

                    <div className='nav__sign'>
                        <span className='nav__sign-icon'> <i class="bi bi-box-arrow-right"></i> </span>
                        <p className='nav__sign-text'>Sign Out</p>
                    </div>

                </div>

            </header>
        </>
    );
};

export default index;