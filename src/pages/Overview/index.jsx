import React, { useEffect, useState } from 'react';
import "./style.scss";


const index = () => {
    return (
        <>
            <div className="overview">

                <div className="overview__up">
                    <p className="overview__up-text1">Popular repositories</p>
                    <p className="overview__up-text2">Customize your pins</p>
                </div>

                <ul className="overview__list">

                    <li className="overview__list--item">
                        <div className="overview__list--item--up">
                            <a className='overview__list--item--up-link' href="#">books</a>
                            <span className='overview__list--item--up-circle'>Public</span>
                        </div>
                        <p className="overview__list--item-text">only HTML and pictures</p>
                        <div className='overview__list--item--down'>
                            <button className='overview__list--item--down-round'></button>
                            <p className="overview__list--item--down-text2">HTML</p>
                        </div>
                    </li>

                    <li className="overview__list--item">
                        <div className="overview__list--item--up">
                            <a className='overview__list--item--up-link' href="#">books</a>
                            <span className='overview__list--item--up-circle'>Public</span>
                        </div>
                        <p className="overview__list--item-text">only HTML and pictures</p>
                        <div className='overview__list--item--down'>
                            <button className='overview__list--item--down-round'></button>
                            <p className="overview__list--item--down-text2">HTML</p>
                        </div>
                    </li>

                </ul>

            </div>
        </>
    );
};

export default index;