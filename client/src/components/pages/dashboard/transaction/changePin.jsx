import React, { Component } from 'react'
import Sidebar from "./sidebar";
import Customerheader from "../customerheader";

export default class changePin extends Component {
    constructor(){
        super()
        this.state = {
            pin:''
        }
    }
    updatePin(acct_no){
        var pin = document.getElementById("acct").value
        fetch(`/changepin/${acct_no}`, {
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                pin:pin
            })
        })
        .then( res => res.json())
        .then( res => {
            console.log(res)
        })
        .catch( err => console.log(err))
    }
    handleSubmit(e){
        e.preventDefault()
        this.updatePin(this.props.match.params.acct_no)
    }
    handlePin(e){
        this.setState({pin:e.target.pin})
    }
  render() {
    return (
      <div>
        <Customerheader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Sidebar />
            </div>

            <div className="col-lg-8">
              <div
                className="card mt-5"
                style={{ width: "50%", margin: "0 auto" }}
              >
                <div className="card-header dark-text text-center py-4">
                  <h4> Change Pin </h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        value={this.state.pin}
                        id="acct"
                        onChange={this.handlePin.bind(this)}
                        placeholder=" Enter Pin"
                      />
                    </div>
                   
                      {" "}
                      {/* <button
                        className="site-btn sb-gradients"
                        onClick={this.handleContinueTransfer}
                      >
                        Continue{" "}
                      </button> */}
                       <button class="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" type="submit"
                        onClick={this.handleSubmit.bind(this)}
                        >Change pin</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}