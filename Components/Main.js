import React from 'react';
import SearchBar from './SearchBar'
import getByKeyWord from '../api/youtube'
import getId from '../api/getById'
import Search from './Search'
import Video from './Video'
import './Main.css'

class Main extends React.Component {

state = {
    videoList: null,
    videoId:null,
  }
  
    //Search callback. Takes a keyword
    searchByKeyword =(value)=>{
      getByKeyWord(value)
      .then( response => this.setState({videoList:response.data.items}) )
      .catch( error => {console.error(error) })
    }

   
    //URL search. Takes link
    pasteByLink = (value) =>{
        if (!value){
          alert('Fill in the link field!')
        }else{
          this.setState({videoId:getId(value)})
        }
         
    }
    
    render() {
        return (
            <div className='mainContainer'>
                <div>
                    <h5>Search by key words...</h5>
                    <SearchBar cbSearchByKeyword={this.searchByKeyword}/>
                    <br/>
                    { 
                      this.state.videoList !== null &&
                      <Search videoList={this.state.videoList} cbSearchByKeyword={this.searchByKeyword}/>
                    }
                </div>
                <div>
                  <h5>Search by links...</h5>
                      <SearchBar cbSearchByKeyword={this.pasteByLink}/>
                      <br/>
                    {
                    (this.state.videoId !==null)? 
                    <Video videoId={this.state.videoId}/>:
                      null
                    }
                  </div>
            </div>
        )
      }
}

export default Main;