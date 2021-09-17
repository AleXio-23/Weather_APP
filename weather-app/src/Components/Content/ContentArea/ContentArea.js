import { useState } from 'react';
import './ContentArea.css'
import WeatherForecast from './WeatherForecast/WeatherForecast';

const ContentArea = () => {

    const initialForecastState = {
        daily: true,
        hourly: false
    };

    const [forecastState, setForecastState] = useState(initialForecastState);

    return (
        <div className="content-body">
           <WeatherForecast/>
           
        </div>
    );
}



export default ContentArea;