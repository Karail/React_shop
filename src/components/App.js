import React from 'react';
import { Container, Card } from 'semantic-ui-react'
import Menu from '../containers/Menu'
import BookCard from '../containers/BookCard'
import Filter from '../containers/Filter'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  async componentDidMount() {
    const { setBooks } = this.props;
    let response = await fetch('/books.json');
    let data = await response.json();
    setBooks(data);
  }
  render() {
    const {books, isReady } = this.props;

    return (
      <Container>
        <Menu />
        <Filter/>
        <Card.Group>
            {
              !isReady ? '...Загрузка' : books.map((book, i) => (<BookCard book={book} key={i}/>))
            }
        </Card.Group>
      </Container>
    );
  }
}

export default App;