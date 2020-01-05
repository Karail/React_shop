import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter';


const mapStateToProps = ({filter}) => ({
  searchQuery: filter.searchQuery,
  filterBy: filter.filterBy,
});


const mapDispatchToProps = dispatch => ({
...bindActionCreators(filterActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);