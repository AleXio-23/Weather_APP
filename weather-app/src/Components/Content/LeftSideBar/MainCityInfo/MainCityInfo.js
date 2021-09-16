import { useEffect, useState } from 'react';
import './MainCityInfo.css';
import DateDictPack from '../../../../Tools/Language/DateDictionary';
import { useDispatch, useSelector } from 'react-redux';
import { action as languageAction } from '../../../../Modules/Language';
import { LANG_GEO } from '../../../../Tools/Constants/LanguageConstants';

const MainCityInfo = () => {

    const iconUrl= "http://openweathermap.org/img/wn/10d@2x.png";

    const dispatch = useDispatch();

    const getSelectedLang = useSelector(state => state.languages);
    const selectedGlobalLang = getSelectedLang.language;


    useEffect(() => {
        dispatch(languageAction.GetLanguage.get());
    }, []);



    const today = new Date();

    const [weekDay, setWeekDay] = useState(today.getDay());
    const [month, setMonth] = useState(today.getMonth());
    const [date, setDate] = useState(today.getDate());
    const [hours, setHours]= useState(today.getHours());
    const [minutes, setMinutes] = useState(today.getMinutes());
    const [seconds, setSeconds] = useState(today.getSeconds());



    console.log(today.getDay());
    console.log(today.getMonth());
    console.log(today.getDate());


    useEffect(() => {
        setWeekDay(today.getDay());
        setMonth(today.getMonth());
        setDate(today.getDate());
        setHours(today.getHours());
        setMinutes(today.getMinutes());
        setSeconds(today.getSeconds());
    }, [today]);

    const getDateAlt = (type, num) => {

        var getDt =  DateDictPack.find(x => x.type === type);
        var find = getDt.data.find(x => x.num === num);

        return (selectedGlobalLang === LANG_GEO)
            ? find.name_ka
            : find.name_en
        
    }
    

    return (
        <div className="main-info">
            <div className="citi-name">თბილისი</div>
            <div className="current-date">{getDateAlt("week", weekDay)}, {date} {getDateAlt("month", month)}</div>
            <div className="current-time">{hours}:{minutes}:{seconds}</div>
            <div className="current-weather-inf">
                <div className="cur-weather-icon">
                    <img src={iconUrl} alt="weather_icon"/>
                </div>
                <div className="cur-weather-temp">
                    <span>21°</span>
                </div>
            </div>
            <div className="cur-weather-descrip">
                <span>ნაწილობრივ წვიმიანი</span>
            </div>
        </div>
    );
}

export default MainCityInfo;
