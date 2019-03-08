const generateRows = (minTask, maxTask, MaxTimeSpendHours, MaxTimeSpendMinutes) => {
  function randomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    rand = Math.floor(rand)
    return rand
  }
  const rowsLength = randomNumber(minTask, maxTask)
  const newRows = []
  for (let i = 0; i < rowsLength; i += 1) {
    const timeStartHours = randomNumber(0, 23)
    const timeStartMinutes = randomNumber(0, 59)
    const timeStartSeconds = randomNumber(0, 59)
    const timeStart = new Date(Date.UTC(70, 0, 1, timeStartHours, timeStartMinutes, timeStartSeconds))
    const timeSpendHours = randomNumber(0, MaxTimeSpendHours)
    const timeSpendMinutes = randomNumber(0, MaxTimeSpendMinutes)
    const timeSpendSeconds = randomNumber(0, 59)
    const timeSpend = new Date(Date.UTC(70, 0, 1, timeSpendHours, timeSpendMinutes, timeSpendSeconds))
    const timeEnd = new Date(timeStart.getTime() + timeSpend.getTime())
    const oneRow = {
      id: i,
      task: `Task ${i + 1}`,
      timeStart,
      timeEnd,
      timeSpend,
    }
    newRows.push(oneRow)
  }
  return newRows
}
export default generateRows
