import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import {
  Button, Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core'
import styles from './TableTask.scss'
import { connect } from "react-redux";
import {
  deleteTask,
  changeTaskPage,
  generateNewRows,
} from "../Actions";

const cx = classNames.bind(styles)


const TableTask = ({
   deleteTask, changeTaskPage, generateNewRows, rows,
}) => {
  let rowsLength = 1
  return (
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
            { rows.map(row => {
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
                    { new Date(row.timeStart).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false }) }
                  </TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    { new Date(row.timeEnd).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false }) }
                  </TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    { new Date(row.timeSpend).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false }) }
                  </TableCell>
                  <TableCell className={cx('tableCell')}>
                    <Button
                      variant='contained'
                      className={cx('buttonTable')}
                      onClick={() => changeTaskPage(taskPage)}
                    >
                      { ' ' }
                      INFO
                    </Button>
                  </TableCell>
                  <TableCell className={cx('tableCell')}>
                    <Button
                      variant='contained'
                      className={cx('buttonTable')}
                      onClick={() => deleteTask(row.id, rows)}
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
        className={cx('generate')}
        onClick={generateNewRows}
      >
        GENERATE
      </Button>
    </div>
  )
}


TableTask.propTypes = {
  rows: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeTaskPage: PropTypes.func.isRequired,
  generateNewRows: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  rows: state.initialState.rows,
})

export default connect(
  mapStateToProps,
  { deleteTask, changeTaskPage, generateNewRows }
)(TableTask)
