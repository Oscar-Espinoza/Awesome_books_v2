import { DateTime } from "../node_modules/luxon/src/luxon.js";

export const injectCurrentDate = (zone) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const now = DateTime.local().setZone(zone);
  const currentDate = document.getElementById('current-date');
  currentDate.textContent = `${months[now.month - 1]} ${now.day}, ${now.year} \ ${now.hour}:${now.minute}:${now.second}`;
}
