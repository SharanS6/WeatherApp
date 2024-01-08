import { createContext,useState } from "react"

export const ContextProvider=createContext()
function ServiceProvider(data){
    const [newcity,setcity]=useState("")
    const [cityreport,setreport]=useState([{name:"City",
    temp:"100",
    wind:"100",
    humidity:"100",
    weathers:""

    }])
    return(
        <ContextProvider.Provider value={{newcity,setcity,cityreport,setreport}} >
        {data.children}
        </ContextProvider.Provider>
    )
}

export default ServiceProvider