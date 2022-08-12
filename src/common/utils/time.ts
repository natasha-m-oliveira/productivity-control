export function durationToSeconds(duration: string) {
  const [hour = '0', minute = '0', seconds = '0'] = duration.split(":");
  const hoursInSeconds = Number(hour) * 3600;
  const minutesInSecons = Number(minute) * 60;
  return hoursInSeconds + minutesInSecons + Number(seconds);
}