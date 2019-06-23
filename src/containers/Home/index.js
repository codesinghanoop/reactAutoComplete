import React, { Component } from 'react'
import List from '../../components/List'
import DummyList from '../../fixtures/DummyData'
import HomeContainer from './styles.js'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchedList: []
        }
        this.listRef = React.createRef();
    }

    findInString(ele, searchTerm) {
        return ele.indexOf(searchTerm) > -1
    }

    distinctValues(result) {
        return Array.from(new Set(result));
    }

    appearance(substring,string){
        let a=[],i=-1;
        console.log('the substring and string is',substring,string)
        while((i=string.toLowerCase().indexOf(substring,i+1)) >= 0) a.push(i);
        return a;
    }

    highlightSearch(listItems, searchTerm) {
        if (listItems.length > 0) {
          let termLen = searchTerm.length;
          var reg = new RegExp(searchTerm, 'gi');
          for (let i = 0; i < listItems.length; i++) {
            let innerHTML = listItems[i].innerHTML.replace(reg, function(str) {return '<b>'+str+'</b>'});
            // console.log('the inner html is', locations)
            // let start = 0;
            // let firstSubString = '';
            // for (let j = 0; j < locations.length; j++) {
            //     firstSubString = firstSubString + innerHTML.substr(start, locations[i]) + '<span style={{ fontSize: 30 }}>' + innerHTML.substring(locations[i], termLen) + '</span>'
            //     start = locations[i];
            //   let indexes = result[i].matches[0].indices[j];
            //   innerHTML = innerHTML.substring(0, indexes[0]) + '<span class="e-highlight">' +
            //     innerHTML.substring(indexes[0], (indexes[1] + 1)) + '</span>' + innerHTML.substring(indexes[1] + 1);
            // }
            // listItems[i].innerHTML = innerHTML;
          }
        }
      }

    onChangeText = (e) => {
        const searchTerm = e.target.value
        let result = [];
        DummyList.forEach((ele, i) => {
            Object.keys(ele).forEach((val) => {
               if(Object.prototype.toString.call(ele[val]) === '[object String]') {
                   if(this.findInString(ele[val].toLowerCase(), searchTerm) && searchTerm) {
                        result.push(ele)
                    }
                }
                else if (Object.prototype.toString.call(ele[val]) === '[object Array]') {
                    ele[val].forEach((stringVal) => {
                        if(this.findInString(stringVal, searchTerm) && searchTerm)
                        result.push(ele)
                    })
                }
            })
        })
        // const filter
            this.setState({
                searchTerm: e.target.value,
                searchedList: this.distinctValues(result)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchedList !== this.state.searchedList) {
            let lists = document.getElementsByClassName('listItemContainer');
            console.log('the total list is', lists)
            this.highlightSearch(lists, this.state.searchTerm)
        }

    }
    
    render() {
        const { searchedList } = this.state
        return (
            <HomeContainer>
                <List onChangeText={this.onChangeText} list={searchedList} />
            </HomeContainer>
        )
    }
}

export default Home
