import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import "./style.scss";

const index = () => {

    const { apiValue } = useContext(Context);
    const [array, setArray] = useState([]);

    const api = async () => {
        const request = await fetch(`https://api.github.com/users/${apiValue}/repos`);
        const result = await request.json();
        console.log(result);
        setArray(result);
    }

    useEffect(() => {
        api();
    }, [apiValue]);


    const [limt, setLimt] = useState(6);
    const [point, setPoint] = useState(1);

    const firstPoint = limt * point;
    const lastPoint = firstPoint - limt;

    const lastPage = array.slice(lastPoint, firstPoint)

    const paginate=(pageNumber)=> {
        setPoint(pageNumber)
    }
   

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

                    {
                        array.length > 0 ?
                            array.map((element, index) => (
                                <li className="repo__list--item border-top border-bottom pt-4 pb-2" key={index}>
                                    <div className="repo__list--item--left">
                                        <a href='#' className="repo__list--item--left-name">{element.name}</a>
                                        <span className="repo__list--item--left-circle">{element.visibility}</span>
                                        <p className="repo__list--item--left-text">{element.description}</p>
                                        <div className="repo__list--item--left__down">
                                            <div className="repo__list--item--left__down--first">
                                                <button className="repo__list--item--left__down--first-round"></button>
                                                <p className="repo__list--item--left__down--first-text">{element.language}</p>
                                            </div>
                                            <p className="repo__list--item--left__down-date">Updated {element.updated_at} ago</p>
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

                </ul>


                    


                {/* <div className="repo__pagi">
                    <button className="repo__pagi-btn">
                        <span className="repo__pagi-btn-left"> <i class="bi bi-chevron-left"></i> </span>
                        Previous</button>
                    <button className="repo__pagi-btn">Next
                        <span className="repo__pagi-btn-right"> <i class="bi bi-chevron-right"></i> </span>
                    </button>
                </div> */}

                

            </div>
        </>
    );
};

export default index;