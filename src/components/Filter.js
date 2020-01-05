import React from 'react';
import { Menu, Input } from 'semantic-ui-react'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleItemClick = (e, { name }) => {
    const { setFilter, setSearchQuery } = this.props;
    setFilter(name);
    console.log(this.props)
    if (name === 'all') {
        setSearchQuery('')
    }
  }
  render() {
    return (
        <Menu secondary>
            <Menu.Item name='all' active={this.props.filterBy === 'all'} onClick={this.handleItemClick}>Все</Menu.Item>
            <Menu.Item name='price_high' active={this.props.filterBy === 'price_high'} onClick={this.handleItemClick}>Цена (Дорогие)</Menu.Item>
            <Menu.Item name='price_low' active={this.props.filterBy === 'price_low'} onClick={this.handleItemClick}>Цена (Дешевые)</Menu.Item>
            <Menu.Item name='author' active={this.props.filterBy === 'author'} onClick={this.handleItemClick}>Автор</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' onChange={e => { this.props.setSearchQuery(e.target.value) }} value={this.props.searchQuery} placeholder='Поиск...' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
  }
}

export default Filter;