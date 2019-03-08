import initialState from '../stubs/initialState'
import {
  CHANGE_NAME__CHANGE,
  CHANGE_NAME__FAILURE,

  START_TIME__DATA_START,
  START_TIME__INTERVAL,
  START_TIME__FAILURE,

  CHANGE_MODAL__OPEN,
  CHANGE_MODAL__CLOSE,
  CHANGE_MODAL__FAILURE,

  CREATE_NEWTASK__SUCCESS,
  CREATE_NEWTASK__FAILURE,

  CHOOSE_TABS__SUCCESS,
  CHOOSE_TABS__FAILURE,

  CHANGE_TASKPAGE__SUCCESS,
  CHANGE_TASKPAGE__FAILURE,

  DELETE_TASK__SUCCESS,
  DELETE_TASK__FAILURE,

  GENERATE_NEWROWS__SUCCESS,
  GENERATE_NEWROWS__FAILURE,

  RETURN_HOMEPAGE__SUCCESS,
  RETURN_HOMEPAGE__FAILURE,
} from '../Component/Actions'

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME__CHANGE: {
      return {
        ...state,
        nameTask: action.payload.nameTask,
        error: undefined,
      }
    }
    case CHANGE_NAME__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }



    case START_TIME__DATA_START: {
      return {
        ...state,
        dateStart: action.payload.dateStart,
        error: undefined,
      }
    }
    case START_TIME__INTERVAL: {

      return {
        ...state,
        date: action.payload.date,
        isButtonState: false,
        error: undefined,
      }
    }
    case START_TIME__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case CHANGE_MODAL__OPEN: {
      return {
        ...state,
        isModalOpen: true,
        error: undefined,
      }
    }
    case CHANGE_MODAL__CLOSE: {
      return {
        ...state,
        isModalOpen: false,
        error: undefined,
      }
    }
    case CHANGE_MODAL__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case CREATE_NEWTASK__SUCCESS: {
      return {
        ...state,
        date: action.payload.data,
        dateStart: false,
        isRunData: false,
        isButtonState: true,
        nameTask: '',
        rows: action.payload.newRows,
        error: undefined,
      }
    }
    case CREATE_NEWTASK__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case CHOOSE_TABS__SUCCESS: {
      return {
        ...state,
        tabContainerValue: action.payload.tabContainerValue,
        error: undefined,
      }
    }
    case CHOOSE_TABS__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }



    case DELETE_TASK__SUCCESS: {
      return {
        ...state,
        rows: action.payload.rows,
        taskPage: 1,
        error: undefined,
      }
    }
    case DELETE_TASK__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case CHANGE_TASKPAGE__SUCCESS: {
      return {
        ...state,
        taskPage: action.payload.taskPage,
        error: undefined,
      }
    }
    case CHANGE_TASKPAGE__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }




    case GENERATE_NEWROWS__SUCCESS: {
      return {
        ...state,
        date: action.payload.date,
        dateStart: false,
        nameTask: '',
        tabContainerOpen: 0,
        isModalOpen: false,
        isButtonState: true,
        taskPage: 1,
        rows: action.payload.newRows,
        error: undefined,
      }
    }
    case GENERATE_NEWROWS__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }





    default:
      return state
  }
}
