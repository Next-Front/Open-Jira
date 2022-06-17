
export const formatDate = (date: Date): string => {
  // time a go
  const time = date.getTime();
  // get the current time
  const now = new Date().getTime();
  // get the difference between the two times
  const diff = now - time;
  // get the difference in days
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // get the difference in hours
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // get the difference in minutes
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  // get the difference in seconds
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // return the difference in days
  if (days > 0) {
    return `${days} days ago`;
  }
  // return the difference in hours
  if (hours > 0) {
    return `${hours} hours ago`;
  }
  // return the difference in minutes
  if (minutes > 0) {
    return `${minutes} minutes ago`;
  }
  // return the difference in seconds
  if (seconds > 0) {
    return `${seconds} seconds ago`;
  }
  // return the difference in milliseconds
  if (diff < 0) {
    return `in the future`;
  }
  return `just now`;
}