const Description = () => (
  <div className='text-center p-4 md:p-6 rounded-lg bg-[#3054b7c2] dark:bg-[#283644e4] mx-2 mb-6'>
    <h1 className='text-4xl font-bold mb-4'>
      Welcome to the Weather Forecast Widget!
    </h1>
    <p className='text-lg mb-6'>
      Use this widget to check the weather forecast for any city in the world.
      Simply enter the name of the city you want to know the weather for in the
      search box. As you type, the widget will suggest matching city names,
      making it easier for you to select the correct one.
    </p>
    <p className='text-lg mb-6'>
      Alternatively, you can directly enter the city name in the URL following
      this format: "weather/city". For example, to view the weather in Berlin,
      you can enter "weather/berlin" in the URL and press Enter to load the
      forecast for Berlin.
    </p>
    <p className='text-lg '>
      Once you've entered a city name and clicked the "Search" button or pressed
      Enter, the widget will fetch the weather data from the OpenWeatherMap API
      and display the temperature, weather description, and an icon representing
      the weather conditions for the selected city.
    </p>
  </div>
)

export default Description
