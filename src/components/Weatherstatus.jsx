import { useContext } from "react"
import { ContextProvider } from "../service/serviceprovider"

import clear from "../asserts/clear.png"
import clouds from "../asserts/clouds.png"
import drizzle from "../asserts/drizzle.png"
import mist from "../asserts/mist.png"
import snow from "../asserts/snow.png"
import rain from "../asserts/rain.png"

function WeatherStatus(){

    const {newcity,cityreport,setreport}=useContext(ContextProvider)
    {
        var weatherreport=clear
        if(cityreport[0].weathers==="Clouds")
        {
            var weatherreport=clouds
        }
        else if(cityreport[0].weathers==="Clear")
        {
            var weatherreport=clear
        }
        else if(cityreport[0].weathers==="Rain")
        {
            var weatherreport=rain
        }
        else if(cityreport[0].weathers==="Drizzle")
        {
            var weatherreport=drizzle
        }
        else if(cityreport[0].weathers==="Mist")
        {
            var weatherreport=mist
        }
        else if(cityreport[0].weathers==="Snow")
        {
            var weatherreport=snow
        }
        
    
        
}
    return(
        <>
        <div className='text-lg flex flex-col w-56 mx-16'>
    
            <img src={weatherreport} alt="" />
            <p className='text-4xl'>{cityreport[0].temp}°C</p>
            <p className='text-4xl'>{cityreport[0].name}</p>
          </div>
          
        </>
    )
}

export default WeatherStatus