export const getLocalizedDate = (date: Date) => {
  const UTCDate = new Date(date);

  const newDate = new Date(UTCDate.getTime() + UTCDate.getTimezoneOffset() * 60 * 1000);

  const offset = UTCDate.getTimezoneOffset() / 60;
  const hours = UTCDate.getHours();

  newDate.setHours(hours - offset);
  const formated = newDate.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
  return formated;
};
