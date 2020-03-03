import React from 'react'

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`} role="alert">
             <i class="fas fa-exclamation-circle"/>  {alert.message}
          </div>
       )
    )
}

export default Alert
