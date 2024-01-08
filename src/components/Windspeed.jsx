import { useContext } from "react"
import { ContextProvider } from "../service/serviceprovider"
import wind from "../asserts/wind.png"
import humidity from "../asserts/humidity.png"
function WindSpeed()
{
    const {newcity,cityreport,setreport}=useContext(ContextProvider)
    return(
        <>
        <div className='flex justify-evenly items-center gap-8'>
            <div className='flex gap-2'>
              <img className='w-10' src={humidity} alt="" />
              <div>
                <h3 className='text-2xl'>{cityreport[0].humidity}%</h3>
                <h3 className='text-2xl'>Humidity</h3>
              </div>
            </div>
            <div className='flex gap-2'>
              <img className='w-10' src={wind} alt="" />
              <div>
                <h3 className='text-2xl'>{cityreport[0].wind} Km/hr</h3>
                <h3 className='text-2xl'>Wind Speed</h3>
              </div>
            </div>
          </div>
        </>
    )
}

export default WindSpeed