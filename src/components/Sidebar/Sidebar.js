import React from 'react';
import './Sidebar.css'
import json from "../data/info.json";

const Sidebar = () => {

    return (
        <div className={'sidebar'}>
            <ul>
                {json.main.map(el => <li>{el.title}</li>)}
            </ul>
        </div>
    );
};

export default Sidebar;