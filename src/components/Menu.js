import React from 'react';
import { Menu, Popup } from 'semantic-ui-react'
import CartComponent from './CartComponent'


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