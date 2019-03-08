import { takeLatest, all } from 'redux-saga/effects'
import {
  changeNameSaga,
  startTimeSaga,
  changeModalSaga,
  createNewTaskSaga,
  chooseTabsSaga,
  changeTaskPageSaga,
  deleteTaskSaga,
  generateNewRowsSaga,
} from './saga'

import {
  CHANGE_NAME,
  START_TIME,
  CHANGE_MODAL,
  CREATE_NEWTASK,
  CHOOSE_TABS,
  CHANGE_TASKPAGE,
  DELETE_TASK,
  GENERATE_NEWROWS,
  RETURN_HOMEPAGE,
} from '../Component/Actions'


export default function* rootSaga() {
  yield all([
    takeLatest(CHANGE_NAME, changeNameSaga),
    takeLatest([START_TIME,CREATE_NEWTASK],startTimeSaga),
    takeLatest(CHANGE_MODAL, changeModalSaga),
    takeLatest(CREATE_NEWTASK, createNewTaskSaga),
    takeLatest(CHOOSE_TABS, chooseTabsSaga),
    takeLatest(DELETE_TASK, deleteTaskSaga),
    takeLatest(CHANGE_TASKPAGE, changeTaskPageSaga),
    takeLatest(GENERATE_NEWROWS, generateNewRowsSaga),
    takeLatest(RETURN_HOMEPAGE, returnHomePageSaga),


  ])
}
