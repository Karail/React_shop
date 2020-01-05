import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../actions/books';
import orderBy from 'lodash/orderBy'
import App from '../components/App';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books
  }
}

const filterBooks = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

//передача данных из redux в компонент
const mapStateToProps = ({ books, filter }) => ({
  books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady,
});

// передача action в компонент
const mapDispatchToProps = dispatch => ({
...bindActionCreators(bookActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);