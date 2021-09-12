import React from 'react';
import './Main.css'
import json from '../data/info.json'



const Main = () => {

    return (

        <div className={'main'}>

            {json.main.map(el =>
            <section>
                <h1>{el.title}</h1>
                <div>{el.body}</div>

            </section>
            )}

        </div>
    );
};

export default Main;