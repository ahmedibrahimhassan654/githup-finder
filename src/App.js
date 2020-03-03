import React,{Component} from 'react';
import Navbar from"./components/layout/Navbar"
import Users from './components/users/Users'
import Search from "./components/layout/Search"
import Alert from './components/layout/Alert'

import Axios from 'axios'

import './App.css';


class App extends Component {
 state={
   users:[],
   loading: false,
   alert:null

}

// async componentDidMount(){

//   this.setState({loading:true})
//   const res=await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_HITHUB_CLIENT_ID}&client_Secret=${process.env.REACT_APP_HITHUB_CLIENT_SECRET}`)
//   this.setState({users:res.data,loading:false})
   
// }



//search in githup users
  searchUser=async search=>{
 
   const res= await Axios.get(
     `https://api.github.com/search/users?q=${ search }&
    client_id=${process.env.REACT_APP_HITHUB_CLIENT_ID }&
    client_Secret=${ process.env.REACT_APP_HITHUB_CLIENT_SECRET }` )
    this.setState({users:res.data.items,loading:false})
 
  }
 
//clear users from state
    clearUser= ()=>{
    this.setState({users:[],loading:false})
    }
   
   //set alert 
   setAlert = (message,type) => {
     this.setState( { alert: { message, type } } )
     setTimeout( () => this.setState({alert:null}) ,3000)
  }

  render(){
   const{loading,users}=this.state
    
    return (

   <div className='App'>
    <Navbar />
    
        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Search
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users
            loading={loading}
            users={users} />
      </div>
    
   </div>
    );
  }
 
}
export default App;
