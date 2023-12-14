import axios from 'axios';

const WeatherForecast = () => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={3029869ef5b648a92f4e15108b824a81}`
    return (
        <div className="e_pages relative max-w-[1100px]">
            <div className="weather_bg ">
                <div className='w-full h-[300px] z-40 relative inset-0 bg-[rgba(0,0,0,0.4)]'>
                    <div className=' pt-10 px-3'>

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

                        <div className='description relative w-full text-right'>
                            <p className=' rotate-[270deg] absolute right-0 text-white text-xl font-[500]'>
                                Clouds
                            </p>
                        </div>

                        <div className='flex bg-[rgba(255,255,255,0.2)] absolute bottom-3 rounded-md w-auto px-4'>
                            <div className="feels mr-4">
                                <p className='text-white font-[400] text-xl'>65°F</p>
                            </div>

                            <div className='humidity mr-4'>
                                <p className='text-white font-[400] text-xl'>20%</p>
                            </div>

                            <div  className='wind'>
                                <p className='text-white font-[400] text-base'>12 MPH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherForecast;