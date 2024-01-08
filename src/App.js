import './App.css';

import SearchBar from './components/SearchBar';
import WeatherStatus from './components/Weatherstatus';
import WindSpeed from './components/Windspeed';


function App() {
  return (
    <>
      <div className='text-center max-w-md mt-24 mb-0 mx-auto p-5 border-none rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  '>
        <SearchBar></SearchBar>
        <div className='flex flex-col items-center gap-10' >
          <WeatherStatus></WeatherStatus>
          <WindSpeed></WindSpeed>
        </div>
      </div>
    </>
  );
}

export default App;
