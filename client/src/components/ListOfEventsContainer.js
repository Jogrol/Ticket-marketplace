import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'
import ListOfEvents from './ListOfEvents'


class ListOfEventsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      eventsPerPage: 9,
    }
  }
  
  nextPage = () => {
    const maxPage = Math.ceil(this.props.events.length / this.state.eventsPerPage)
    if (this.state.currentPage === maxPage) return null;
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }
  goBack = () => {
    if (this.state.currentPage === 1) return null;
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }
  
 componentDidMount =() => {
    this.props.loadEvents()
  }

  render() {
      if (!this.props.events) return "loading..."
      const { events } = this.props;
      const {currentPage , eventsPerPage } = this.state
     const indexOfLastEvent = currentPage * eventsPerPage;
     const indexOfFirsEvent = indexOfLastEvent - eventsPerPage;
     const currentEvents = events.slice(indexOfFirsEvent, indexOfLastEvent);
     const pageNumbers = [];

     for (let i = 1; i <= Math.ceil(events.length / eventsPerPage); i++) {
       pageNumbers.push(i);
      }

     return (<ListOfEvents events={currentEvents} 
              pagenumber={pageNumbers} 
              goBack={this.goBack }
              nextPage={this.nextPage} />)
     
   
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(ListOfEventsContainer)
