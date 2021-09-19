import Language from '../LanguageSelector/Language';
import Selector from '../MetricSelector/Selector';
import Search from '../Search/Search';
import DailyDetails from './DailyDetails/DailyDetails';
import HourlyToday from './HourlyToday/HourlyToday';
import './LeftSideBar.css';
import MainCityInfo from './MainCityInfo/MainCityInfo';
import WindDailyDetails from './WindDailyDetails/WindDailyDetails';

const LeftSideBar = () => {



    return (
        <div className="side-bar">
            
            
            <div className="sidebar-top">

                <div className="main-city-info">
                    <MainCityInfo />
                </div>
                <div className="daily-details-area">
                    <DailyDetails />
                </div>

            </div>

            <div className="sidebar-bottom ">
                <div className="wind-details">
                    <WindDailyDetails />
                </div>
                <div className="hourly-weather-today">
                    <HourlyToday />
                </div>
            </div>

        </div>
    );
}

export default LeftSideBar;
