import React from 'react'
import TableTaskTest from './TableTaskTest'
import rowsTest from './initialState'


it('State App', () => {
  const wrapper = mount(<TableTaskTest />)
  expect(wrapper.state().rowsTest).toEqual(rowsTest)
  wrapper.find('.generateTest').hostNodes().simulate('click')
  expect(wrapper.state().rowsTest).not.toEqual(rowsTest)
  expect(wrapper.state().rowsTest).not.toHaveLength(4)
  expect(wrapper.state().rowsTest).not.toHaveLength(5)
  let counter = 0
  for (const key in wrapper.state().rowsTest) {
    counter += 1
  }
  expect(counter).toBeGreaterThanOrEqual(10)
  expect(counter).toBeLessThanOrEqual(15)
  expect(wrapper.state().rowsTest[9]).toHaveProperty('id', 9)
  expect(wrapper.state().rowsTest[9]).toHaveProperty('task', 'Task 10')
  expect(wrapper.state().rowsTest[9]).toHaveProperty('timeStart', 'timeEnd', 'timeSpend')

  const mockFn = jest.fn((minTask, maxTask, MaxTimeSpendHours, MaxTimeSpendMinutes) => {
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
  })
  mockFn(10, 15, 1, 30)
  mockFn(20, 25, 12, 30)
  mockFn(40, 60, 20, 50)
  expect(mockFn).toHaveBeenCalled()
  expect(mockFn.mock.calls.length).toBe(3)
  expect(mockFn.mock.calls[0][0]).toBe(10)
  expect(mockFn.mock.calls[1][1]).toBe(25)
  expect(mockFn.mock.calls[2][3]).toBe(50)
  let MockCounter1 = 0
  for (const key in mockFn.mock.results[0].value) {
    MockCounter1 += 1
  }
  expect(MockCounter1).toBeGreaterThanOrEqual(10)
  expect(MockCounter1).toBeLessThanOrEqual(15)

  let MockCounter2 = 0
  for (const key in mockFn.mock.results[1].value) {
    MockCounter2 += 1
  }
  expect(MockCounter2).toBeGreaterThanOrEqual(20)
  expect(MockCounter2).toBeLessThanOrEqual(25)
  expect(mockFn.mock.results[1].value[19]).toHaveProperty('id', 19)
  expect(mockFn.mock.results[1].value[19]).toHaveProperty('task', 'Task 20')
  expect(new Date(mockFn.mock.results[1].value[19].timeSpend).getHours()).toBeGreaterThanOrEqual(0)
  expect(new Date(mockFn.mock.results[1].value[19].timeSpend).getHours()).toBeLessThanOrEqual(12)

  let MockCounter3 = 0
  for (const key in mockFn.mock.results[2].value) {
    MockCounter3 += 1
  }
  expect(MockCounter3).toBeGreaterThanOrEqual(40)
  expect(MockCounter3).toBeLessThanOrEqual(60)
  expect(mockFn.mock.results[2].value[39]).toHaveProperty('id', 39)
  expect(mockFn.mock.results[2].value[39]).toHaveProperty('task', 'Task 40')
  expect(new Date(mockFn.mock.results[2].value[39].timeSpend).getHours()).toBeGreaterThanOrEqual(0)
  expect(new Date(mockFn.mock.results[2].value[39].timeSpend).getHours()).toBeLessThanOrEqual(20)
})
