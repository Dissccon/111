export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_NAME__CHANGE = 'CHANGE_NAME__CHANGE'
export const CHANGE_NAME__FAILURE = 'CHANGE_NAME__FAILURE'

export const START_TIME = 'START_TIME'
export const START_TIME__DATA_START = 'START_TIME__DATA_START'
export const START_TIME__INTERVAL = 'START_TIME__INTERVAL'
export const START_TIME__FAILURE = 'START_TIME__FAILURE'

export const CHANGE_MODAL = 'CHANGE_MODAL'
export const CHANGE_MODAL__OPEN = 'CHANGE_MODAL__OPEN'
export const CHANGE_MODAL__CLOSE = 'CHANGE_MODAL__CLOSE'
export const CHANGE_MODAL__FAILURE = 'CHANGE_MODAL__FAILURE'

export const CREATE_NEWTASK = 'CREATE_NEWTASK'
export const CREATE_NEWTASK__SUCCESS = 'CREATE_NEWTASK__SUCCESS'
export const CREATE_NEWTASK__FAILURE = 'CREATE_NEWTASK__FAILURE'

export const CHOOSE_TABS = 'CHOOSE_TABS'
export const CHOOSE_TABS__NOHAVE_TASK = 'CHOOSE_TABS__NOHAVE_TASK'
export const CHOOSE_TABS__SUCCESS = 'CHOOSE_TABS__SUCCESS'
export const CHOOSE_TABS__FAILURE = 'CHOOSE_TABS__FAILURE'

export const CHANGE_TASKPAGE = 'CHANGE_TASKPAGE'
export const CHANGE_TASKPAGE__SUCCESS = 'CHANGE_TASKPAGE__SUCCESS'
export const CHANGE_TASKPAGE__FAILURE = 'CHANGE_TASKPAGE__FAILURE'

export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_TASK__SUCCESS = 'DELETE_TASK__SUCCESS'
export const DELETE_TASK__FAILURE = 'DELETE_TASK__FAILURE'

export const GENERATE_NEWROWS = 'GENERATE_NEWROWS'
export const GENERATE_NEWROWS__SUCCESS = 'GENERATE_NEWROWS__SUCCESS'
export const GENERATE_NEWROWS__FAILURE = 'GENERATE_NEWROWS__FAILURE'

export const RETURN_HOMEPAGE = 'RETURN_HOMEPAGE'
export const RETURN_HOMEPAGE__SUCCESS = 'RETURN_HOMEPAGE__SUCCESS'
export const RETURN_HOMEPAGE__FAILURE = 'RETURN_HOMEPAGE__FAILURE'


export const changeName = ({ target }) => ({
  type: CHANGE_NAME,
  payload: {
    nameTask: target.value,
  },
})

export const startTime = (date) => ({
  type: START_TIME,
  payload: {
    date,
  },
})

export const closeModal = (isModalOpen) => ({
  type: CHANGE_MODAL,
  payload: {
    isModalOpen,
  },
});

export const createNewTask = (date, nameTask, rows, dateStart) => ({
  type: CREATE_NEWTASK,
  payload: {
    date, nameTask, rows, dateStart,
  },
})

export const deleteTask = (id, rows) => ({
  type: DELETE_TASK,
  payload: { id, rows, },
})

export const chooseTabs = (tabContainerValue, rowsLength) => ({
  type: CHOOSE_TABS,
  payload: { tabContainerValue, rowsLength},
})

export const changeTaskPage = (taskPage) => ({
  type: CHANGE_TASKPAGE,
  payload: {
    taskPage,
  },
})

export const generateNewRows = () => ({
  type: GENERATE_NEWROWS
})

export const returnHomePage = () => ({
  type: RETURN_HOMEPAGE
})








