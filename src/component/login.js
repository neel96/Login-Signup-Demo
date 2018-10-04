import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           email : '' ,
           password : '',
           redirectToReferrer : false
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
            
      if(this.state.email && this.state.password)      
        {
     axios.post(`http://192.168.1.12:3000/api/Users/login`,user)
     .then((response) =>
        { 
            let userresponse = response;
            console.log(userresponse.data);
            if(userresponse){
            sessionStorage.setItem('data',JSON.stringify(userresponse));
            this.setState({redirectToReferrer: true});
            }
            
        },this)
        .catch((error) => alert(error))
                   
    }
}

render(){
    if (this.state.redirectToReferrer){
        
        return (<Redirect to={'/user'}/>)
        }
        if (sessionStorage.getItem('data')){
        
            return (<Redirect to={'/user'}/>)
            }
    return(
        
        <div>
            <form ref="formdemo" onSubmit={this.handleSubmit}>
            <label>
                 Username:
                <input type="email" name="email" onChange={this.handleChange} placeholder="Enter Your EmailID" required/></label><br/>
                <label>
                Password : 
                <input type="password" name="password" onChange={this.handleChange} placeholder="Enter Your Password" required/></label><br/>
                <input type="submit"/>
                </form>
        </div>
    )
}
}