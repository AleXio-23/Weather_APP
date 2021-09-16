import { useState } from 'react';
import Language from '../LanguageSelector/Language';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Selector from '../MetricSelector/Selector';
import Search from '../Search/Search';
import './Content.css';

const Content = () => {


    const selectOptions = [{ key: "C", value: "C" }, { key: "F", value: "F" }]

    const [selectedMetric, setMetric] = useState(selectOptions[0]);


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
                    Content
                </div>
            </div>
        </div>
    );
}

export default Content;
