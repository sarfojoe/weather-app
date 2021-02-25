import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "f5baf4a4ecec8afcb8aa07f93da4763b";

export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};
