import { useState } from 'react';
import ContentArea from '../ContentArea/ContentArea';
import Language from '../LanguageSelector/Language';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Selector from '../MetricSelector/Selector';
import Search from '../Search/Search';
import './Content.css';

const Content = () => {

    


    return (
        <div className="content">
            <div className="left-side">
                <LeftSideBar />
            </div>

            <div className="right-side">
                <div className="content-header">
                    <div className="search-area">
                        <Search />
                    </div>

                    <div className="metric-area">
                        <Selector />
                    </div>

                    <div className="language-area">
                        <Language />
                    </div>
                </div>


                <div className="content-area">
                    
                    <ContentArea/>
                </div>
            </div>
        </div>
    );
}

export default Content;
