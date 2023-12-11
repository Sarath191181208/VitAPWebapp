/// These functions are made like this to make testing and changing easier
const newDate = () => {
  return new Date();
};

export const getToday = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = newDate();
  let today = weekday[d.getDay()];
  return today;
};

export const getCurrentTime = () => {
  const d = new Date();
  const currentTime = d.getHours() * 60 + d.getMinutes();
  return currentTime;
};
