import axios from 'axios';
import { useState, useEffect } from 'react';

const WeatherForecast = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("lagos");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=3029869ef5b648a92f4e15108b824a81`


    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            setLocation("");
        }
    }

    useEffect(() => {
        fetchUpdate();
    }, [])

    const fetchUpdate = () => {
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
        })
    }

    const progressStyle = {
        width: '50%'
    }
    return (
        <div className="e_pages relative max-w-[1100px]">

            <div className="weather_bg h-[300px] relative">
                <div className='w-full h-full  z-40 relative inset-0 bg-[rgba(0,0,0,0.4)]'>
                    <div className=' pt-10 px-3'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <div className='location mb-2'>
                                    <p className='text-white font-[500] text-xl'>
                                        {data.name}
                                    </p>
                                </div>

                                <div className='temp mb-2'>
                                    <p className='text-white text-6xl font-[600]'>
                                        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                                    </p>
                                </div>

                                <div className='description relative w-full '>
                                    <p className='  text-white text-xl font-[500]'>
                                        {data.main ? <p className='text-white font-[500] text-xl'>{data.weather[0].main}</p> : null}
                                    </p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div className='mr-2'>
                                    <input type='text'
                                        value={location}
                                        onChange={event => setLocation(event.target.value)}
                                        onKeyDown={searchLocation}
                                        placeholder='Enter Loacation'
                                        className=' rounded-3xl focus:ring-0 h-[35px] text-white bg-[rgba(255,255,255,0.2)] border-white border placeholder:text-white'
                                    />
                                </div>
                                <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[rgba(255,255,255,0.2)]'>
                                    <i class="fa-solid fa-location-dot text-white "></i>
                                </div>
                            </div>

                        </div>

                        {
                            data.name != undefined &&
                            <div className='flex py-1 bg-[rgba(255,255,255,0.2)] absolute bottom-3 rounded-md w-auto px-8'>
                                <div className="feels mr-4">
                                    {data.main ? <p className='text-white font-[500] text-xl'>{data.main.feels_like}°F</p> : null}
                                    <p className='text-white text-sm'>Feels Like</p>
                                </div>

                                <div className='humidity mr-4'>
                                    {data.main ? <p className='text-white font-[500] text-xl'>{data.main.humidity}%</p> : null}
                                    <p className='text-white text-sm'>Humidity</p>
                                </div>

                                <div className='wind'>
                                    {data.main ? <p className='text-white font-[500] text-xl'>{data.wind.speed}°F</p> : null}
                                    <p className='text-white text-sm'>Wind Speed</p>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>

            <div className='border h-[500px]'>
                <div className='pt-4'>
                    <p className='font-[500]'>
                        Diseases and Pest on Crops
                    </p>
                </div>
                <div>
                    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-[#ff9c40] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-[13px]" style={progressStyle}> 45%</div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default WeatherForecast;