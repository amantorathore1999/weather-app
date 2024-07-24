import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
   const[weatherInfo,setWeatherInfo]= useState({
    city:"Delhi",
    feelsLike: 32.14,
    humidity: 83,
    temp: 27.84,
    tempMax: 28.05,
    tempMin: 27.84,
    weather: "mist",
   });

   let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
   }
   
    return(
        
        <div style={{textAlign:"center"}} >
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            </div>
            
        );
    }