import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state={
        search:''
    }

    static propTypes={
        searchUser:PropTypes.func.isRequired,
        clearUser: PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
    }
    //onsubmit fun
    onSubmit=(e)=>{ 
        e.preventDefault()
        this.props.searchUser(this.state.search);
        this.setState({search:''})
        
    }
    //onchange fun
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }
    render() {
        const{showClear,clearUser}=this.props

        return (
            <div>
                <form className='form'onSubmit={this.onSubmit}>

                    <input 
                    className="form-control my-0 py-1"   
                    type="text" 
                    placeholder="Search user ...." 
                    value={this.state.search} 
                    name='search' 
                    onChange={this.onChange} />
                    
                    <button 
                    className="btn btn-dark btn-block"
                     type="submit" 
                     value='search'>search user 
                     </button>

                </form> 
                {showClear &&
                    <button type="button" class="btn btn-primary btn-lg btn-block "
                    style={{ marginTop: 10 }}
                    onClick={clearUser}
                    
                >clear user </button>}
                

            </div>
        )
    }
}

export default Search
