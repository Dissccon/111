import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import {
  Button, Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core'
import styles from './TableTask.scss'
import TaskChart from "../TaskChart/TaskChart";
import { connect } from "react-redux";
import { returnHomePage } from "../Actions";

const cx = classNames.bind(styles)


const TaskPage = ({ row, returnHomePage }) => (
  <div className={cx('taskPage')} onClick={returnHomePage}>
    <Button className={cx('returnButton')}>
      return Table
    </Button>
    <Paper className={cx('paperClass')}>
      <Table>
        <TableHead>
          <TableRow className={cx('tableHead')}>
            <TableCell>№</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Time start</TableCell>
            <TableCell>Time end</TableCell>
            <TableCell>Time spend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={row.id} className={cx('tableBody')}>
            <TableCell
              component='th'
              scope='row'
              className={cx('tableCell')}
            >
              {row.id}
            </TableCell>
            <TableCell className={cx('tableCell')}>{row.task}</TableCell>
            <TableCell
              className={cx('tableCell')}
            >
              {new Date(row.timeStart).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}
            </TableCell>
            <TableCell className={cx('tableCell')}>{new Date(row.timeEnd).toLocaleTimeString('en-US', {
              timeZone: 'UTC',
              hour12: false
            })}</TableCell>
            <TableCell
              className={cx('tableCell')}
            >
              {new Date(row.timeSpend).toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <TaskChart/>
  </div>
)


TaskPage.propTypes = {
  row: PropTypes.object.isRequired,
  returnHomePage: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const row = state.initialState.rows[state.initialState.taskPage - 1]
  return {
    row: row,
  }
}


export default connect(
  mapStateToProps,
  { returnHomePage }
)(TaskPage)