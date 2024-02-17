import { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./component/WeatherCard";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=7&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md fixed top-2 left-0 right-0 mx-auto"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      {/* <Weather weatherData={data} /> */}
      <div className="my-9">
        {data.list && data.city && data.list.length > 0
          ? data.list.map((item, index) => (
              <WeatherCard key={index} data={item} location={data.city.name} />
            ))
          : null}
      </div>
      {/* <WeatherCard/> */}
    </div>
  );
}

export default App;
