const DAYS_IN_MONTH = 30;
const MONTHS_IN_YEAR = 12;
const DAYS_IN_YEAR = DAYS_IN_MONTH * MONTHS_IN_YEAR;
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

/**
 * Utility class for gametime
 */
class GameTime {
  static getDate(gametime:number) {
    const time = gametime % 1;
    const day = ~~(gametime % DAYS_IN_MONTH) + 1;
    const month = ~~(gametime / DAYS_IN_MONTH) % MONTHS_IN_YEAR;
    const year = ~~(gametime / DAYS_IN_YEAR);
    const monthName = MONTH_NAMES[month];
    return {
      time,
      day,
      month,
      year,
      monthName,
    }
  }
}

export default GameTime;