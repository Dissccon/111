const tableData = (timeStart, timeSpend) => {
  const data = []
  let nowHours2
  let nexHours
  let time
  let nowMinutes
  let nowHours
  for (let i = 0; i < 24; i += 1) {
    let oneHour
    if (i === timeStart.getHours()) {
      if (timeSpend.getHours() < 1) {
        const minutes = 60 - timeStart.getMinutes()
        if (minutes > timeSpend.getMinutes()) {
          oneHour = { hour: i, minutes: timeSpend.getMinutes() }
        }
        if (minutes < timeSpend.getMinutes()) {
          oneHour = { hour: i, minutes }
          nowMinutes = timeSpend.getMinutes() - minutes
          nowHours2 = i + 1
        }
      }
      if (timeSpend.getHours() >= 1) {
        const minutes = 60 - timeStart.getMinutes()
        oneHour = { hour: i, minutes }
        time = new Date(timeSpend - (minutes * 60000))
        nexHours = time.getHours()
        nowHours = i + 1
        nowMinutes = time.getMinutes()
      }
    } else if (i === nowHours2) {
      oneHour = { hour: i, minutes: nowMinutes }
    } else if (i === nowHours && nexHours >= 1) {
      nexHours -= 1
      nowHours += 1
      oneHour = { hour: i, minutes: 60 }
    } else if (i === nowHours && nexHours === 0) {
      oneHour = { hour: i, minutes: nowMinutes }
    } else {
      oneHour = { hour: i, minutes: 0 }
    }
    data.push(oneHour)
  }
  return data
}

export default tableData
