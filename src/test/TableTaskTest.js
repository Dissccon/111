import React from 'react'
import classNames from 'classnames/bind'
import {
  Button, Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core'
import styles from './TableTask.scss'
import rowsTest from './initialState'

const cx = classNames.bind(styles)


class TableTaskTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rowsTest,
    }
  }

    generateRowsTest = (minTask, maxTask, MaxTimeSpendHours, MaxTimeSpendMinutes) => {
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
      this.setState({
        rowsTest: newRows,
      })
    }

    render() {
      let rowsLength = 1
      const { rowsTest } = this.state
      return (
        <div className={cx('containerTest')}>
          <div className={cx('tableTask')}>
            <Paper className={cx('paperClass')}>
              <Table>
                <TableHead>
                  <TableRow className={cx('tableHead')}>
                    <TableCell>№</TableCell>
                    <TableCell>Task</TableCell>
                    <TableCell>Time start</TableCell>
                    <TableCell>Time end</TableCell>
                    <TableCell>Time spend</TableCell>
                    <TableCell>Info</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { rowsTest.map(row => {
                    const taskPage = rowsLength
                    rowsLength += 1
                    return (
                      <TableRow key={row.id} className={cx('tableBody')}>
                        <TableCell
                          component='th'
                          scope='row'
                          className={cx('tableCell')}
                        >
                          {taskPage}
                        </TableCell>
                        <TableCell className={cx('tableCell')}>{ row.task }</TableCell>
                        <TableCell
                          className={cx('tableCell')}
                        >
                          { new Date(row.timeStart).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}
                        </TableCell>
                        <TableCell
                          className={cx('tableCell')}
                        >
                          { new Date(row.timeEnd).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}
                        </TableCell>
                        <TableCell
                          className={cx('tableCell')}
                        >
                          { new Date(row.timeSpend).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}
                        </TableCell>
                        <TableCell className={cx('tableCell')}>
                          <Button
                            variant='contained'
                            className={cx('buttonTable')}
                          >
                            { ' ' }
                                                    INFO
                          </Button>
                        </TableCell>
                        <TableCell className={cx('tableCell')}>
                          <Button
                            variant='contained'
                            className={cx('buttonTable')}
                          >
                            { ' ' }
                                                    DELETE
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  }) }
                </TableBody>
              </Table>
            </Paper>
            <Button
              variant='contained'
              className={cx('generateTest')}
              onClick={() => this.generateRowsTest(10, 15, 1, 30)}
            >
                        GENERATE
            </Button>
          </div>
        </div>
      )
    }
}
export default TableTaskTest
