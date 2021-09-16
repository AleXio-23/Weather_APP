import { useState } from 'react';
import './Selector.css';

function Selector() {

  const [dropdownHovered, setDropHover] = useState(false);
  const metrics = [{ value: "C", text: "C°" }, { value: "F", text: "F°" }];
  const [selectedMetric, setMetric] = useState(metrics[0]);

  const onMouseEvent = () => {
    setDropHover(true);
  }

  const optionClickEvent = (value) => {
    setMetric(value);
    setDropHover(false);
  } 

  return (
    <div className="selector"  onMouseOver={() => onMouseEvent()} onMouseLeave={() => setDropHover(false)}>
      <div className={`selected-area  ${dropdownHovered? 'border-rad-out' : 'border-rad-in'}`}>
        <span className="selected-value">{selectedMetric.text}</span>
        <span className="arrow"><div className={`arrow-up ${dropdownHovered ? 'rotate-arrow' : ''} `}></div></span>
      </div>

      <div className={`options-area ${dropdownHovered ? 'sl-visible': 'sl-InVisible'}  `}>
        {metrics.map(m =>
           <div className="option" key={m.value} onClick={() => optionClickEvent(m)}>{m.text}</div>
        )}
      </div>
    </div>
  );
}

export default Selector;
