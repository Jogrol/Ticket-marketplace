import React from 'react'
import {connect} from 'react-redux'
import {loadEvents} from '../actions/events'

export class ListOfEventsContainer extends React.Component {

  
  componentDidMount() {
    loadEvents()
  }

    render() {
        console.log(this.props)
      return (
      <div>
      <h2>Test</h2>
     </div>
      )}
  }

  const mapStateToProps = (state) => ({
    events: state.events
  })

export default connect (mapStateToProps, {loadEvents})(ListOfEventsContainer)