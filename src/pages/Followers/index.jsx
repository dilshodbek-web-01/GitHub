import React from 'react';
import "./style.scss";

const index = () => {
    return (
        <>
            <div className="followers__wrapper">

                <div className="followers border-bottom">
                    <div className="followers__round">
                        <img className="followers__round-img" src="https://avatars.githubusercontent.com/u/113175466?s=100&v=4" alt="person" />
                        <div className='followers__round--content'>
                            <p className="followers__round--content-name">Lochinbek</p>
                            <p className="followers__round--content-user">web-developer001</p>
                        </div>
                        {/* <p className="followers__round-bio">DASTURCHI</p> */}
                    </div>
                    <button className="followers-btn">Unfollow</button>
                </div>

                <div className="followers border-bottom">
                    <div className="followers__round">
                        <img className="followers__round-img" src="https://avatars.githubusercontent.com/u/113175466?s=100&v=4" alt="person" />
                        <div className='followers__round--content'>
                            <p className="followers__round--content-name">Lochinbek</p>
                            <p className="followers__round--content-user">web-developer001</p>
                        </div>
                        {/* <p className="followers__round-bio">DASTURCHI</p> */}
                    </div>
                    <button className="followers-btn">Unfollow</button>
                </div>

            </div>
        </>
    );
};

export default index;