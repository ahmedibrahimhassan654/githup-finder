import React, { Component } from 'react'

export class Search extends Component {
    state={
        search:''
    }
    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.search);
        
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }
    render() {
        return (
            <div>
                <form className='form'onSubmit={this.onSubmit}>

                    <input className="form-control my-0 py-1"   type="text" placeholder="Search user ...." value={this.state.search} name='search' onChange={this.onChange} />
                    <button className="btn btn-dark btn-block" type="submit" value='search'>search user </button>

                </form> 
            </div>
        )
    }
}

export default Search
