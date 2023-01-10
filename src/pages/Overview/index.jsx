import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
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

    return (
        <>
            <div className="overview">

                <div className="overview__up">
                    <p className="overview__up-text1">Popular repositories</p>
                    <p className="overview__up-text2">Customize your pins</p>
                </div>

                <ul className="overview__list">
                    {
                        array.length > 0 ? array.map((element, index) => (
                            <li key={index} className="overview__list--item">
                                <div className="overview__list--item--up">
                                    <a className='overview__list--item--up-link' href="#">{element.name}</a>
                                    <span className='overview__list--item--up-circle'>{element.visibility}</span>
                                </div>
                                <p className="overview__list--item-text">{element.description}</p>
                                <div className='overview__list--item--down'>
                                    <button className='overview__list--item--down-round'></button>
                                    <p className="overview__list--item--down-text2">{element.language}</p>
                                </div>
                            </li>
                        )) : <h1 className='loading'>Loading . . .</h1>
                    }
                </ul>

            </div>
        </>
    );
};

export default index;