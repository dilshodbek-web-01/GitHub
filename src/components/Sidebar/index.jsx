import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.scss";

const index = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar__content">
                    <div className='sidebar__content--section'>
                        <img src="https://avatars.githubusercontent.com/u/113158204?v=4" alt="me" className="sidebar__content-img" />
                        <span className='sidebar__content--round'>
                            <span className='sidebar__content--round-smile'>
                                <i class="bi bi-emoji-smile"></i>
                                <p className='sidebar__content--round-text'>Set status</p>
                            </span>
                        </span>
                        <div>
                            <h3 className="sidebar__content-name">Dilshodbek</h3>
                            <p className="sidebar__content-username">dilshodbek-web-01</p>
                        </div>
                    </div>
                    <p className="sidebar__content-bio">Frontend Developer</p>
                    <button className="sidebar__content-btn">Edit profile</button>
                    <ul className="sidebar__content--list">
                        <li className="sidebar__content--list--item">
                            <span className='sidebar__content--list--item-icon' > <i class="bi bi-people"></i> </span>
                            <NavLink className='sidebar__content--list--item-link' to="/followers">2 followers</NavLink>
                        </li>
                        <li className="sidebar__content--list--item">
                            <NavLink className='sidebar__content--list--item-link' to="/following">2 following</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default index;