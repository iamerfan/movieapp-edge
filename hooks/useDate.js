const useDate = date => {
   const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ]
   const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   const d = new Date(date)
   const createdAt =
      weekday[d.getDay()] +
      ' ' +
      month[d.getMonth()] +
      ' ' +
      d.getDate() +
      ' ' +
      d.getFullYear() +
      ' ' +
      d.getHours() +
      ':' +
      d.getMinutes()
   return { createdAt }
}
export default useDate
