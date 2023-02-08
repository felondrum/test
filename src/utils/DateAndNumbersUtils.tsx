export function makeProc (real: number, max: number): string {
    let countWithRound = Math.round((real/max) * 100) / 100
    return countWithRound + '%'
  }
  
export function makeDayCount (dayOfRegister: string): string {
    return dateDiffInDaysFromString(new Date(), dayOfRegister);
  }
  
  function dateDiffInDays(dateTo: Date, dateFrom: Date): string {
    let difInTime = dateTo.getTime() - dateFrom.getTime()
    let difInDays = difInTime / (1000 * 3600 * 24) 
    return String(Math.round(difInDays))
  }

  function dateDiffInDaysFromString(dateTo: Date, dateFrom: string): string {
    try {
        var dateFromString = dateSpliter(dateFrom)
        let difInTime = dateTo.getTime() - dateFromString.getTime()
        let difInDays = difInTime / (1000 * 3600 * 24) 
        return String(Math.round(difInDays))
    } catch {
        console.log("Неверный формат даты. Необходимо 'DD.MM.YYYY'")
        return '{Нет данных}'
    }
  }
  
  function dateSpliter(dateInString: string): Date {
    return new Date(dateInString ? dateInString.split('.').reverse().join('-') : '')
  }
  