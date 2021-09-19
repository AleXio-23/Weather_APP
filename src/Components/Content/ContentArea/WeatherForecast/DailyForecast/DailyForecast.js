import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANG_GEO } from '../../../../../Tools/Constants/LanguageConstants';
import './DailyForecast.css';

import { action as languageAction } from '../../../../../Modules/Language';
import LanguagePack from '../../../../../Tools/Language/LangDictionary';
import DateDictPack from '../../../../../Tools/Language/DateDictionary';
const DailyForecast = () => {


    const getWeatherIcon = (param) => {
        return param?`http://openweathermap.org/img/wn/${param}@2x.png` : '';
    }

    const dispatch = useDispatch();
    const getSelectedLang = useSelector(state => state.languages);
    const selectedGlobalLang = getSelectedLang.language;

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        let generatedDate = `${result.getFullYear()}-${('0' + (result.getMonth() + 1)).slice(-2)}-${('0' + result.getDate()).slice(-2)}`;
        return generatedDate;
    }

    useEffect(() => {
        dispatch(languageAction.GetLanguage.get());
    }, []);


    const getLanguageText = (fiendName) => {
        var getDataField = LanguagePack.find(x => x.name === fiendName);

        if(!getDataField) {
            return (fiendName);
        }

        return selectedGlobalLang === LANG_GEO
            ? getDataField.name_ka
            : getDataField.name_en
    }

    const dailyWeatherDtselector = useSelector(state => state.dailyWeather);
    const dailyWeatherDt = dailyWeatherDtselector.data;


    const [dailyWeatherDtState, setDailyWeatherDtState] = useState([]);

    const findMinMax = (data, date) => {
        let minDt = 20000;
        let maxDt = 0;
        let icon = '';
        let descrip = '';
        data?.forEach(elem => {
            if (elem.dt_txt.includes(date)) {
                if (elem.main.temp_min < minDt) { minDt = elem.main.temp_min }
                if (elem.main.temp_max > maxDt) {
                    maxDt = elem.main.temp_max;
                    icon = elem.weather ? elem.weather[0].icon : '';
                    descrip = elem.weather? elem.weather[0].description: '';
                }
            }
        });

        const result = {
            temp_min: minDt,
            temp_max: maxDt,
            w_icon: icon,
            w_descrip: descrip
        }; 
        return result;
    }
    const getDateAlt = (type, num) => {

        var getDt = DateDictPack.find(x => x.type === type);
        var find = getDt.data.find(x => x.num === num);
 
        return (selectedGlobalLang === LANG_GEO)
            ? find.name_ka
            : find.name_en

    }

    const getDateShow = (date) => {
        var gDate = new Date(date);
        const state = {
            weekday: '',
            full_date: ''
        }

        let weeknum = gDate.getDay();
        let dayNum = gDate.getDate();
        let montNum = gDate.getMonth();

        state.weekday = getDateAlt("week", weeknum);
        state.full_date = `${dayNum} ${getDateAlt("month", montNum)}`;
        return state;
    }

    
  const selectedUnitDt = useSelector(state => state.units);
  const selectedUnit = selectedUnitDt.unit;

    useEffect(() => {
        let crDt = new Date();
        const eachDayDy = [];
        eachDayDy.push(
            {
                id: 1,
                min_max: findMinMax(dailyWeatherDt?.list, addDays(crDt, 1)),
                wt_date: getDateShow(addDays(crDt, 1))
            }
        );
        eachDayDy.push(
            {
                id: 2,
                min_max: findMinMax(dailyWeatherDt?.list, addDays(crDt, 2)),
                wt_date: getDateShow(addDays(crDt, 2))
            }
        );
        eachDayDy.push(
            {
                id: 3,
                min_max: findMinMax(dailyWeatherDt?.list, addDays(crDt, 3)),
                wt_date: getDateShow(addDays(crDt, 3))
            }
        );
        eachDayDy.push(
            {
                id: 4,
                min_max: findMinMax(dailyWeatherDt?.list, addDays(crDt, 4)),
                wt_date: getDateShow(addDays(crDt, 4))
            }
        );
        eachDayDy.push(
            {
                id: 5,
                min_max: findMinMax(dailyWeatherDt?.list, addDays(crDt, 5)),
                wt_date: getDateShow(addDays(crDt, 5))
            }
        );
        
        setDailyWeatherDtState(eachDayDy);
    }, [dailyWeatherDt, selectedGlobalLang, selectedUnit]);


    return (
        <div className="daily-forecast">
            {dailyWeatherDtState.map(wdt =>
                <div className="single-forecast" key={wdt?.id}>
                    <div className="fc-day">{wdt?.wt_date?.weekday}</div>
                    <div className="fc-date">{wdt?.wt_date?.full_date}</div>
                    <div className="fc-icon">
                        {
                            wdt?.min_max?.temp_min < 1000? 
                                
                        <img src={getWeatherIcon(wdt?.min_max?.w_icon)} alt="icon" title={getLanguageText(wdt?.min_max?.w_descrip)} />
                        : <span className="error-message">Data not found</span>
                        }
                    </div>
                    <div className="fc-temp-range">
                        <div className="fc-temp-min">{wdt?.min_max?.temp_min < 1000? wdt?.min_max?.temp_min?.toFixed(1) : '--'}°</div>
                        -
                        <div className="fc-temp-max">{wdt?.min_max?.temp_min < 1000? wdt?.min_max?.temp_max?.toFixed(1) : '--'}°</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DailyForecast;
