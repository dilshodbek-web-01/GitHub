import React, { useState, useEffect } from 'react';
import "./style.scss";
import { NavLink } from "react-router-dom";

const index = () => {

    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    })

    return (
        <>
        
            <div className={!(scrollY > 370 )? "sideUP" : "sideUP zindex"}>
                <div className="container">
                    <div className="sideup">
                    
                        <div className="sideup__user"> 
                            <img src="https://avatars.githubusercontent.com/u/113158204?s=40&v=4" alt="me" 
                            className={!(scrollY > 380) ? "sideup__user-img d-none" : "sideup__user-img d-block"} />
                            <p className={!(scrollY > 380) ? "sideup__user-text d-none" : "sideup__user-text d-block"} ><strong>dilshodbek-web-01</strong></p>
                        </div>

                        <ul className="sideup__list">
                            <li className="sideup__list--item">
                                <span className='sideup__list--item-icon me-2'> <i class="bi bi-book"></i> </span>
                                <NavLink className='sideup__list--item-link' to="/overview">Overview</NavLink>
                            </li>

                            <li className="sideup__list--item">
                                <span className='sideup__list--item-icon me-2'> <i class="bi bi-journal-bookmark"></i> </span>
                                <NavLink className='sideup__list--item-link' to="/repositories">Repositories</NavLink>
                                <span className='sideup__list--item-number ms-2'>41</span>
                            </li>

                            <li className="sideup__list--item">
                                <span className='sideup__list--item-icon me-2'> <i class="bi bi-border-all"></i> </span>
                                <NavLink className='sideup__list--item-link' to="/projects">Projects</NavLink>
                            </li>

                            <li className="sideup__list--item">
                                <span className='sideup__list--item-icon me-2'> <i class="bi bi-box"></i> </span>
                                <NavLink className='sideup__list--item-link' to="/packages">Packages</NavLink>
                            </li>

                            <li className="sideup__list--item">
                                <span className='sideup__list--item-icon me-2'> <i class="bi bi-star"></i> </span>
                                <NavLink className='sideup__list--item-link' to="/stars">Stars</NavLink>
                            </li>
                        </ul>

                        <span className='sideup-dots'> <i class="bi bi-three-dots"></i> </span>

                    </div>
                </div>
                <hr />
            </div>
        </>
    );
};

export default index;