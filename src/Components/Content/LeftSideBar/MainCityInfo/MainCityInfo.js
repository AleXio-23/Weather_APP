import { useEffect, useState, useRef } from 'react';
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
    
  const selectedUnitDt = useSelector(state => state.units);
  const selectedUnit = selectedUnitDt.unit;


    useEffect(() => {
        setWeatherSate(getCurrentWeather);
    }, [getCurrentWeather, selectedUnit]);

    useEffect(() => {
        dispatch(languageAction.GetLanguage.get());
    }, []);

    const getDateAlt = (type, num) => {

        var getDt = DateDictPack.find(x => x.type === type);
        var find = getDt.data.find(x => x.num === num);

        return (selectedGlobalLang === LANG_GEO)
            ? find.name_ka
            : find.name_en

    }


    const getWeatherIcon = (param) => {
        return `http://openweathermap.org/img/wn/${param}.png`;
    }


    const [currentDate, setCurrentDate] = useState({
        weekDay: getDateAlt("week", new Date().getDay()),
        month: getDateAlt("month", new Date().getMonth()),
        date: new Date().getDate(),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()

    });


    const interval = useRef(null)
    const startCounter = () => interval.current = setInterval(() => {
        setCurrentDate({
            weekDay: getDateAlt("week", new Date().getDay()),
            month: getDateAlt("month", new Date().getMonth()),
            date: new Date().getDate(),
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds()
    
        }); 
    }, 1000)
    const stopCounter = () => clearInterval(interval.current)

    

    useEffect(() => {
        startCounter();
        return () => stopCounter()
    }, [currentDate])


    const getLanguageText = (fiendName) => {
        var getDataField = LangDictionary.find(x => x.name === fiendName);

        if (!getDataField) {
            return (fiendName);
        }

        return selectedGlobalLang === LANG_GEO
            ? getDataField.name_ka
            : getDataField.name_en
    }


    return (
        <div className="main-info">
            <div className="citi-name">{selectedGlobalLang === LANG_GEO ? getSelectedCity.name_ka : getSelectedCity.name_en}</div>
            <div className="current-date">{currentDate.weekDay}, {currentDate.date} {currentDate.month}</div>
            <div className="current-time">{currentDate.hours}:{currentDate.minutes}:{currentDate.seconds}</div>
            <div className="current-weather-inf">
                <div className="cur-weather-icon">
                    <img src={weatherState.weather ? getWeatherIcon(weatherState.weather[0].icon) : null} alt="weather_icon" />
                </div>
                <div className="cur-weather-temp">
                    <span>{weatherState?.main?.temp.toFixed(1)}°</span>
                </div>
            </div>
            <div className="cur-weather-descrip">
                <span>{weatherState.weather ? getLanguageText(weatherState.weather[0].description) : null}</span>
            </div>
        </div>
    );
}

export default MainCityInfo;
