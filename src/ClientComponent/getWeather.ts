interface GetWeatherInterface {
    cityName: string,
    cityId?: string,
    cityCountry?: string

}

const getWeather = async (data: GetWeatherInterface) => {
    let fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.cityName}&APIKEY=8004ec5d469862255ead99a28fafbe12&units=metric&lang=pl`);
    if (fetchData.status !== 200) {
        throw new Error('cannot fetch this city!');
    } else {
        let returnData = await fetchData.json();
        return {
            lon: returnData.coord.lon,
            lat: returnData.coord.lat,
            temp: returnData.main.temp,
            description: returnData.weather[0].description,
            pressure: returnData.main.pressure,
            humidity: returnData.main.humidity,
            wind: returnData.wind.speed,

        };
    }

}

export default getWeather;