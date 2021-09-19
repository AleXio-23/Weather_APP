

import './WindDailyDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { action as languageAction } from '../../../../Modules/Language';
import { useEffect, useState } from 'react';
import LanguagePack from '../../../../Tools/Language/LangDictionary';
import { LANG_GEO } from '../../../../Tools/Constants/LanguageConstants';
import { UNIT_CELSIUS, UNIT_FARENHEIT } from '../../../../Tools/Constants/ModulesConstants';

const WindDailyDetails = () => {
    const dispatch = useDispatch();

    const getSelectedLang = useSelector(state => state.languages);
    const selectedGlobalLang = getSelectedLang.language;


    const selectedUnitDt = useSelector(state => state.units);
    const selectedUnit = selectedUnitDt.unit;


    const [unitState, setUnitState] = useState('');


    useEffect(() => {
        if (selectedUnit === UNIT_CELSIUS) { setUnitState(getLanguageText('kmh_metric')) }
        if (selectedUnit === UNIT_FARENHEIT) { setUnitState(getLanguageText('mph_metric')) }
    }, [selectedUnit, selectedGlobalLang])



    useEffect(() => {
        dispatch(languageAction.GetLanguage.get());
    }, []);


    const currentWeatherData = useSelector(state => state.currentWeather);
    const getCurrentWeather = currentWeatherData.data;
    const [weatherState, setWeatherSate] = useState({});

    useEffect(() => {
        setWeatherSate(getCurrentWeather);
    }, [getCurrentWeather]);

    const getLanguageText = (fiendName) => {
        var getDataField = LanguagePack.find(x => x.name === fiendName);

        return selectedGlobalLang === LANG_GEO
            ? getDataField.name_ka
            : getDataField.name_en
    }


    return (
        <div className="daily-wind">
            <div className="wind-animation">
                <div className="first"></div>

                <div className="last"></div>
            </div>
            <div className="wind-info">
                <div className="area-title">
                    <span>{getLanguageText('wind_and_pressure')}</span>
                </div>
                <div className="area-descr">
                    <div className="wind-det-line ">
                        <div className="wind-det-desc " value="speend">{getLanguageText('speed')}</div>
                        <div className="wind-det-val">{weatherState?.wind?.speed}  {unitState}</div>
                    </div>
                    <div className="wind-det-line ">
                        <div className="wind-det-desc" value="pressure">{getLanguageText('pressure')}</div>
                        <div className="wind-det-val">{weatherState?.main?.pressure}</div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default WindDailyDetails;
