interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

export default function WeatherCard({ data }: { data: WeatherData }) {
  return (
    <div className="mt-6 p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
      <p className="text-5xl font-extrabold text-blue-600 my-4">
        {Math.round(data.main.temp)}°C
      </p>
      <p className="text-gray-500 capitalize">{data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="w-20 h-20"
      />
    </div>
  );
}
