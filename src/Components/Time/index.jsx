const Get = async () => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Rome"
  );
  const data = await response.json();

  return data;
};
export default Get;
