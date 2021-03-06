// React Imports
import React from "react";
import { Route, Link, Switch } from "react-router-dom";

// Materialize Imports

// CSS Imports
import "./EmployeesCollection.css";
import AvatarPlaceholder from "./AvatarPlaceholder.png";

class EmployeesCollection extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card-panel teal z-depth-5">
            <div className="">
              <ul className="collection z-depth-3">              
                <Link to="/Employees">
                <li className="collection-item avatar">
                  <div className="row">
                      <div className="col s2">
                        <img src={AvatarPlaceholder} alt="" className="circle" />                                      
                        <span className="title">John Smith</span>
                        <p>
                          Employee ID
                          <br />
                          Title
                        </p>
                      </div> 
                        <div className="col s2">
                           <span>Employment Category</span>
                        </div>
                        <div className="col s3 center">
                        <span className="training-status">0 Overdue</span>
                        <p>
                          <span>3</span>Upcoming
                          <br />
                          <span>12</span>Complete
                        </p>
                        </div>
                        <div className="col s2 center">
                         <p>
                           Access Level
                         </p>
                        </div>                       
                        <div className="col s3">
                        <Link class="waves-effect waves-teal btn-flat">Remove</Link>
                        </div>
                    </div>
                  </li>                 
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeesCollection;
