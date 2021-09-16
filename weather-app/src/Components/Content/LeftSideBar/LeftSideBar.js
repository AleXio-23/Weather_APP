import DailyDetails from './DailyDetails/DailyDetails';
import './LeftSideBar.css';
import MainCityInfo from './MainCityInfo/MainCityInfo';
import WindDailyDetails from './WindDailyDetails/WindDailyDetails';

const LeftSideBar = () => {



    return (
        <div className="side-bar">
            <div className="main-city-info">
                <MainCityInfo/>
            </div>
            <div className="daily-details">
                <DailyDetails/>
            </div>

            <div className="wind-details">
                <WindDailyDetails/>
            </div>

        </div>
    );
}

export default LeftSideBar;
