import React, { Component } from 'react'

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moveOver: false,
            currentIndex: -1
        }
    }

    onMouseEnter = (e) => {
        const { index } = this.props
        e.preventDefault()
        this.setState({
            moveOver: true,
            currentIndex: index
        })
    }

    onMouseLeave = () => {
        this.setState({
            moveOver: false,
            currentIndex: -1
        })
    }

   render() {
    const { listObj : { name, address, items }, index } = this.props;
    const { moveOver } = this.state
        return (
            <li tabIndex={index} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className={"listItemContainer"} >
                {name} <br/>
                {address} <br/>
                {items.join(',')}
            </li>
        )
    }

}

export default ListItem
