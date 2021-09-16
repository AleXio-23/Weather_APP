import { useDispatch, useSelector } from 'react-redux';
import './DailyDetails.css';
import { action as languageAction } from '../../../../Modules/Language';
import { useEffect } from 'react';
import LanguagePack from '../../../../Tools/Language/LangDictionary';
import { LANG_GEO } from '../../../../Tools/Constants/LanguageConstants';

const DailyDetails = () => {

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
        <div className="daily-details">
            <div className="det-line ">
                <div className={`det-desc ${selectedGlobalLang === LANG_GEO? 'font-size-geo': 'font-size-eng' } `} value="feels_like">{getLanguageText('feels_like')}</div>
                <div className="det-val">23.5</div>
            </div>
            <div className="det-line ">
                <div className={`det-desc ${selectedGlobalLang === LANG_GEO? 'font-size-geo': 'font-size-eng' } `} value="temp_min">{getLanguageText('temp_min')}</div>
                <div className="det-val">23.5</div>
            </div>
            <div className="det-line ">
                <div className={`det-desc ${selectedGlobalLang === LANG_GEO? 'font-size-geo': 'font-size-eng' } `} value="temp_max">{getLanguageText('temp_max')}</div>
                <div className="det-val">23.5</div>
            </div>

            <div className="det-line ">
                <div className={`det-desc ${selectedGlobalLang === LANG_GEO? 'font-size-geo': 'font-size-eng' } `} value="pressure">{getLanguageText('pressure')}</div>
                <div className="det-val">1009</div>
            </div>

            <div className="det-line ">
                <div className={`det-desc ${selectedGlobalLang === LANG_GEO? 'font-size-geo': 'font-size-eng' } `} value="humidity">{getLanguageText('humidity')}</div>
                <div className="det-val">57%</div>
            </div>

        </div>
    );
}

export default DailyDetails;
