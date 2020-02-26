import React from 'react'
import UserItems from './UserItems'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


 const Users=({loading,users})=>  {

    if (loading) {
     return <Spinner/>
    }else{
        return (
            <div style={userStyle}>
              
                    {users.map(user=>(
                        <UserItems key={user.id} user={user}/>
                        ))}
               
               
            </div>
        )
    }

   
 
}
Users.prototype={
    users :PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}
const userStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap:'1rem',
   
}
export default Users
