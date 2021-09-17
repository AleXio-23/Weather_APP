import { useDispatch, useSelector } from 'react-redux';
import './WeatherForecast.css'

import { action as languageAction } from '../../../../Modules/Language';
import { LANG_GEO } from '../../../../Tools/Constants/LanguageConstants';
import { useEffect } from 'react';
import LanguagePack from '../../../../Tools/Language/LangDictionary';


const WeatherForecast = () => {
    const iconUrl = "http://openweathermap.org/img/wn/10d@2x.png";


    const dispatch = useDispatch();
    const getSelectedLang = useSelector(state => state.languages);
    const selectedGlobalLang = getSelectedLang.language;


    useEffect(() => {
        dispatch(languageAction.GetLanguage.get());
    }, []);

    const getLanguageText = (fiendName) => {
        var getDataField = LanguagePack.find(x => x.name === fiendName);

        return selectedGlobalLang === LANG_GEO
            ? getDataField.name_ka
            : getDataField.name_en
    }


    return (
        <div className="weather-forecast">
            <div className="forecast-header">
                <div className="header-btn">{getLanguageText("weahter_hourly")}</div>
                <div className="header-btn header-btn-active">5 {getLanguageText("weather_daily")}</div>

            </div>
            <div className="forecast-body">
                <div className="forecast-body-title">
                    {getLanguageText('weather_daily_title')}
                </div>
                <div className="forecast-content">

                    <div className="single-forecast">
                        <div className="fc-day">ორშაბათი</div>
                        <div className="fc-date">16 სექტემბერი</div>
                        <div className="fc-icon">
                            <img src={iconUrl} alt="icon" />
                        </div>
                        <div className="fc-temp-range">
                            <div className="fc-temp-min">23°</div>
                            <div className="fc-temp-max">25°</div>
                        </div>
                    </div>


                    <div className="single-forecast">
                        <div className="fc-day">ორშაბათი</div>
                        <div className="fc-date">16 სექტემბერი</div>
                        <div className="fc-icon">
                            <img src={iconUrl} alt="icon" />
                        </div>
                        <div className="fc-temp-range">
                            <div className="fc-temp-min">23°</div>
                            <div className="fc-temp-max">25°</div>
                        </div>
                    </div>

                    <div className="single-forecast">
                        <div className="fc-day">ორშაბათი</div>
                        <div className="fc-date">16 სექტემბერი</div>
                        <div className="fc-icon">
                            <img src={iconUrl} alt="icon" />
                        </div>
                        <div className="fc-temp-range">
                            <div className="fc-temp-min">23°</div>
                            <div className="fc-temp-max">25°</div>
                        </div>
                    </div>


                    <div className="single-forecast">
                        <div className="fc-day">ორშაბათი</div>
                        <div className="fc-date">16 სექტემბერი</div>
                        <div className="fc-icon">
                            <img src={iconUrl} alt="icon" />
                        </div>
                        <div className="fc-temp-range">
                            <div className="fc-temp-min">23°</div>
                            <div className="fc-temp-max">25°</div>
                        </div>
                    </div>

                    <div className="single-forecast">
                        <div className="fc-day">ორშაბათი</div>
                        <div className="fc-date">16 სექტემბერი</div>
                        <div className="fc-icon">
                            <img src={iconUrl} alt="icon" />
                        </div>
                        <div className="fc-temp-range">
                            <div className="fc-temp-min">23°</div>
                            <div className="fc-temp-max">25°</div>
                        </div>
                    </div>





















                </div>

            </div>
        </div>
    );
}


export default WeatherForecast;