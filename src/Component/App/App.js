import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../ContainerTable/reset.css'
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import NodFound from '../NodFound/NodFound'
import ContainerTable from "../ContainerTable/ContainerTable";
import { startTime } from "../Actions";
import TaskPage from "../TaskPage/TaskPage";




class App extends Component {
  // static getDerivedStateFromProps(props){
  //   localStorage.setItem('state', JSON.stringify({ ...props.initialState }))
  //   return null
  // }
  // componentDidMount() {
  //   const { isRunData, date } = this.props.initialState
  //   if (isRunData) {
  //     this.props.startTime(isRunData, date)
  //   }
  // }
  render() {
    const { history, taskPage } = this.props
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route path={`/TaskPage/${taskPage}`} component={TaskPage}/>
            <Route path='/' component={ContainerTable}/>)} />
            <Route component={NodFound}/>
            <Redirect to='/NodFound'/>
          </Switch>

        </div>
      </ConnectedRouter>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  taskPage: PropTypes.number.isRequired,
  startTime: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  initialState: state.initialState,
  taskPage: state.initialState.taskPage,
})

export default connect(
  mapStateToProps,
  {
    startTime
  }
)(App)


