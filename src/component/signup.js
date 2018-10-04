import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           email : '' ,
           password : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
            this.setState({
                [event.target.name] : event.target.value
                
            });
    }
    handleSubmit(event){
            event.preventDefault();

            const user = {
            email : this.state.email,
            password : this.state.password
            };
            console.log(user);
            

     axios.post(`http://192.168.1.12:3000/api/Users`,user)
     .catch((error) => alert("User Already exists"))
    
    }
    

    
render(){
    
    return(

        <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-10">
                        <label >Email address</label>
                        <input type="email" name="email" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Email" required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    </div>
                </div>
                    <br/>
                <div className="form-group">    
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </div>
        </form>
        
    )
}
}