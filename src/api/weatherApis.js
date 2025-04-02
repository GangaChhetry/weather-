import axios from "axios";
const apiKey = import.meta.env.VITE_OPEN_WEATHER_SECREATE_KEY

export async function weatherByLocation() {

    if (!navigator.geolocation) {
        throw new Error(" Geolocation is not supported by this browser.");
    }

    const getPosition = () => {

        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)

        })
    }

    const position = await getPosition()
    const { latitude, longitude } = position.coords;
    try {

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        );
        return response.data;
    } catch {
        throw new Error("Failed to fetch weather data.");
    }
}

export async function weatherByCity(city) {
    try {

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        //our data save in setweather state
        return response.data
    }
    catch (error) {
        console.log('error not etching', error)
    }
}









