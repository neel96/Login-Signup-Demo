import React from 'react';
import axios from 'axios';

export default class Chats extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           username : '' ,
           message : ''
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
        username : this.state.username,
        message : this.state.message
        };
        console.log(user);
        

 axios.post(`http://192.168.1.12:3000/api/chats`,user)
//   .then(res => {
//     console.log(res);
//     console.log(res.data);
//   })
  alert("message created");
  
}
render(){
    return(
        <div>
            <form ref="formdemo" onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label>
                 Username:  <input type="text" name="username" className="form-control" onChange={this.handleChange} placeholder="Enter Your EmailID" required/></label><br/>
                <label>
                Message :  <textarea type="text" name="message"  className="form-control" onChange={this.handleChange} placeholder="Enter Your Message" required/></label><br/>
                <button type="submit" className="btn btn-success" value="Login">Submit</button>
                </div>
            </form>
        </div>
    )
}
}