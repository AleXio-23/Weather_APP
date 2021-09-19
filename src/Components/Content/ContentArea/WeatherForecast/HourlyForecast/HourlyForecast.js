import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HourlyForecast.css'

import LanguagePack from '../../../../../Tools/Language/LangDictionary';
import DateDictPack from '../../../../../Tools/Language/DateDictionary';

import { action as languageAction } from '../../../../../Modules/Language';
import { LANG_GEO } from '../../../../../Tools/Constants/LanguageConstants';



const HourlyForecast = () => {

    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    let generatedDate = `${tomorrowDate.getFullYear()}-${('0' + (tomorrowDate.getMonth() + 1)).slice(-2)}-${('0' + tomorrowDate.getDate()).slice(-2)}`;


    const dispatch = useDispatch();
    const getSelectedLang = useSelector(state => state.languages);
    const selectedGlobalLang = getSelectedLang.language;

    useEffect(() => {
        dispatch(languageAction.GetLanguage.get());
    }, []);

    const getLanguageText = (fiendName) => {
        var getDataField = LanguagePack.find(x => x.name === fiendName);

        if (!getDataField) {
            return (fiendName);
        }

        return selectedGlobalLang === LANG_GEO
            ? getDataField.name_ka
            : getDataField.name_en
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

    const dailyWeatherDtselector = useSelector(state => state.dailyWeather);
    const dailyWeatherDt = dailyWeatherDtselector.data;


    const [hourlyWeatherDtState, setHourlyWeatherDtState] = useState([]);
    
  const selectedUnitDt = useSelector(state => state.units);
  const selectedUnit = selectedUnitDt.unit;


    useEffect(() => {

        const tomorrowWeather = [];
        dailyWeatherDt?.list?.forEach(hr => {
            if (hr.dt_txt.includes(generatedDate)) {
                tomorrowWeather.push(hr);
            }
        });

        setHourlyWeatherDtState(tomorrowWeather);
         
    }, [dailyWeatherDt, selectedGlobalLang, selectedUnit])


    const getWeatherIcon = (param) => {
        return param ? `http://openweathermap.org/img/wn/${param}@2x.png` : '';
    }

    const getTImeFromObj = (date) => {
        return date?.substr(date?.length - 8, 5);
    }




    return (
        <div className="hourly-forecast">
            {hourlyWeatherDtState.map(wdt =>
                <div className="single-cast-area"key={wdt?.dt}>
                    <div className="single-forecast" >
                        <div className="fc-time">{getTImeFromObj(wdt?.dt_txt)}</div>
                        <div className="fc-date">{getDateShow(generatedDate)?.full_date}</div>
                        <div className="fc-icon">
                            <img src={getWeatherIcon(wdt?.weather ? wdt?.weather[0].icon : '')} alt="icon" title={wdt?.weather ? getLanguageText(wdt?.weather[0].description) : ''} />
                        </div>
                        <div className="fc-temp-range">
                            <div className="fc-temp-min">{wdt?.main?.temp?.toFixed(1)}°</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default HourlyForecast;