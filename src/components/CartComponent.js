import React from 'react';
import { List, Button, Image } from 'semantic-ui-react';

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

export default CartComponent;