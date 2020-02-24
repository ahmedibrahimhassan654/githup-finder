
import React  from 'react'
import PropTypes from 'prop-types'

 const UserItems=({user:{logIn,avatar_url,html_url}})=>  {

   
        return (
            <div className='card text-center' >
                <img src={avatar_url} alt='' className='round-img' style={{width:'100px'}}></img>
                <h3>{logIn}</h3> 
                <div>
                <a className="btn btn-primary btn-sm my-1 " href={html_url} role="button">show profile</a>
                
                
                </div>
            </div>
        )
    
}
UserItems.prototype={
    user:PropTypes.object.isRequired,
    
}
export default UserItems