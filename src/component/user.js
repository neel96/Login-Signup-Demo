import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Chats from './chats';


export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded: false,
            redirectToReferrer:false,
            token:''
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){ 
        if(sessionStorage.getItem('data'))
        {
        let user = JSON.parse(sessionStorage.getItem('data'));
        console.log(user);
        const token = user.data.id;
        console.log(token);
        axios.get(`http://192.168.1.12:3000/api/chats`, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            console.log(res.data);
        this.setState({
            items: res.data,
            isLoaded : true,
            redirectToReferrer: false
        })
        })
   
    }
    else{
    this.setState({
        redirectToReferrer: true
        })
    }
}


    logout(){
        sessionStorage.setItem("data",'');
     sessionStorage.clear();
     this.setState({redirectToReferrer: true});
    }

    render(){

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'}/>)
          }

        var { isLoaded } = this.state;
        if(!isLoaded){
          return <div> Loading....
        </div>;
        }
        else{
            return(
                <div>
                        <Chats/>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td><strong>UserName</strong></td>
                                    <td><strong>Messages</strong></td>
                                </tr>
                            </thead>
                        {this.state.items.map((item) =>
                            <tbody key={item.id}>
                                <tr>
                                    <td>{item.username}</td>
                                    <td>{item.message}</td>
                                </tr>
                            </tbody>
                            )
                        }
                        </table>
                        <button type="button" onClick={this.logout} className="btn btn-primary">Log Out</button>
                </div>
            )
        }
        
    }
}