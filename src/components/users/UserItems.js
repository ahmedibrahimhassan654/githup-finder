
import React, { Component } from 'react'

 class UserItems extends Component {

    render() {
        const {logIn,avatar_url,html_url}=this.props.user
        return (
            <div className='card text-center' >
                <img src={avatar_url} alt='' className='round-img' style={{width:'60px'}}></img>
                <h3>{logIn}</h3> 
                <div>
                <a className="btn btn-dark btn-sm my-1 " href={html_url} role="button">show profile</a>
                </div>
            </div>
        )
    }
}

export default UserItems
