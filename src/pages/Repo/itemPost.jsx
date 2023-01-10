import React from 'react';

const itemPost = ({ array, limt, lastPage, active, paginate }) => {

    const point = [];
    for (let i = 0; i < Math.ceil(array.length / limt); i++) {
        point.push(i + 1);
    }

    return (
        <>
            <ul className="repo__list pt-3">

                {
                    array.length > 0 ?
                        lastPage.map((element, index) => (
                            <li className="repo__list--item border-top border-bottom pt-4 pb-2" key={index}>
                                <div className="repo__list--item--left">
                                    <a href={element.html_url} className="repo__list--item--left-name">{element.name}</a>
                                    <span className="repo__list--item--left-circle">{element.visibility}</span>
                                    <p className="repo__list--item--left-text">{element.description}</p>
                                    <div className="repo__list--item--left__down">
                                        <div className="repo__list--item--left__down--first">
                                            <button className="repo__list--item--left__down--first-round"></button>
                                            <p className="repo__list--item--left__down--first-text">{element.language}</p>
                                        </div>
                                        <p className="repo__list--item--left__down-date">Updated 5 days ago</p>
                                    </div>
                                </div>

                                <div className="repo__list--item--right">
                                    <div className="repo__list--item--right__btns">
                                        <button className="repo__list--item--right__btns-Sbtn"> <span className="repo__list--item--right__btns-Star"> <i class="bi bi-star"></i> </span> Star</button>
                                        <button className="repo__list--item--right__btns-iconBtn"> <span className="repo__list--item--right__btns-iconDrop"> <i class="bi bi-caret-down-fill"></i> </span> </button>
                                    </div>
                                    <hr className='repo__list--item--right-hr' />
                                </div>
                            </li>
                        )) : <h1>Loading . . .</h1>
                }

                <li className='list-unstyled'> 
                    <nav aria-label="Page navigation example">
                        <div className="pagination d-flex justify-content-center gap-2 mt-4 mb-5">
                            {point.map((item, id) => {
                                return (
                                    <div key={id}
                                        className={`page-item ${active === item ? "active" : ""}`}
                                        onClick={() => paginate(item)}
                                    >
                                        <a className="page-link" href="#">
                                            {item}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </nav>
                </li>

            </ul>



        </>
    );
};

export default itemPost;