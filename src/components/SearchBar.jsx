import { useContext} from "react"
import searchicon from "../asserts/search.png"
import axios from "axios"
import { ContextProvider } from "../service/serviceprovider"

function SearchBar()
{
    const {newcity,setcity,cityreport,setreport}=useContext(ContextProvider)
  
    
    function handleclick(){
         
        var data =axios(`https://api.openweathermap.org/data/2.5/weather?q=${newcity}&appid=87c6e88ec3abca964a7aa0831c35d51f&units=metric`)
        data.then( function(userdata)
        {
            console.log(userdata.data) 
            setreport([{name:userdata.data.name,
            temp:userdata.data.main.temp,
            wind:userdata.data.wind.speed,
            humidity:userdata.data.main.humidity,
            weathers:userdata.data.weather[0].main
        }])   
        }).catch(function(errormsg)
        {
            alert("Try Again Please Enter right city Name :)")
        })
        console.log(cityreport)
    }

    return(
        <>
        <div className='flex justify-center mt-6 gap-5 '>
          <input value={newcity} onChange={(e)=>{setcity(e.target.value)}} className='text-gray-700 p-1 border rounded-md outline-none w-64' placeholder='Enter the city' ></input>
          <button onClick={handleclick} className=' bg-white outline-none p-2 rounded-full'><img className="w-4 " src={searchicon} alt="img couldn't loaded" /></button>
        </div>
        </>
    )
}
export default SearchBar