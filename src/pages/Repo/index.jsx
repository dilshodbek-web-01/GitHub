import React from 'react';
import "./style.scss";

const index = () => {
    return (
        <>
            <div className="repo">

                <div className="repo__up">
                    <input className="repo__up-input" type="text" placeholder='Find a repository...' />
                    <div className="repo__up--btns extraOne">
                        <button className="repo__up--btns-btn">Type <span className='repo__up--btns-btn-drop'> <i class="bi bi-caret-down-fill"></i> </span> </button>
                        <button className="repo__up--btns-btn">Language <span className='repo__up--btns-btn-drop'> <i class="bi bi-caret-down-fill"></i> </span> </button>
                        <button className="repo__up--btns-btn">Sort <span className='repo__up--btns-btn-drop'> <i class="bi bi-caret-down-fill"></i> </span> </button>
                    </div>

                    <button className='repo__up-lastBtn'> <span className='repo__up-lastBtn-icon'> <i class="bi bi-journal-bookmark"></i> </span> New</button>

                </div>

                <div className="repo__up--btns extraTwoo">
                        <button className="repo__up--btns-btn">Type <span className='repo__up--btns-btn-drop'> <i class="bi bi-caret-down-fill"></i> </span> </button>
                        <button className="repo__up--btns-btn">Language <span className='repo__up--btns-btn-drop'> <i class="bi bi-caret-down-fill"></i> </span> </button>
                        <button className="repo__up--btns-btn">Sort <span className='repo__up--btns-btn-drop'> <i class="bi bi-caret-down-fill"></i> </span> </button>
                    </div>

                <ul className="repo__list pt-3">

                    <li className="repo__list--item border-top border-bottom pt-4 pb-2">
                        <div className="repo__list--item--left">
                            <a href='#' className="repo__list--item--left-name">Redux</a>
                            <span className="repo__list--item--left-circle">Public</span>
                            <p className="repo__list--item--left-text">React</p>
                            <div className="repo__list--item--left__down">
                                <div className="repo__list--item--left__down--first">
                                    <button className="repo__list--item--left__down--first-round"></button>
                                    <p className="repo__list--item--left__down--first-text">JavaScript</p>
                                </div>
                                <p className="repo__list--item--left__down-date">Updated 2 days ago</p>
                            </div>
                        </div>

                        <div className="repo__list--item--right">
                            <div className="repo__list--item--right__btns">
                                <button className="repo__list--item--right__btns-Sbtn"> <span className="repo__list--item--right__btns-Star"> <i class="bi bi-star"></i> </span> Star</button>
                                <button className="repo__list--item--right__btns-iconBtn"> <span className="repo__list--item--right__btns-iconDrop"> <i class="bi bi-caret-down-fill"></i> </span> </button>
                            </div>
                            <hr  className='repo__list--item--right-hr'/>
                        </div>
                    </li>

                </ul>

            </div>
        </>
    );
};

export default index;