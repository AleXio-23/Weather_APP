import { useDispatch, useSelector } from 'react-redux';
import './HourlyToday.css';

import { action as languageAction } from '../../../../Modules/Language';
import LanguagePack from '../../../../Tools/Language/LangDictionary';
import { useEffect, useState } from 'react';
import { LANG_GEO } from '../../../../Tools/Constants/LanguageConstants';
import { object } from 'prop-types';


const HourlyToday = () => {

    const todayDt = new Date();
    let generatedDate = `${todayDt.getFullYear()}-${('0' + (todayDt.getMonth() + 1)).slice(-2)}-${('0' + todayDt.getDate()).slice(-2)}`;

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


    const hourlyWeahterDtselector = useSelector(state => state.dailyWeather);
    const hourlyWeahterDt = hourlyWeahterDtselector.data;


    const [hourlyWeatherDtState, setHourlyWeatherDtState] = useState([]);

    const selectedUnitDt = useSelector(state => state.units);
    const selectedUnit = selectedUnitDt.unit;


    useEffect(() => {

        const todaysWeather = [];
        let counter = 0;
        let object_to_add = {
            right: {},
            left: {}
        };
        hourlyWeahterDt?.list?.forEach(hr => {
            if (hr.dt_txt.includes(generatedDate)) {
                if (counter % 2 === 1) {
                    object_to_add.right = hr;
                } else if (counter % 2 === 0) {
                    object_to_add.left = hr;
                }

                counter++;
                if (counter % 2 === 0) {
                    todaysWeather.push(object_to_add);
                    object_to_add = {
                        right: {},
                        left: {}
                    };
                }
            }
        });

        setHourlyWeatherDtState(todaysWeather);

    }, [hourlyWeahterDt, selectedGlobalLang, selectedUnit]);

    useEffect(() => {

        console.log(hourlyWeatherDtState);
    }, [hourlyWeatherDtState])


    const getWeatherIcon = (param) => {
        return param ? `http://openweathermap.org/img/wn/${param}@2x.png` : '';
    }

    const getTImeFromObj = (date) => {
        return date?.substr(date?.length - 8, 5);
    }




    return (
        <div className="hourly-details">

            <div className="title-name">
                <span>Hourly Today   </span>
            </div>

            <div className="hrl-det-area">
                {hourlyWeatherDtState.map(wh =>
                    <div className="det-line " key={wh?.left.dt}>
                        <div className="det-left">
                            <div className={`det-desc`} value="feels_like" >{getTImeFromObj(wh?.left?.dt_txt)}</div>
                            <div className="det-val">{wh?.left?.main?.temp?.toFixed(1)}°</div>
                        </div>
                        <div className="det-right">

                            <div className={`det-desc`} value="feels_like">{getTImeFromObj(wh?.right?.dt_txt)}</div>
                            <div className="det-val">{wh?.right?.main?.temp?.toFixed(1)}°</div>
                        </div>
                    </div>
                )}
            </div>






        </div>
    );
}

export default HourlyToday;
