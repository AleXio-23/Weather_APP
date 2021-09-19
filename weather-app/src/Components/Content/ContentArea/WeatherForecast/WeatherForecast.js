import { useDispatch, useSelector } from 'react-redux';
import './WeatherForecast.css'

import { action as languageAction } from '../../../../Modules/Language';
import { LANG_GEO } from '../../../../Tools/Constants/LanguageConstants';
import { useEffect, useState } from 'react';
import LanguagePack from '../../../../Tools/Language/LangDictionary';
import DateDictPack from '../../../../Tools/Language/DateDictionary';
import DailyForecast from './DailyForecast/DailyForecast';
import HourlyForecast from './HourlyForecast/HourlyForecast';


const WeatherForecast = () => {
  
    

    const forecastStatus = {
        isHourlyActive: false,
        isDailyActive: true
    }

    const [forecastState, setForecastState] = useState(forecastStatus);

    const getSelectedLang = useSelector(state => state.languages);
    const selectedGlobalLang = getSelectedLang.language;


    const forecastStateChangeListener = (state) => {
        setForecastState(state);
    }
    const getLanguageText = (fiendName) => {
        var getDataField = LanguagePack.find(x => x.name === fiendName);

        return selectedGlobalLang === LANG_GEO
            ? getDataField.name_ka
            : getDataField.name_en
    }



    return (
        <div className="weather-forecast">
            <div className="forecast-header">
                <div className={`header-btn ${forecastState.isHourlyActive ? 'header-btn-active' : ''}`} onClick={() => forecastStateChangeListener({ isHourlyActive: true, isDailyActive: false })}>{getLanguageText("weahter_hourly")}</div>
                <div className={`header-btn ${forecastState.isDailyActive ? 'header-btn-active' : ''}`} onClick={() => forecastStateChangeListener({ isHourlyActive: false, isDailyActive: true })}>5 {getLanguageText("weather_daily")}</div>

            </div>
            <div className="forecast-body">
                <div className="forecast-body-title">
                    {forecastState.isHourlyActive
                        ? getLanguageText('weather_hourly_title')
                        : (forecastState.isDailyActive
                            ? getLanguageText('weather_daily_title') : '')}
                </div>
                {forecastState.isDailyActive ?
                    <div className="forecast-content">
                        <DailyForecast />
                    </div> :
                    (forecastState.isHourlyActive ? 
                    <div className="forecast-content">
                        <HourlyForecast/>
                    </div> : '')
                }

            </div>
        </div>
    );
}


export default WeatherForecast;