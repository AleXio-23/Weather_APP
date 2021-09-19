import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Selector.css';
import {action as unitAction} from '../../../Modules/Unit';
import { UNIT_CELSIUS, UNIT_FARENHEIT } from '../../../Tools/Constants/ModulesConstants';

const Selector = () => {


  const dispatch = useDispatch();
  const getUnit = useSelector(state => state.units);
  const selectedUnit = getUnit.unit;

  const [dropdownHovered, setDropHover] = useState(false);
  
  const [selectedMetric, setMetric] = useState(selectedUnit);

  useEffect(()=> {
    dispatch(unitAction.getUnit.get());
    setMetric(selectedUnit);
  }, []);

  useEffect(() => {
    setMetric(selectedUnit)
  }, [selectedUnit]);

  const onMouseEvent = () => {
    setDropHover(true);
  }

  const optionClickEvent = (value) => {
    dispatch(unitAction.getUnit.set(value));
    setDropHover(false);
  } 

  const getUnitAnalog = (unit) => {
    return unit === UNIT_CELSIUS ? 'C°' : (unit === UNIT_FARENHEIT? 'F°' : '');
      
  }

  return (
    <div className="selector"  onMouseOver={() => onMouseEvent()} onMouseLeave={() => setDropHover(false)}>
      <div className={`selected-area  ${dropdownHovered? 'border-rad-out' : 'border-rad-in'}`}>
        <span className="selected-value">{getUnitAnalog(selectedMetric)}</span>
        <span className="arrow"><div className={`arrow-up ${dropdownHovered ? 'rotate-arrow' : ''} `}></div></span>
      </div>

      <div className={`options-area ${dropdownHovered ? 'sl-visible': 'sl-InVisible'}  `}>
        
          <div className="option" onClick={() => optionClickEvent(UNIT_CELSIUS)}>C°</div>
          <div className="option" onClick={() => optionClickEvent(UNIT_FARENHEIT)}>F°</div>
        
      </div>
    </div>
  );
}

export default Selector;
