const KEY = "2487f5e3005715a77bf186fe2ae5e0aa";

const getData = async (country) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${country}&units=metric&appid=${KEY}`;
  loader(true);
  const req = await fetch(base + query);

  const result = await req.json();
  loader(false);
  return result;
};
