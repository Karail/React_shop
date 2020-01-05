import React from 'react';
import { Menu, List, Button, Image, Popup } from 'semantic-ui-react'

class CartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <List selection divided verticalAlign='middle'>

      <List.Item>
        <List.Content floated='right'>
          <Button onClick={this.props.removeFromCart.bind(this, this.props.id)} color="red">удалить</Button>
        </List.Content>
        <Image avatar src={this.props.image} />
          <List.Content>{this.props.title}</List.Content>
      </List.Item>
  
    </List>
    );
  }
}

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Menu>
        <Menu.Item name='browse'>
          <p>Магазин Книг</p>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='signup'>
            <p>Итог:  <b>{this.props.totalPrice}</b> руб</p>
          </Menu.Item>

          <Popup
            trigger={
              <Menu.Item name="help">
                Корзина (<b>{this.props.count}</b>)
              </Menu.Item>
            }
            content={this.props.items.map((book, i) => <CartComponent {...book} removeFromCart={this.props.removeFromCart} key={i}/>)}
            on="click"
            hideOnScroll
          />

        </Menu.Menu>
      </Menu>
    );
  }
}

export default MenuComponent;