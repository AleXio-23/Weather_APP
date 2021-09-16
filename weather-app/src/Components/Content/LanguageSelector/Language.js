import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCities } from '../../../Modules/City/Action/Index';
import { GetLanguage } from '../../../Modules/Language/Action/Index';
import { LANG_ENG, LANG_GEO } from '../../../Tools/Constants/LanguageConstants';
import './Language.css';

function Language() {


    // const metrics = [{ value: LANG_GEO, text: LANG_GEO }, { value: LANG_ENG, text: LANG_ENG }];
    // const [selectedMetric, setMetric] = useState(metrics[1]);


    const dispatch = useDispatch();
    const getSelectedLang = useSelector(state => state.languages);
    const selectedGlobalLang = getSelectedLang.language;

    const [selectedLang, setSelectedLang] = useState(selectedGlobalLang);

    useEffect(() => {
        dispatch(GetLanguage.get());
        setSelectedLang(selectedGlobalLang);
    }, []);

    useEffect(() => {
        setSelectedLang(selectedGlobalLang)
    }, [selectedGlobalLang]);


    const [dropdownHovered, setDropHover] = useState(false);

    const onMouseEvent = () => {
        setDropHover(true);
    }

    const optionClickEvent = (value) => {
        setDropHover(false);
        console.log("* " + value +" *");
        dispatch(GetLanguage.set(value));
    }




    return (
        <div className="selector" onMouseOver={() => onMouseEvent()} onMouseLeave={() => setDropHover(false)}>
            <div className={`selected-area  ${dropdownHovered ? 'border-rad-out' : 'border-rad-in'}`}>
                <span className="selected-value">{selectedLang}</span>
                <span className="arrow"><div className={`arrow-up ${dropdownHovered ? 'rotate-arrow' : ''} `}></div></span>
            </div>

            <div className={`options-area ${dropdownHovered ? 'sl-visible' : 'sl-InVisible'}  `}>
                <div className="option" onClick={() => optionClickEvent(LANG_GEO)}>{LANG_GEO}</div>
                <div className="option" onClick={() => optionClickEvent(LANG_ENG)}>{LANG_ENG}</div>

            </div>
        </div>
    );
}

export default Language;
