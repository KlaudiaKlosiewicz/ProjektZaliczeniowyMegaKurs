import React, {useState, useEffect} from 'react';
import getWeather from './getWeather'
import DisplayWeatherCard from '../DisplayWeatherCard/DisplayWeatherCard'
import QueryField from '../QueryField/QueryField'
import Layout from '../Layout/Layout';
import Header from '../Header/Header';

const ClientComponent = () => {
    const [cityName, setCityName] = useState("Warszawa");
    const [weatherData, setWeatherData] = useState({lon: '', lat: '', temp: 0, description: ''});

    const getWeatherData = () => {
        getWeather({cityName: cityName}).then(data => setWeatherData(data));
    }
    const handleTextInputEvent = (item: string) => {
        setCityName(item);
    }
    return (
        <Layout>
            <Header/>
            <QueryField buttonEventListener={getWeatherData} inputChangeEventListener={handleTextInputEvent}/>
            {weatherData.lon !== '' &&
                <DisplayWeatherCard cityName={cityName} data={weatherData}/>
            }

        </Layout>
    )

}

export default ClientComponent;