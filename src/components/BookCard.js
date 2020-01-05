import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() { 
    return (
      <Card>
      <Image src={this.props.book.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{this.props.book.title}</Card.Header>
        <Card.Meta>
            <span className='date'>{this.props.book.author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <p>
          <Icon name='rub' />
          {this.props.book.price}
        </p>
      </Card.Content>
    <Button onClick={this.props.addToCart.bind(this, this.props.book)}>Добавить в крозину</Button>
    </Card>
    );
  }
}

export default BookCard;