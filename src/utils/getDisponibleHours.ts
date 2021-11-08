export const getDisponibleHours = (startedTime:number, interval: number, startNow = false) => {
  const date = new Date().getHours() + 1;

  if (startNow) {
    startedTime = date;
  }

  const iterationsPerHour = 60 / interval;
  const timeArray = [];
  for (let i = startedTime; i < 24; i += 1) {
    for (let n = 0; n < iterationsPerHour; n += 1) {
      const hoursFormat = i > 9 ? i : `0${i}`;
      const minutesFormat = (n * interval === 0) ? '00' : n * interval;
      timeArray.push(
        { label: `${hoursFormat}:${minutesFormat}`, name: `${hoursFormat}:${minutesFormat}` },
      );
    }
  }
  return timeArray;
};
