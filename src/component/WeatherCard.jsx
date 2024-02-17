import React from "react";

const WeatherCard = ({ data, location }) => {
  return (
    <div className="w-[500px] h-[300px] my-3 mx-auto bg-gray-300 rounded-3xl ">
      <div className="flex justify-between py-5 px-5 ">
        <p className="font-bold">{data.dt_txt}</p>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
          className="w-[120px]"
        />
        <p className="text-2xl font-bold">{data.main.temp}°C</p>
      </div>
      <p className="px-5 my-2 text-2xl font-bold">{location}</p>
      <hr className="border-black" />
      <div className="flex justify-between px-5 py-2 text-yellow-500 text-base font-bold">
        <p>RealFeel {data.main.feels_like}°C</p>
        <p>Humidity {data.main.humidity}%</p>
      </div>

      <div className="flex justify-between px-5 text-yellow-500 text-base font-bold">
        <p>Wind Speed {data.wind.speed}KPH</p>

        <p>Pressure {data.main.pressure}hPa</p>
      </div>
    </div>
  );
};

export default WeatherCard;
