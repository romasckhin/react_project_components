import React from 'react';
import './App.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

const App = () => {

    return (

        <div className={'container'}>

            <Header/>
            <Main/>
            <Footer/>
            <Sidebar/>
        </div>
    );
};

export default App;