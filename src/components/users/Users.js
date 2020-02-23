import React, { Component } from 'react'
import UserItems from './UserItems'

 class Users extends Component {

     state={
        users:[
            {
                id:'1',
                logIn:'mojombo',
                avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url:'https://github.com/mojombo'
        
            },
            {
                id:'2',
                logIn:'defunkt',
                avatar_url:'https://avatars0.githubusercontent.com/u/2?v=4',
                html_url:'https://github.com/defunkt'
        
            }, 
             {
                id:'3',
                logIn:'pjhyett',
                avatar_url:'https://avatars0.githubusercontent.com/u/3?v=4',
                html_url:'https://github.com/pjhyett'
        
            }



        ]
     }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user=>(
                <UserItems key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}
const userStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}
export default Users
