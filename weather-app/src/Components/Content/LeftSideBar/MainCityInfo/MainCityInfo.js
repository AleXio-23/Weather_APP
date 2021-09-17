import { useEffect, useState } from 'react';
import './MainCityInfo.css';
import DateDictPack from '../../../../Tools/Language/DateDictionary';
import { useDispatch, useSelector } from 'react-redux';
import { action as languageAction } from '../../../../Modules/Language';
import LangDictionary from '../../../../Tools/Language/LangDictionary';
import { LANG_GEO } from '../../../../Tools/Constants/LanguageConstants';

const MainCityInfo = () => {


    const dispatch = useDispatch();

    const getSelectedLang = useSelector(state => state.languages);
    const selectedGlobalLang = getSelectedLang.language;


    const currentWeatherData = useSelector(state => state.currentWeather);
    const getCurrentWeather = currentWeatherData.data;

    const selectedCity = useSelector(state => state.selectedCity);
    const getSelectedCity = selectedCity.data;

    const [weatherState, setWeatherSate] = useState({});
    
    useEffect(() => {
        setWeatherSate(getCurrentWeather);
    }, [getCurrentWeather]);

    useEffect(() => {
        dispatch(languageAction.GetLanguage.get());
    }, []);

    

    const getWeatherIcon = (param) => {
        return `http://openweathermap.org/img/wn/${param}.png`;
    }





    const today = new Date();

    const [weekDay, setWeekDay] = useState(today.getDay());
    const [month, setMonth] = useState(today.getMonth());
    const [date, setDate] = useState(today.getDate());
    const [hours, setHours] = useState(today.getHours());
    const [minutes, setMinutes] = useState(today.getMinutes());
    const [seconds, setSeconds] = useState(today.getSeconds());


    useEffect(() => {
        setWeekDay(today.getDay());
        setMonth(today.getMonth());
        setDate(today.getDate());
        setHours(today.getHours());
        setMinutes(today.getMinutes());
        setSeconds(today.getSeconds());
    }, [today]);

    const getDateAlt = (type, num) => {

        var getDt = DateDictPack.find(x => x.type === type);
        var find = getDt.data.find(x => x.num === num);

        return (selectedGlobalLang === LANG_GEO)
            ? find.name_ka
            : find.name_en

    }

    const getLanguageText = (fiendName) => {
        var getDataField = LangDictionary.find(x => x.name === fiendName);

        if(!getDataField) {
            return (fiendName);
        }

        return selectedGlobalLang === LANG_GEO
            ? getDataField.name_ka
            : getDataField.name_en
    }


    return (
        <div className="main-info">
            <div className="citi-name">{selectedGlobalLang === LANG_GEO ? getSelectedCity.name_ka : getSelectedCity.name_en}</div>
            <div className="current-date">{getDateAlt("week", weekDay)}, {date} {getDateAlt("month", month)}</div>
            <div className="current-time">{hours}:{minutes}:{seconds}</div>
            <div className="current-weather-inf">
                <div className="cur-weather-icon">
                    <img src={weatherState.weather ? getWeatherIcon(weatherState.weather[0].icon) : null} alt="weather_icon" />
                </div>
                <div className="cur-weather-temp">
                    <span>{weatherState?.main?.temp.toFixed(1)}°</span>
                </div>
            </div>
            <div className="cur-weather-descrip">
                <span>{weatherState.weather ? getLanguageText(weatherState.weather[0].description): null}</span>
            </div>
        </div>
    );
}

export default MainCityInfo;
