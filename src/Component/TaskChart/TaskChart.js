import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import tableData from "../../helpers/tableData";


const TaskChart = ({ datePage }) => (
  <BarChart
    width={1250}
    height={300}
    data={datePage}
    margin={{
      top: 20, right: 30, left: 0, bottom: 5,
    }}
  >
    <CartesianGrid stroke='#f5f5f5'/>
    <XAxis dataKey='hour'/>
    <YAxis/>
    <Tooltip/>
    <Legend/>
    <Bar dataKey='minutes' name='Minutes in the hours' fill='#344dc4'/>
  </BarChart>
)

TaskChart.propTypes = {
  datePage: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  const row = state.initialState.rows[state.initialState.taskPage - 1]
  return {
    datePage: tableData(new Date(row.timeStart), new Date(row.timeSpend)),
  }
}

export default connect(
  mapStateToProps,
)(TaskChart)
