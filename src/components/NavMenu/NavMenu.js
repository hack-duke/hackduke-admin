import React from 'react'
import classes from './NavMenu.scss'
import EventNavElement from 'components/EventNavElement'
import { IndexLink } from 'react-router'

class NavMenu extends React.Component {

  static propTypes = {
    events: React.PropTypes.array.isRequired,
    fetchEvents: React.PropTypes.func.isRequired,
    selectCurrEventType: React.PropTypes.func.isRequired,
    currYear: React.PropTypes.string.isRequired,
    currSeason: React.PropTypes.string.isRequired
  }

  handleEventClick (eventType, season, year) {
    this.props.selectCurrEventType(eventType, season, year)
  }

  render () {
    return (
      <div className={classes.navMenu}>
        <IndexLink className={classes.linkElement} to={'/'}> Home </IndexLink>
        <EventNavElement title={'Events'} elements={this.props.events}
          click={this.handleEventClick.bind(this)}/>
      </div>
    )
  }
}

export default NavMenu
