import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCities } from '../../../Modules/City/Action/Index';
import { GetLanguage } from '../../../Modules/Language/Action/Index';
import './Search.css';
import LanguagePack from '../../../Tools/Language/LangDictionary';
import { LANG_GEO } from '../../../Tools/Constants/LanguageConstants';
const  Search = () => {

  const ref = useRef(null);

  const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSearchFocues(false);
      }else {
        setSearchFocues(true);
      }
  };

  useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
          document.removeEventListener('click', handleClickOutside, true);
      };
  },[]);

  const dispatch = useDispatch();

  const stateData = useSelector(state => state.cities);
  const cityData = stateData.data;

  const getSelectedLang = useSelector(state => state.languages);
  const selectedGlobalLang = getSelectedLang.language;

  useEffect(() => {
    dispatch(GetCities.get(''));
  }, []);


  useEffect(() => {
    dispatch(GetLanguage.get());
  }, []);


  const [searchFocused, setSearchFocues] = useState(false);

  const testClick = (event) => {
    // if (event.target.matches('.search-input')) {
    //   setSearchFocues(true);
    // } else {
    //   setSearchFocues(false);
    // }
  }

  const [selectedItem, setItem] = useState({
    searchParam: null
  });

  useEffect(() => {
    if (!selectedItem.searchParam) {
      dispatch(GetCities.get(''));
    } else {

      dispatch(GetCities.get(selectedItem.searchParam));
    }

  }, [selectedItem.searchParam]);

  const onItemClickHandler = (param) => {
    // let obj = mappedDt.filter(x => x.id === param);
    setItem({
      searchParam: null,
      ...param
    });

    setSearchFocues(false);

  }

  const handleChange = (keyword) => {
    setItem({
      searchParam: keyword
    })
  }


  const getLanguageText = (fiendName) => {
      var getDataField = LanguagePack.find(x => x.name === fiendName);
      console.log(selectedGlobalLang + "   /");
      
      return selectedGlobalLang === LANG_GEO
          ? getDataField.name_ka
          : getDataField.name_en
  }


  const testa = 'aleko';





  return (
    <div ref={ref} className={`search-bar ${searchFocused ? "border-rad-out" : "border-rad-in "}`} onClick={(event) => testClick(event)} >
      <div className="input-area">
        <input className={`search-input ${searchFocused ? "border-rad-out " : "border-rad-in "}`}
          autoComplete="off"
          tabIndex="0"
          placeholder={getLanguageText('SearchCity')}
          value={selectedItem?.searchParam ? selectedItem?.searchParam : (selectedGlobalLang === LANG_GEO ? selectedItem?.name_ka: selectedItem?.name_en) || ''}
          onChange={(event) => handleChange(event.target.value)}
        />
        <span className="arrow"><div className={`arrow-up ${searchFocused ? 'rotate-arrow' : ''} `}></div></span>
      </div>
      <div className={`selectable-area menu ${searchFocused ? "sl-visible border-btm" : "sl-InVisible"}`}>
        {cityData.map(ct =>
          <div className='item city-item' key={ct.id} onClick={() => onItemClickHandler(ct)}>{selectedGlobalLang === LANG_GEO? ct.name_ka: ct.name_en}</div>
        )}

      </div>
    </div>
  );
}

export default Search;
