import React,{Component} from 'react';
import Navbar from"./components/layout/Navbar"
import Users from './components/users/Users'
import Search from"./components/layout/Search"
import Axios from 'axios'

import './App.css';


class App extends Component {
 state={
   users:[],
   loading:false

}

// async componentDidMount(){

//   this.setState({loading:true})
//   const res=await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_HITHUB_CLIENT_ID}&client_Secret=${process.env.REACT_APP_HITHUB_CLIENT_SECRET}`)
//   this.setState({users:res.data,loading:false})
   
// }



//search in githup users
  searchUser=async search=>{
 
   const res= await Axios.get(
    `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_HITHUB_CLIENT_ID}&client_Secret=${process.env.REACT_APP_HITHUB_CLIENT_SECRET}`)
  this.setState({users:res.data.items,loading:false})
 
  console.log(search);
  

}
  render(){
   
    
    return (
   <div className='App'>
    <Navbar />
    
    <div className='container'>
     <Search searchUser={this.searchUser}/>
      <Users loading={this.state.loading} users={this.state.users} />
      </div>
    
   </div>
    );
  }
 
}
export default App;
