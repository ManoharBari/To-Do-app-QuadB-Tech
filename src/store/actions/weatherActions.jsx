// src/actions/weatherActions.js

import axios from "axios";

const API_KEY = "637e8a344414d0e1fc6ca8214d30d397";

export const fetchWeather = (cityOrCoords) => async (dispatch) => {
    dispatch({ type: "FETCH_WEATHER_REQUEST" });

    try {
        let url;
        if (typeof cityOrCoords === "string") {
            // Fetch by city name
            url = `https://api.openweathermap.org/data/2.5/weather?q=${cityOrCoords}&units=metric&appid=${API_KEY}`;
        } else {
            // Fetch by coordinates
            const { latitude, longitude } = cityOrCoords;
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
        }

        const response = await axios.get(url);
        dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({
            type: "FETCH_WEATHER_FAILURE",
            payload: error.response ? error.response.data.message : "Network Error",
        });
    }
};
