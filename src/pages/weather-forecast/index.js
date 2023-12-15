import axios from 'axios';
import { useState } from 'react';

const WeatherForecast = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3029869ef5b648a92f4e15108b824a81}`


    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            setLocation("");
        }
    }
    return (
        <div className="e_pages relative max-w-[1100px]">
            <div className="weather_bg ">
                <div className='w-full h-[300px] z-40 relative inset-0 bg-[rgba(0,0,0,0.4)]'>
                    <div className=' pt-10 px-3'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <div className='location mb-2'>
                                    <p className='text-white font-[500] text-xl'>
                                        Dallas
                                    </p>
                                </div>

                                <div className='temp mb-2'>
                                    <p className='text-white text-6xl font-[600]'>
                                        60°F
                                    </p>
                                </div>

                                <div className='description relative w-full '>
                                    <p className='  text-white text-xl font-[500]'>
                                        Clouds
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

                        <div className='flex py-1 bg-[rgba(255,255,255,0.2)] absolute bottom-3 rounded-md w-auto px-8'>
                            <div className="feels mr-4">
                                <p className='text-white font-[500] text-xl'>65°F</p>
                                <p className='text-white text-sm'>Feels Like</p>
                            </div>

                            <div className='humidity mr-4'>
                                <p className='text-white font-[500] text-xl'>20%</p>
                                <p className='text-white text-sm'>Humidity</p>
                            </div>

                            <div className='wind'>
                                <p className='text-white font-[500] text-base'>12 MPH</p>
                                <p className='text-white text-sm'>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherForecast;