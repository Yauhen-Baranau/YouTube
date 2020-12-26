import React from 'react';
import './searchBar.css'

class SearchBar extends React.Component {

    state = {
        value:null
    }
 
   setValue = (EO) => {
        this.setState({value:EO.target.value})
    }

    searchByKeyword = () =>{
        this.props.cbSearchByKeyword(this.state.value)
    }

    render() {
        return (
            <div className='searchBar'>
                <input  onChange={this.setValue} type='text'/><button onClick={this.searchByKeyword}>Search</button>
            </div>
            )
        }

}

export default  SearchBar;