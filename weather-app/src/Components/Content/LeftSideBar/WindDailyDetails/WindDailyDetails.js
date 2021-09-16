

import './WindDailyDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { action as languageAction } from '../../../../Modules/Language';
import { useEffect } from 'react';
import LanguagePack from '../../../../Tools/Language/LangDictionary';
import { LANG_GEO } from '../../../../Tools/Constants/LanguageConstants';

const  WindDailyDetails = () => {
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
                        <div className="wind-det-val">13.89  {getLanguageText('kmh_metric')}</div>
                    </div> 
                    <div className="wind-det-line ">
                        <div className="wind-det-desc" value="pressure">{getLanguageText('pressure')}</div>
                        <div className="wind-det-val">1009</div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default WindDailyDetails;
