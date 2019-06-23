import React, { Component } from 'react'
import ListItem from '../ListItem'
import TextInput from '../TextInput'

class List extends Component{

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    componentDidMount() {
        this.moveFocus();
    }

    moveFocus() {
        const node = this.listRef.current;
        node.addEventListener('keydown', function(e) {
          const active = document.activeElement;
          if(e.keyCode === 40 && active.nextSibling) {
            e.stopPropagation()
            console.log('the active is',active.nextSibling)
            active.nextSibling.focus();
          }
          if(e.keyCode === 38 && active.previousSibling) {
            e.stopPropagation()
            active.previousSibling.focus();
          }
        });
        node.addEventListener("mouseover", function( e ) {
            e.stopPropagation() 
            console.log('the active is ====',e.target)
            if(e.target) {
                e.target.focus();
            }
        })
    }

   
    render() {
        const { list } = this.props
        return (
            <div ref={this.listRef} className="listContainer">
                <TextInput onChange={this.props.onChangeText} placeholder="Search by id" />
                    {
                        list.map((ele, index) =>
                            <ListItem key={ele.id} listObj={ele} index={index} />
                        )
                    }
            </div>
        )
    }

}

export default List
