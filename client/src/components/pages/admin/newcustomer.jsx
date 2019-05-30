import React, { Component } from "react";
import Adminheader from "./adminheader";
import Sidebar from "./adminsidebar";
import {Link} from 'react-router-dom'
import moment from 'moment'
export class newcustomer extends Component {
  constructor(){
    super()
    this.state = {
      users:[]
    }
  }
  componentDidMount(){
    fetch('/newusers', {
      headers:{
        "Accept":"application/json"
      }
    })
    .then( res => res.json())
    .then( res => {
      this.setState({users: res.info})
      console.log(res.info[0])
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Adminheader />

        <div className="containe">
          <div className="row">
            <div className="col-lg-2.5 ">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <table className=" mt-5 table table-striped table-bordered table-hover table-condensed">
                <tr>

                  <th>FirstName</th>
                  <th>LastName</th>

                  <th> Phone no</th>
                  <th>Email</th>
                  <th>IDcard No</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Address</th>
                  <th>city</th>
                  <th>State</th>
                 
                  <th>Confirm</th>

                </tr>
               
                {this.state.users.map((user, index) => {
                 return <tr key={index}>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.id_card}</td>
                  <td>{user.gender}</td>
                  <td>{moment(user.bdate).format('DD/MM/YYYY')}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  
                  
                  <td><Link to={`/create/acctno/${user._id}`}><button className="btn btn-success">confirm</button></Link></td>
                </tr>
                  
                   
                })}

                <tr><th>user photo</th></tr>
                {this.state.users.map((user, index) => {
                      return <tr key={index}>
                      
                        <td className="mt-3"><img src={user.photo} alt="photo"
                          style={{
                            width: "100%",
                            padding: "1px 5px",
                            borderRadius: "10px",
                           
                          }}alt=""/></td>
                      </tr>
                })}
                
                
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default newcustomer;
