import { connect } from 'react-redux'
import { fetchEvents, selectCurrEventType } from '../modules/events'
import NavMenu from 'components/NavMenu'

const mapDispatchToProps = {
  fetchEvents,
  selectCurrEventType
}

const mapStateToProps = (state) => ({
  events: state.events.events
})

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
