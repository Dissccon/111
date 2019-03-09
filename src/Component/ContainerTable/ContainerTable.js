import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './reset.css'
import classNames from 'classnames'
import {
  AppBar, Button, Tab, Tabs, TextField,
} from '@material-ui/core'
import { Route, Switch } from 'react-router'
import styles from './ContainerTable.scss'
import NodFound from '../NodFound/NodFound'
import TaskChart from '../TaskChart/TaskChart'
import TableTask from '../TableTask/TableTask'
import {
  changeName, startTime, closeModal, createNewTask, chooseTabs, deleteTask, changeTaskPage, generateNewRows
} from '../Actions'


const cx = classNames.bind(styles)


class ContainerTable extends Component {
  startTimeHandlers = (node) => {
    const { date, isButtonState, isModalOpen, nameTask, rows, dateStart, startTime, closeModal, createNewTask } = this.props
    if(isButtonState) {
      startTime(date)
    } else if(!isButtonState && !nameTask) {
      closeModal(isModalOpen)
    } else if(!isButtonState && nameTask) {
      createNewTask(date, nameTask, rows, dateStart)
    }
  }

  render() {
    const { date, isButtonState, isRunData, nameTask, tabContainerValue, isModalOpen, taskPage, rows, changeName, closeModal, chooseTabs,
      deleteTask, changeTaskPage, generateNewRows
    } = this.props
    return (
      <Fragment>
        {isModalOpen && (
          <div className={cx('modalWindow')}>
            <div className={cx('modalBlock')}>
              <h2>Empty task name</h2>
              <span>You are tryning close your task without name, enter the title and try again!</span>
              <button
                type='button'
                onClick={() => closeModal(isModalOpen)}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
        <div className={cx('container')}>
          <TextField
            id='standard-dense'
            label='Name of your task'
            className={cx('standard-dense')}
            value={nameTask}
            onChange={changeName}
          />
          <div className={cx('timerCircle')}>
            <span>{date.toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}</span>
          </div>
          <Button
            variant='contained'
            className={cx('buttonStop')}
            onClick={this.startTimeHandlers}
          >
            {isButtonState ? 'START' : 'STOP'}
          </Button>
          <div className={cx('AppBarTable')} style={{ width: '1250px' }}>
            <AppBar position='static'>
              <Tabs
                variant="fullWidth"
                value={tabContainerValue}
                className={cx('tabsClass')}
                onChange={(event, value) => chooseTabs(value, rows.length)}
              >
                <Tab component="a" label='TASKS LOG'/>
                <Tab component="a" label='TASKS CHART'/>
              </Tabs>
            </AppBar>
          </div>
          <Switch>
            <Route exact path='/'
                   render={props => (
                     <TableTask
                       rows={rows}
                       deleteTask={deleteTask}
                       changeTaskPage={changeTaskPage}
                       generateNewRows={generateNewRows}
                     />
                   )}/>
            <Route
              exact
              path='/TaskChart'
              component={TaskChart}
            />
            <Route component={NodFound}/>
          </Switch>
        </div>

      </Fragment>
    )
  }
}

ContainerTable.propTypes = {
  date: PropTypes.object.isRequired,
  dateStart: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.number,
  ]),
  isButtonState: PropTypes.bool.isRequired,
  isRunData: PropTypes.bool.isRequired,
  nameTask: PropTypes.string.isRequired,
  tabContainerValue: PropTypes.number.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  taskPage: PropTypes.number.isRequired,
  rows: PropTypes.array.isRequired,
  changeName: PropTypes.func.isRequired,
  startTime: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  createNewTask: PropTypes.func.isRequired,
  chooseTabs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  date: state.initialState.date,
  dateStart: state.initialState.dateStart,
  isButtonState: state.initialState.isButtonState,
  isRunData: state.initialState.isRunData,
  nameTask: state.initialState.nameTask,
  tabContainerValue: state.initialState.tabContainerValue,
  isModalOpen: state.initialState.isModalOpen,
  taskPage: state.initialState.taskPage,
  rows: state.initialState.rows,
})


export default connect(
  mapStateToProps,
  { changeName, startTime, closeModal, createNewTask, chooseTabs,    deleteTask, changeTaskPage, generateNewRows }
)(ContainerTable)