
import React, { Component } from 'react'

 class UserItems extends Component {
    state={
        id:'id',
        logIn:'mojombo',
        avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url:'https://github.com/mojombo'

    }
    render() {
        const {logIn,avatar_url,html_url}=this.state
        return (
            <div className='card text-center' >
                <img src={avatar_url} alt='' className='round-img' style={{width:'60px'}}></img>
                <h3>{logIn}</h3>
                <div>
                <a class="btn btn-dark btn-sm my-1 " href={html_url} role="button">show profile</a>
                </div>
            </div>
        )
    }
}

export default UserItems
