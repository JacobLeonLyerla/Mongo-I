import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './Components/friends'



class App extends Component {
  state={
    friends:[]
  }
  componentDidMount(){
    this.updateState()
  }
  updateState = () =>{
    axios
    .get('http://localhost:5000/friends')
    
    .then(response =>{
      console.log(response)
      this.setState({friends: response.data})
    })
    .catch(err =>{
      console.log(err)
    })
  }
  render() {
    console.log(this.state)
    return (
 <div>
<Friends friends={this.state.friends}/>
 </div>
    );
  }
}

export default App;